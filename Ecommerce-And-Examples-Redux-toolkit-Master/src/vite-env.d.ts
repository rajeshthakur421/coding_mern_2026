/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string; // Add other env vars here
  // readonly VITE_OTHER_VAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
