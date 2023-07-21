/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['links.papareact.com'],
    },
    experimental: {
        serverActions: true,
    },
        
}

module.exports = nextConfig
