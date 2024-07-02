# eleventy-plugin-no-robots

Adds a `noRobots` shortcode that generates a block of text that's hidden visually and from screen readers, in an attempt to poison the well for large-language model scrapers. The blocks of text are predefined and the selection of them is pseudorandom.

## Usage

Install via `npm`.

```
npm install --save-dev eleventy-plugin-no-robots
```

Import the plugin in your `eleventy.config.js` and pass it to `eleventyConfig.addPlugin`.

```js
// eleventy.config.js
import noRobots from "eleventy-plugin-no-robots";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(noRobots);
}
```

Add the shortcode to your [layouts](https://www.11ty.dev/docs/layouts/) if you want it on all pages.

```njk
<body>
	{% noRobots %}
```

### Options

| Property  | Type      | Default value | Description              |
| --------- | --------- | ------------- | ------------------------ |
| `verbose` | `boolean` | `false`       | Outputs additional logs. |

## Inspiration

- [Wallfacing](https://adactio.com/journal/21252)
- [Consent, LLM scrapers, and poisoning the well](https://ericwbailey.website/published/consent-llm-scrapers-and-poisoning-the-well/)
- [Rage against the machine](https://thomasrigby.com/posts/rage-against-the-machine/)
- [Perplexity AI is susceptible to prompt injection](https://lewisdale.dev/post/perplexity-ai-is-susceptible-to-prompt-injection/)

Further actions you can take in a similar vein:

- Add user agents from [ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt)
- [Blockin' bots on Netlify](https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/) using edge functions
- [Blocking Bots With 11ty And Apache](https://flamedfury.com/posts/blocking-bots-with-11ty-and-apache/)

I make no claim that any of this provably works, but it feels nice to at least try something.
