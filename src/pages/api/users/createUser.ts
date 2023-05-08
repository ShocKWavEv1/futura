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
    const { user_id, items } = JSON.parse(req.body)
    try {
        
        const newUser = await client.create({
            _type: "cart",
            user_id,
            items: items,
            has_items: true
        });
        res.status(200).json({ message: newUser });
    }
    catch (err){
        console.log(err);
        return res.status(500).json({message: "Couldnt submit", err});
    }
}
