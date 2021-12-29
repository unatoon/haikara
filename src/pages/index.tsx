import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

import Projects from "../components/Projects";

const Index = () => (
    <Layout>
        <Parallax pages={6}>
            <Hero offset={0} factor={1} />
            <Projects offset={1} factor={2} />
            <About offset={3} factor={2} />
            <Contact offset={5} factor={1} />
        </Parallax>
    </Layout>
);

export default Index;