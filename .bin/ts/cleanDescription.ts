export function cleanDescription(description: string): string {
    if (!description) return 'Описание не доступно';
    return description.replace(/\[.*?\]/g, '');
}
