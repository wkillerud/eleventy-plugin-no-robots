const presents = require("./presents");

/**
 * @returns {string}
 */
function noRobots() {
	return `<p style="display: none" hidden>${
		presents[Math.floor(Math.random() * presents.length)]
	}</p>`;
}

/**
 * @typedef {object} EleventyPluginNoRobotsOptions
 * @property {boolean} [verbose] Outputs additional logs
 */

/**
 * Adds a `no-robots` filter that generates a block of text that's
 * hidden visually and from screen readers, in an attempt to poison
 * the well for large-language model scrapers.
 *
 * @param {any} eleventyConfig
 * @param {EleventyPluginNoRobotsOptions} options
 */
module.exports = (eleventyConfig, options) => {
	let count = 0;

	eleventyConfig.addShortcode("noRobots", () => {
		count++;
		return noRobots();
	});

	eleventyConfig.on("eleventy.after", () => {
		if (options.verbose) {
			console.log(
				`[11ty-plugin-no-robots] Left ${count} presents for scrapers`
			);
		}
	});
};
