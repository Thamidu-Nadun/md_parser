const svgIcons = {
    tip: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> ',
    note: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    error: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
};

const boxes = [
    {
        name: "tip",
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return `
          <div class="my-4 border-l-4 p-4 rounded border-green-500 bg-black text-gray-100">
            <span class="text-green-500 flex gap-2">
              ${svgIcons.tip}
              TIP
            </span>
            <div class="mt-4 ml-2">
        `;
            } else {
                // closing tag
                return "</div></div>";
            }
        },
    },
    {
        name: "note",
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return `
          <div class="my-4 border-l-4 p-4 rounded border-blue-500 bg-black text-gray-100">
            <span class="text-blue-500 flex gap-2">
              ${svgIcons.note}
              NOTE
            </span>
            <div class="mt-4 ml-2">
        `;
            } else {
                // closing tag
                return "</div></div>";
            }
        },
    },
    {
        name: "warning",
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return `
          <div class="my-4 border-l-4 p-4 rounded border-yellow-500 bg-black text-gray-100">
            <span class="text-yellow-500 flex gap-2">
              ${svgIcons.warning}
              WARNING
            </span>
            <div class="mt-4 ml-2">
        `;
            } else {
                // closing tag
                return "</div></div>";
            }
        },
    },
    {
        name: "info",
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return `
          <div class="my-4 border-l-4 p-4 rounded border-blue-500 bg-black text-gray-100">
            <span class="text-blue-500 flex gap-2">
              ${svgIcons.info}
              INFO
            </span>
            <div class="mt-4 ml-2">
        `;
            } else {
                // closing tag
                return "</div></div>";
            }
        },
    },
    {
        name: "error",
        render: (tokens, idx) => {
            if (tokens[idx].nesting === 1) {
                // opening tag
                return `
          <div class="my-4 border-l-4 p-4 rounded border-red-500 bg-black text-gray-100">
            <span class="text-red-500 flex gap-2">
              ${svgIcons.error}
              ERROR
            </span>
            <div class="mt-4 ml-2">
        `;
            } else {
                // closing tag
                return "</div></div>";
            }
        },
    }
];

export default boxes;