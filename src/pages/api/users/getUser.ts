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

export default async function getUser(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { user_id } = req.query;
    const query = `*[_type == "cart" && user_id == "${user_id}"]`
    try {
        const users = await client.fetch(query);
        res.status(200).json({ message: users });
    }
    catch (err){
        console.log(err);
        return res.status(500).json({message: "Couldnt get", err});
    }
}