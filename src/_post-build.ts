import { JSDOM } from 'jsdom';
import faIcon from './helpers/fa-icon';


function svgBullets(pageContent: string): string {
    const dom = new JSDOM(pageContent);
    const { document } = dom.window;

    const icon = faIcon('far', 'arrow-right-long', 'fa-fw');
    const nested = Array.from(document.querySelectorAll<HTMLLIElement>('li ul li'));

    for (const li of nested) {
        li.innerHTML = `${icon}${li.innerHTML}`;
    }

    return dom.serialize();
}


function noIndents(pageContent: string): string {
    return pageContent.replace(/<p>\s*?\/\/! ?/g, '<p class="no-indent">');
}


export default function (_pageName: string, pageContent: string): string {
    pageContent = svgBullets(pageContent);
    pageContent = noIndents(pageContent);
    return pageContent;
}
