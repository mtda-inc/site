export function trackBy(field: string = 'objectId') {
    return (index: any, item: any) => {
        if (!item) return null;
        return item[field];
    };
}
