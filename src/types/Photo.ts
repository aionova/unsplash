export interface Photo {
    id: string;
    description?: string;
    urls: {
        small: string;
        thumb: string;
        regular: string;
    },
    user: {
        name: string;
    },
    links: {
        download: string;
    },
    key?: string;
}
