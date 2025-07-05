import { renderer, inject_plugin } from '../src/index.js';
import { describe, it, expect } from 'vitest';

describe("Markdown Parser Test", () => {
    it("Render Headings", () => {
        const input = "# Heading 1";
        const out = renderer(input);
        expect(out.html).toContain("<h1>Heading 1</h1>")
    });
    it("Render Bold Text", () => {
        const input = "**Bold**";
        const out = renderer(input);
        expect(out.html).toBe("<p><strong>Bold</strong></p>\n");
    });
    it('renders a footnote', () => {
        const input = 'Here is a footnote[^1].\n\n[^1]: This is the footnote.';
        const output = renderer(input);
        expect(output.html).toContain('<sup');
        expect(output.html).toContain('This is the footnote');
    });
    it('renders link automatically', () => {
        const input = 'Check out https://example.com';
        const output = renderer(input);
        expect(output.html).toContain('<a href="https://example.com"');
    });
});
