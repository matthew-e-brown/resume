import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

export interface SharedData {
    name: string,
    contacts: Contact[],
}

export interface Contact {
    text: string,
    url: string,
    icon: {
        style: Exclude<IconPrefix, 'fak'>,
        name: IconName,
    }
}

export interface Section {
    header: string,
    subsections: Subsection[],
}

export interface Subsection {
    header?: string,
    entries: Entry[],
}

export interface Entry {
    title?: string,
    body: string,
}
