# 📝 @thamidu-nadun/md_parser

[![NPM version](https://img.shields.io/npm/v/@thamidu-nadun/md_parser.svg)](https://www.npmjs.com/package/@thamidu-nadun/md_parser)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, flexible, and feature-rich Markdown parser designed to bring your text to life! 🚀 Easily convert Markdown to HTML with support for front-matter, emojis, task lists, KaTeX math expressions, and beautiful custom callouts. Perfect for blogs, documentation sites, and any project that needs a little extra sparkle. ✨

## 🌟 Key Features

- **📝 Front Matter**: Extracts YAML metadata right from the top of your files.
- **😄 Emojis**: Full emoji support (`:tada:` becomes 🎉).
- **🦶 Footnotes**: Adds clean and simple footnotes.
- **✅ Task Lists**: Renders GitHub-style task lists.
- **🧮 KaTeX**: Supports elegant mathematical typesetting.
- **🎨 Custom Callouts**: Includes 5 stylish, attention-grabbing callout boxes (Tip, Note, Warning, Info, Error).
- **🔌 Extensible**: Easily inject your own `markdown-it` plugins to add new functionality.

## 📚 Full Documentation

> [!TIP]
> For a deep dive into every feature, including basic Markdown syntax and advanced customization, please check out our **[full documentation in the `docs` folder](./docs)**.

## 📦 Installation

Get started in seconds by installing the package from npm.

```bash
npm i @thamidu-nadun/md_parser
```

## 📖 Basic Usage

Using the parser is straightforward. Import the `renderer` function, pass your Markdown string, and get back the rendered HTML and extracted front matter.

```javascript
import { renderer } from '@thamidu-nadun/md_parser';

const markdown = `
---
title: My Awesome Page
author: Gemini
---

# Hello, world!

This is my first post using this awesome parser. :tada:
`;

const { html, front_data } = renderer(markdown);

console.log('Front Matter:', front_data);
// Output: { title: 'My Awesome Page', author: 'Gemini' }

console.log('HTML Output:', html);
// Output: '<h1>Hello, world!</h1>
<p>This is my first post using this awesome parser. 🎉</p>'
```

## 🎨 Built-in Feature: Custom Callouts

Make your documentation pop with 5 different types of callout blocks. Just wrap your content, and the parser will transform it into beautifully styled HTML `div` elements, complete with icons.

| Markdown Syntax | Purpose                            |
| --------------- | ---------------------------------- |
| `:::tip`        | A helpful tip or suggestion.       |
| `:::note`       | A neutral piece of information.    |
| `:::info`       | An important piece of information. |
| `:::warning`    | A warning or potential pitfall.    |
| `:::error`      | An error or critical warning.      |

**Example in your Markdown file:**

```markdown
:::tip
Don't forget to stay hydrated! 💧
:::
```

> [!NOTE]
> The rich styling for these callouts (colors, borders) is applied via CSS classes. For `README.md` files viewed directly on platforms like **GitHub** or **NPM**, we recommend using GitHub's native alert syntax for a consistent look, as your custom CSS won't be applied there.

**Example for GitHub (`README.md`):**

```markdown
> [!TIP]
> Don't forget to stay hydrated! 💧
```

## 🔌 Extending the Parser

You can easily add any `markdown-it` compatible plugin using the `inject_plugin` function. For example, let's add a plugin to highlight text wrapped in `==`.

```javascript
import { renderer, inject_plugin } from "@thamidu-nadun/md_parser";
import markdownitMark from "markdown-it-mark";

// First, install the plugin: npm install markdown-it-mark

const highlightPlugin = {
  plugin: markdownitMark,
};

// Inject the new plugin
inject_plugin(highlightPlugin);

const markdown = "You can ==highlight text== very easily!";
const { html } = renderer(markdown);

console.log(html);
// Output: "<p>You can <mark>highlight text</mark> very easily!</p>"
```

## 📂 File Structure

Here's a quick look at the project's structure:

```
.
├── src/              # Source Code
│   ├── index.js      # Main parser logic, plugin registration, and exports.
│   └── callOut.js    # Definitions and rendering logic for the custom callout blocks.
├── test/             # Automated tests
│   └── index.test.js # Unit tests for the parser and its features.
├── package.json      # Project metadata, dependencies, and scripts.
└── README.md         # The file you are reading right now.
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/thamidu-nadun/md_parser/issues).

## 📝 License

This project is licensed under the MIT License.
