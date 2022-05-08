/**
 * This helper imports an icon from the FontAwesome module and *manually* generates the SVG from its
 * path data. This method expects that the required styles will be there to accompany the raw SVG;
 * usually they come from the FontAwesome kit or from some other source during the build process.
 */

import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';


function pickPackage(prefix: IconPrefix): string {
    switch (prefix) {
        case 'fas': return 'pro-solid-svg-icons';
        case 'far': return 'pro-regular-svg-icons';
        case 'fal': return 'pro-light-svg-icons';
        case 'fat': return 'pro-thin-svg-icons';
        case 'fad': return 'pro-duotone-svg-icon';
        case 'fab': return 'free-brands-svg-icons';
        // 'fak' is used for user uploaded ones
        default: throw new Error(`Unsupported icon prefix: ${prefix}`);
    }
}


export default function (iconPrefix: Exclude<IconPrefix, 'fak'>, iconName: IconName): string {

    // Normalize name to camelCase for importing; ensure 'fa' prefix is present
    // https://stackoverflow.com/a/60738940/10549827
    let nameCamel = iconName.replace(/-./g, m => m[1].toUpperCase());
    if (!iconName.startsWith('fa'))
        nameCamel = `fa${iconName[0].toUpperCase()}${iconName.slice(1)}`;

    const packageName: string = pickPackage(iconPrefix);

    // Need to use `require` over `import` because Handlebars does not support
    // asynchronous helpers
    /* eslint-disable @typescript-eslint/no-var-requires */
    const iconModule = require(`@fortawesome/${packageName}/${nameCamel}`);

    const width: number = iconModule.width;
    const height: number = iconModule.height;
    const svgPathData: string | string[] = iconModule.svgPathData;

    let paths: string;
    if (Array.isArray(svgPathData)) {
        const s = `<path fill="currentColor" d="${svgPathData[0]}" class="fa-secondary"></p>`;
        const p = `<path fill="currentColor" d="${svgPathData[1]}" class="fa-primary"></p>`;
        paths = `<g class="fa-duotone-group">${s}${p}</g>`;
    } else {
        paths = `<path fill="currentColor" d="${svgPathData}"></path>`;
    }

    // Derive from icon size; used by styles included with svg kits
    const derivedWidth = Math.ceil(width / height * 16);
    // Derive kebab-case name for use in DOM attributes
    // https://stackoverflow.com/a/67243723/10549827
    const nameKebab = nameCamel.replace(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        (match, capture) => `${capture ? '-' : ''}${match.toLowerCase()}`
    );

    const classes = [
        `svg-inline--fa`,
        `fa-w-${derivedWidth}`,
        nameKebab, // includes the 'fa'
    ];

    const attrs = Object.entries({
        'class': classes.join(' '),
        'aria-hidden': 'true',
        'focusable': 'false',
        'data-prefix': iconPrefix,
        'data-icon': nameKebab,
        'role': 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': `0 0 ${width} ${height}`,
        'data-fa-i2svg': ''
    })
        .map(([attr, value]) => `${attr}="${value}"`)
        .join(' ');


    return `<svg ${attrs}>${paths}</svg>`;
}
