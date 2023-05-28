/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
      }
    ];
  }
  return { rewrites }
}

