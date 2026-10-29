import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

interface RouteMeta {
  route: string;
  fileName: string;
  title: string;
  description: string;
}

const ROUTES_TO_EMIT: RouteMeta[] = [
  {
    route: '/about',
    fileName: 'about/index.html',
    title:
      'About Suraj Rai — Best Software Developer & Top Rated Engineer in Nepal | 8+ Yrs Experience',
    description:
      'Explore the career and architecture expertise of Suraj Rai, top rated software developer and tech lead in Nepal: 8+ years leading full-stack engineering across React, Node.js, Fastify, Spring Boot, AI/MCP pipelines, and AWS/Docker.',
  },
  {
    route: '/projects',
    fileName: 'projects/index.html',
    title:
      'Selected Projects by Suraj Rai — Top Rated Software Engineer in Nepal | 12Deg, Bimbo & EncoraDB',
    description:
      'Explore flagship production platforms (12Deg PaaS, Bimbo AI DAM, Embleema HL7 FHIR) and open-source tools engineered by Suraj Rai, top rated software engineer in Nepal.',
  },
  {
    route: '/contact',
    fileName: 'contact/index.html',
    title: 'Hire Suraj Rai — Top Rated Software Engineer & Best Tech Lead in Nepal',
    description:
      'Get in touch with Suraj Rai in Chitwan, Nepal for Senior Full-Stack Engineer / Tech Lead roles, high-scale system architecture consulting, or open-source collaboration.',
  },
];

function seoStaticRoutesPlugin(): Plugin {
  return {
    name: 'seo-static-routes',
    enforce: 'post',
    generateBundle(_, bundle) {
      const indexAsset = bundle['index.html'];
      if (!indexAsset || indexAsset.type !== 'asset' || typeof indexAsset.source !== 'string') {
        return;
      }

      const baseHtml = indexAsset.source;

      for (const item of ROUTES_TO_EMIT) {
        const canonical = `https://surajrai.name.np${item.route}`;
        const routeHtml = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${item.title}</title>`)
          .replace(
            /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
            `<meta name="title" content="${item.title}" />`
          )
          .replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="description" content="${item.description}" />`
          )
          .replace(
            /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
            `<link rel="canonical" href="${canonical}" />`
          )
          .replace(
            /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:url" content="${canonical}" />`
          )
          .replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:title" content="${item.title}" />`
          )
          .replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
            `<meta property="og:description" content="${item.description}" />`
          )
          .replace(
            /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:url" content="${canonical}" />`
          )
          .replace(
            /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:title" content="${item.title}" />`
          )
          .replace(
            /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
            `<meta name="twitter:description" content="${item.description}" />`
          );

        this.emitFile({
          type: 'asset',
          fileName: item.fileName,
          source: routeHtml,
        });
      }

      // Emit 404.html so GitHub Pages serves the SPA cleanly for any deep route
      this.emitFile({
        type: 'asset',
        fileName: '404.html',
        source: baseHtml,
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoStaticRoutesPlugin()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
