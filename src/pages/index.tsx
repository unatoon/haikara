import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import ThemeAbout from "@lekoarts/gatsby-theme-cara/src/components/about";

import Projects from "../components/Projects";
import About from "../components/About";

const Index = () => (
    <Layout>
        <Parallax pages={7}>
            <Hero offset={0} factor={1} />
            <Projects offset={1} factor={2} />
            <ThemeAbout offset={3} factor={2} />
            <About offset={5} factor={2} />
        </Parallax>
    </Layout>
);

export default Index;