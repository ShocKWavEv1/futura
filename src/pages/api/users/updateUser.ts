// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "@sanity/client";

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: false,
    token: process.env.SANITY_TOKEN,
}

const client = createClient(config);

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
        const { user_id, items } = JSON.parse(req.body);
        await client
        .patch({query: `*[_type == "cart" && user_id == "${user_id}"]`})
        .set({items: items})
        .commit() // Perform the patch and return a promise
        .then((updatedCart) => {
          console.log('Hurray, shopping cart updated:');
          res.status(200).json({ message: updatedCart });
        })
        .catch((err) => {
          console.error('Oh no, the update failed: ', err.message)
          res.status(200).json({ message: err.message });
        })
}
