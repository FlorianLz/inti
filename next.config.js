/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mobileimg.priceline.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
