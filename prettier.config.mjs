/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  tailwindFunctions: ['tv'],
}

export default config
