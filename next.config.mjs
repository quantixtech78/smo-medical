/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "smo-medical.com" },
      { protocol: "https", hostname: "www.dentsplysirona.com" },
      { protocol: "https", hostname: "career.dentsplysirona.com" },
      { protocol: "https", hostname: "assets.dentsplysirona.com" },
      { protocol: "https", hostname: "flaesh.com" },
    ],
  },
};

export default nextConfig;
