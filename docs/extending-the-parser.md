# 🔌 Extending the Parser

The parser is built on `markdown-it`, which means you can extend it with any compatible plugin.

## Usage

Use the `inject_plugin` function to add new functionality. For this example, we'll add a plugin to create `<mark>` tags for highlighted text.

**1. Install the plugin:**

```bash
npm install markdown-it-mark
```

**2. Inject it into the parser:**

```javascript
import { renderer, inject_plugin } from '@thamidu-nadun/md_parser';
import markdownitMark from 'markdown-it-mark';

const highlightPlugin = {
    plugin: markdownitMark
};

inject_plugin(highlightPlugin);

const markdown = 'You can ==highlight text== with this plugin.';
const { html } = renderer(markdown);

console.log(html);
// Output: "<p>You can <mark>highlight text</mark> with this plugin.</p>"
```
