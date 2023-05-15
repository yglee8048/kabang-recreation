module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/members',
        permanent: true
      }
    ];
  }
};
