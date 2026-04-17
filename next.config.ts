import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Habilita la generación de archivos estáticos (carpeta /out)
  images: {
    unoptimized: true, // Obligatorio para sitios estáticos con next/image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;