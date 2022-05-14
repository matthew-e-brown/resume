import { marked } from 'marked';
import hljs from 'highlight.js';

export default function (text: string): string {
    return marked.parse(text, {
        gfm: true,
        smartLists: true,
        headerIds: true,
        xhtml: true,
        highlight(code, language) {
            return hljs.highlight(code, { language }).value
        },
    }).trim();
}
