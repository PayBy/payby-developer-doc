import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Checkout",
    Svg: require("@site/static/img/checkout.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    ),
  },
  {
    title: "Special payment scenes",
    Svg: require("@site/static/img/special_payment_scenes.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{" "}
        <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "In-person payments",
    Svg: () => (
      <div style={{ display: "flex", height: 200, marginBottom: 7, justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: 200 }} src={require("@site/static/img/in_person_payment.png").default} />
      </div>
    ),
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
  {
    title: "No-code product",
    Svg: () => (
      <div style={{ display: "flex", height: 200, marginBottom: 7, justifyContent: "center", alignItems: "center" }}>
        <img style={{ width: 200 }} src={require("@site/static/img/no_code_product.png").default}></img>
      </div>
    ),
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h3>PayBy offers multiple payment solutions.</h3>
          <p>Whether you have a physical store, an e-commerce website, or an app, you can access PayBy</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
