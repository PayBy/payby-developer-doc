import React from "react";

export function FoldableItem({ desc, children }) {
  return (
    <details>
      <summary>{desc}</summary>
      {children}
    </details>
  );
}

export default FoldableItem
