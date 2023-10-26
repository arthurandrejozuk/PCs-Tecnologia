/** @type {import('next').NextConfig} */

const nextConfig = {
    
    trailingSlash: true,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
 
    async redirects() {
        return [
            {
                source: `/home`,
                destination: `/`,
                permanent: true,
            }
        ]
    }
  }
  
  module.exports = nextConfig