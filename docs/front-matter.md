# 📝 Front Matter

Front matter allows you to include metadata (written in YAML) at the very beginning of your Markdown file.

## Usage

The `renderer` function automatically parses it and returns it in the `front_data` object.

```markdown
---
title: My Awesome Page
author: Alex Doe
date: 2025-07-05
tags:
  - documentation
  - example
---

# This is the page content

...
```

```javascript
import { renderer } from '@thamidu-nadun/md_parser';

const markdown = `...`; // The content from above
const { front_data } = renderer(markdown);

console.log(front_data.title); // 'My Awesome Page'
console.log(front_data.tags);  // ['documentation', 'example']
```
