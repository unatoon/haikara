// import * as React from "react";
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet"
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";

import HeroDivider from "../components/HeroDivider";

// @ts-ignore
import IsaribikaiMDX from "../sections/isaribikai";

const Isaribikai = () => (
    <Layout>
        <Helmet>
            <title>いさりび会 | SNACK HAIKARA</title>
        </Helmet>
      <Parallax pages={1}>
        <HeroDivider offset={0} factor={1} />
        <Content
          sx={{ variant: `texts.bigger` }}
          speed={0.4}
          offset={0}
          factor={1}
        >
          <Inner>
            <IsaribikaiMDX />
          </Inner>
        </Content>
      </Parallax>
    </Layout>
);

export default Isaribikai;
