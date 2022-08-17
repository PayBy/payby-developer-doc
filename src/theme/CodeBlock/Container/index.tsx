import Container from "@theme-original/CodeBlock/Container";
import type ContainerType from "@theme/CodeBlock/Container";
import type { WrapperProps } from "@docusaurus/types";
import React, { RefObject, useEffect, useRef, useState } from "react";
import "./container.css";
import DownCircle from "./down-circle.svg";

type Props = WrapperProps<typeof ContainerType>;
const DefaultAnimationEasing = "ease-in-out";
const MinimumHeight = 800;

/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */
function getAutoHeightDuration(height: number) {
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

const CollapsedStyles = {
  display: "block",
  overflow: "hidden",
  height: "400px",
} as const;

const ExpandedStyles = {
  display: "block",
  overflow: "visible",
  height: "auto",
} as const;

function applyCollapsedStyle(el: HTMLElement, collapsed: boolean) {
  const collapsedStyles = collapsed && el.scrollHeight > MinimumHeight ? CollapsedStyles : ExpandedStyles;
  el.style.display = collapsedStyles.display;
  el.style.overflow = collapsedStyles.overflow;
  el.style.height = collapsedStyles.height;
}

function useCollapseAnimation({
  maskRef,
  collapsed,
  collapsibleRef,
  toggleSpanRef,
}: {
  collapsed: boolean;
  maskRef: RefObject<HTMLElement>;
  collapsibleRef: RefObject<HTMLDivElement>;
  toggleSpanRef: RefObject<HTMLElement>;
}) {
  const mounted = useRef(false);
  useEffect(() => {
    const el = collapsibleRef.current;
    const mask = maskRef.current;
    const toggleHolder = toggleSpanRef.current.children[0] as HTMLElement;

    function getTransitionStyles() {
      const height = el.scrollHeight;
      const duration = getAutoHeightDuration(height);
      const easing = DefaultAnimationEasing;
      return {
        transition: `height ${duration}ms ${easing}`,
        height: `${height}px`,
      };
    }
    function applyTransitionStyles() {
      const transitionStyles = getTransitionStyles();
      el.style.transition = transitionStyles.transition;
      el.style.height = transitionStyles.height;
    }
    // 第一次渲染时不执行动画
    if (!mounted.current) {
      applyCollapsedStyle(el, collapsed);
      mounted.current = true;
      return undefined;
    }
    el.style.willChange = "height";
    function startAnimation() {
      const animationFrame = requestAnimationFrame(() => {
        // 关闭
        if (collapsed) {
          applyTransitionStyles();
          requestAnimationFrame(() => {
            el.style.height = CollapsedStyles.height;
            el.style.overflow = CollapsedStyles.overflow;
            toggleHolder.style.transform = "rotate(0deg)";
            mask.style.display = "block";
          });
        }
        // 开启
        else {
          mask.style.display = "none";
          toggleHolder.style.transform = "rotate(180deg)";
          el.style.display = "block";
          // el.style.overflow = "visible";
          requestAnimationFrame(() => {
            applyTransitionStyles();
          });
        }
      });
      return () => cancelAnimationFrame(animationFrame);
    }
    return startAnimation();
  }, [collapsed, collapsibleRef]);
}

function useToggleMask({
  toggleSpanRef,
  maskRef,
  collapsibleRef,
}: {
  toggleSpanRef: RefObject<HTMLElement>;
  maskRef: RefObject<HTMLElement>;
  collapsibleRef: RefObject<HTMLElement>;
}) {
  const mounted = useRef(false);
  useEffect(() => {
    const toggleHolder = toggleSpanRef.current;
    const mask = maskRef.current;
    const el = collapsibleRef.current;
    if (!mounted.current) {
      if (el.scrollHeight < MinimumHeight) {
        mask.style.display = "none";
        toggleHolder.style.display = "none";
      } else {
        mask.style.display = "block";
        toggleHolder.style.display = "block";
      }
      mounted.current = true;
    }
  }, [toggleSpanRef, maskRef, collapsibleRef]);
}

export default function ContainerWrapper(props: Props): JSX.Element {
  const collapsibleRef = useRef(null);
  const toggleSpanRef = useRef(null);
  const maskRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);
  useCollapseAnimation({ collapsed, collapsibleRef, maskRef, toggleSpanRef });
  useToggleMask({ toggleSpanRef, maskRef, collapsibleRef });
  return (
    <div>
      <div
        className="block__container-div"
        onTransitionEnd={(e: React.TransitionEvent) => {
          if (e.propertyName !== "height") {
            return;
          }

          applyCollapsedStyle(collapsibleRef.current!, collapsed);
        }}
        ref={collapsibleRef} // Refs are contravariant, which is not expressible in TS
      >
        <div className="block__container__mask-div" ref={maskRef}></div>
        <Container {...props} />
        <span className="block__toggle-span" ref={toggleSpanRef}>
          <DownCircle className="holder" width={28} onClick={() => setCollapsed((v) => !v)} fill="#999999" />
        </span>
      </div>
    </div>
  );
}
