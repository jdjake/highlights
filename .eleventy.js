const yaml = require("js-yaml");
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {

  // Don't try to build pages from these files
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("README.md");

  // Keep highlight data files working after conversion from Jekyll
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // Insert SVG contents
  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addNunjucksFilter('format_date', function(time) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return time.toLocaleDateString("en-US", options);
  });

  return {

    /* Change value if you'd like to deploy to subdirectory, e.g. "/highlights/"
    * Learn more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
    */
    pathPrefix: "/"

  }

};