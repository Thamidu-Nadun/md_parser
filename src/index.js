import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import { full as Emoji } from "markdown-it-emoji";
import MarkdownItFootNote from 'markdown-it-footnote';
import markdownItTaskLists from "markdown-it-task-lists";
import markdownItFrontMatter from "markdown-it-front-matter";
import yaml from 'js-yaml';
import call_out_boxes from './callOut.js';
import markdownItKatex from "markdown-it-katex";

/** example:
 * The data at the start
 * date: 12/12/2025
 */
let _current_front_data = "";


/**
 * List of default plugins
 * @constant {plugin: Function, properties: object|Function|null}
 */
const plugins = [
    { plugin: Emoji, properties: {} },
    { plugin: MarkdownItFootNote, properties: {} },
    { plugin: markdownItTaskLists, properties: { enabled: true, label: true, labelAfter: true } },
    { plugin: markdownItFrontMatter, properties: front_matter => { _current_front_data = yaml.load(front_matter) } },
    { plugin: markdownItKatex, properties: {} },
];

const markdown = MarkdownIt({
    breaks: true,
    linkify: true
});

/**
 * Inject Internal Custom Plugins
 */
call_out_boxes.forEach(({ name, render }) => {
    markdown.use(MarkdownItContainer, name, { render });
});

/**
 * Inject External Plugins
 */
plugins.forEach((plugin) => {
    markdown.use(plugin.plugin, plugin.properties);
});


/**
 * 
 * Inject Client Plugins
 * @param {Object} plugin - The plugin Object
 * @param {Function} plugin.plugin - The main function to be used.
 * @param {Object|Function|null} - plugin.properties - Optional configuration for the plugin.
 * @returns {void}
 *
 * @throws {Error} - Throws if the plugin object is invalid or has an unsupported structure.
 */
export const inject_plugin = (plugin) => {
    if (
        typeof plugin === "undefined" ||
        typeof plugin !== "object" ||
        (
            typeof plugin.properties !== "undefined" &&
            typeof plugin.properties !== "function" &&
            typeof plugin.properties !== "object"
        )
    ) {
        throw new Error("Invalid plugin format. Expected { plugin: Function, properties?: Object | Function }");
    }

    markdown.use(plugin.plugin, plugin.properties);
};

/**
 * 
 * @param {string} content - markdown content
 * @returns {{html: string, front_data: string}}
 * html: HTML content
 * 
 * font_data: The data at the beginning of markdown as JSON
 */
const renderer = (content) => {
    _current_front_data = "";
    const html = markdown.render(content);
    return {
        html,
        front_data: _current_front_data
    };
};

export default renderer;
