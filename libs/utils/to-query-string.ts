export function toQueryString(params: Record<string, any>) {
    return Object.entries(params)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return value.map(v => `${key}=${v}`).join('&');
            }
            return `${key}=${value}`;
        })
        .join('&');
}