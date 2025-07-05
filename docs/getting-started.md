# 🚀 Getting Started

This guide will walk you through installing the parser and using it for the first time.

## 📦 Installation

Install the package from npm using the following command:

```bash
npm i @thamidu-nadun/md_parser
```

## 📖 Basic Usage

The primary function is `renderer`. You import it, pass your Markdown string, and it returns the rendered HTML and any extracted front-matter data.

```javascript
import { renderer } from '@thamidu-nadun/md_parser';

const markdown = `
---
title: My First Post
---

# Hello, World!

This is a paragraph.
`;

const { html, front_data } = renderer(markdown);

console.log('Front Matter:', front_data);
// Output: { title: 'My First Post' }

console.log('HTML Output:', html);
// Output: '<h1>Hello, World!</h1>\n<p>This is a paragraph.</p>\n'
```

```