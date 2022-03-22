import Prismic from '@prismicio/client';

export function getPrismicClient(req?) {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACESS_TOKEN
  });

  return prismic;
}
