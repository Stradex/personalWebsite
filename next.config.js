/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
     trailingSlash: true,
    //Básicamente este images : { unoptimized: true } fue el que me permitio generar los HTML
    images: {
        unoptimized: true,
    },
  }
   
  module.exports = nextConfig