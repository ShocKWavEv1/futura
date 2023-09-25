/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";


const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ['cdn.sanity.io']
	}
}

export default withPlaiceholder(nextConfig);
