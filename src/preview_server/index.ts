import fastifyStatic from '@fastify/static';
import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import fastifyCompress from '@fastify/compress';

//const __filename = fileURLToPath(import.meta.url);

//const __dirname = path.dirname(__filename);
// import ViteLoaderPlugin from './plugins/ViteLoaderPlugin'
// import viteRender, {ViteRenderOptions} from './plugin/fasitfy-vite-ssr'

/// import {ThemeMode} from "@p/common"
// console.log(ThemeMode.dark)

const fastify = Fastify({
  logger: true,
});

// fastify.register(fastifyCookie);

// fastify.register(FrontendRoutes);

const main = async () => {
  try {
    await fastify.register(fastifyCompress);
    fastify.register(fastifyStatic, {
      root: `${__dirname}/../../dist/client/`,
      prefix: '/landing-page-playground/',
    });

    /* fastify.get('/ggg', async (request, reply) => {
            try {
         
                return { hello: 'worldd' };
            } catch(e){
                return { hello: 'worldd' }
            }
            
          }) */

    fastify.ready();
    await fastify.listen({ port: 3000, host: '192.168.8.141' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

main();
