module.exports = {
  siteMetadata: {
    siteUrl: "https://haikara.unatoon.ink",
    title: "Snack Haikara",

    // For cara theme: https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara#additional-configuration
    siteTitle: "スナックハイカラ",
    siteTitleAlt: "スナックハイカラ",
    siteHeadline: "エンジョイ スプラトゥーン",
    siteDescription: "スナックハイカラのサイトです",
    siteLanguage: "ja",
    siteImage: "/banner.jpg",
    author: "@unatoon",
  },
  plugins: ["gatsby-plugin-emotion",
    {
      resolve: "@lekoarts/gatsby-theme-cara",
    }
  ],
};
