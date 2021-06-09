import React, {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <Layout
    //   title={`Hello from ${siteConfig.title}`}
    //   description="Description will go into a meta tag in <head />">
    //   <main>
    //     test
    //   </main>
    // </Layout>
    // 暫時 redirect 到 docs intro 頁面
    <Redirect to="/docs/intro" ></Redirect>
  );
}
