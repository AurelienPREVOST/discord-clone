/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io" //Watch the error to know which hostname is asked and change it
    ]
  }
}

module.exports = nextConfig
