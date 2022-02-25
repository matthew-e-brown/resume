import { marked } from 'marked';

export default function (text: string): string {
  return marked.parseInline(text, { gfm: true, sanitize: false, xhtml: true });
}