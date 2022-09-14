import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "antd/dist/antd.variable.min.css";
import styles from "./index.module.css";
import { Button,ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#00A75D",
  },
});

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title hero--primary", styles.title)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.tagline)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button ghost type="primary" size="large">
            <Link to="/docs/createorder">API reference</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
