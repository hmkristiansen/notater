module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style/style.css")
    eleventyConfig.addWatchTarget("./src/style");

    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
          return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
      });

    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };