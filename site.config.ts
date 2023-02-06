/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    baseUrl:
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.NEXT_PUBLIC_VERCEL_URL &&
            `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
        `${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}` ||
        'https://akhamr.codes',
    description:
        'Trying my best to build a portfolio website with just curiosity and lot of stress.',
};
