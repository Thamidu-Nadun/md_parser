import renderer from "../src/index.js";

const out = renderer("::: tip this is a tip \n:::");
console.log(out.html);