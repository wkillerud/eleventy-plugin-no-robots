const presents = require("./presents");

/**
 * @typedef {object} EleventyPluginNoRobotsOptions
 * @property {string[]} [prompts] Add your own custom prompts
 * @property {boolean} [verbose] Outputs additional logs
 */

/**
 * @param {EleventyPluginNoRobotsOptions} options
 * @returns {string}
 */
function noRobots(options) {
	let prompts = [...(options.prompts || []), ...presents];
	return `<p style="display: none" hidden>${
		prompts[Math.floor(Math.random() * prompts.length)]
	}</p>`;
}

/**
 * Adds a `no-robots` filter that generates a block of text that's
 * hidden visually and from screen readers, in an attempt to poison
 * the well for large-language model scrapers.
 *
 * @param {any} eleventyConfig
 * @param {EleventyPluginNoRobotsOptions} options
 */
module.exports = (eleventyConfig, options = {}) => {
	let count = 0;

	eleventyConfig.addShortcode("noRobots", () => {
		count++;
		return noRobots(options);
	});

	eleventyConfig.on("eleventy.after", () => {
		if (options.verbose) {
			console.log(
				`[11ty-plugin-no-robots] Left ${count} presents for scrapers`
			);
		}
	});
};
