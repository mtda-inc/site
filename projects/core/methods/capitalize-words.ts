import { toLower, trim } from 'lodash';

export function capitalizeWords(value: string) {
    //
    // Validate value
    if (!value) return value;

    //
    // Trim and capitalize words
    return trim(toLower(value).replace(/\b\w/g, (l) => l.toUpperCase()));
}
