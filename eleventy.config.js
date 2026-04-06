const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
	// Passthrough copy static assets
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/videos");
	eleventyConfig.addPassthroughCopy("src/webfonts");
	eleventyConfig.addPassthroughCopy("src/admin");

	// Convert products object (keyed by filename) to array
	eleventyConfig.addGlobalData("productsList", () => {
		const productsDir = path.join(__dirname, "src", "_data", "products");
		const files = fs.readdirSync(productsDir).filter(f => f.endsWith(".json"));
		return files.map(f => {
			return JSON.parse(fs.readFileSync(path.join(productsDir, f), "utf8"));
		});
	});

	// Convert FAQs object to sorted array
	eleventyConfig.addGlobalData("faqsList", () => {
		const faqsDir = path.join(__dirname, "src", "_data", "faqs");
		if (!fs.existsSync(faqsDir)) return [];
		const files = fs.readdirSync(faqsDir).filter(f => f.endsWith(".json"));
		return files.map(f => {
			return JSON.parse(fs.readFileSync(path.join(faqsDir, f), "utf8"));
		}).sort((a, b) => (a.order || 99) - (b.order || 99));
	});

	// Convert stores object to array
	eleventyConfig.addGlobalData("storesList", () => {
		const storesDir = path.join(__dirname, "src", "_data", "stores");
		if (!fs.existsSync(storesDir)) return [];
		const files = fs.readdirSync(storesDir).filter(f => f.endsWith(".json"));
		return files.map(f => {
			return JSON.parse(fs.readFileSync(path.join(storesDir, f), "utf8"));
		});
	});

	// Nunjucks filter: filter array by property value
	eleventyConfig.addFilter("where", (arr, key, val) => {
		return (arr || []).filter(item => item[key] === val);
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
		templateFormats: ["njk", "html", "md"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
