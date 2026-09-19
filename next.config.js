const withMDX = require('@next/mdx')();

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: '/project', destination: '/pt/cases', permanent: true },
      { source: '/techs', destination: '/pt/knowledge', permanent: true },
      { source: '/about', destination: '/pt#about', permanent: true },
      { source: '/contact', destination: '/pt#contact', permanent: true },
      { source: '/blog', destination: '/pt/blog', permanent: true },
      { source: '/reading', destination: '/pt#writing', permanent: true },
      { source: '/manual', destination: '/pt#about', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
