module.exports = {
  siteMetadata: {
    siteUrl: "https://haikara.unatoon.ink",
    title: "SNACK HAIKARA",

    // For cara theme: https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara#additional-configuration
    siteTitle: "SNACK HAIKARA",
    siteTitleAlt: "SNACK HAIKARA",
    siteHeadline: "エンジョイ スプラトゥーン",
    siteDescription: "スナックハイカラのサイトです",
    siteLanguage: "ja",
    siteImage: "/images/banner-2.png",
    author: "@unatoon",
  },
  plugins: ["gatsby-plugin-emotion",
    {
      resolve: "@lekoarts/gatsby-theme-cara",
    }
  ],
};
