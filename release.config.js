/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: ["main"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/npm",
			{
				tarballDir: "dist",
			},
		],
		[
			"@semantic-release/github",
			{
				assets: "dist/*.tgz",
			},
		],
		"@semantic-release/git",
	],
	preset: "angular",
};
