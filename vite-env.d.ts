interface ImportMetaEnv {
    readonly VITE_DRIZZLE_DATABASE_URL: string;
    // add more vars as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}