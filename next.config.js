module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: process.env.ADMIN_URL,
        permanent: true,
      },
    ]
  },
}
