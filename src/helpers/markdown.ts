import { marked } from 'marked';

export default function (body: string): string {
  return marked.parse(body, {
    gfm: true,
    sanitize: false,
    smartLists: true,
    headerIds: true,
    xhtml: true
  });
}