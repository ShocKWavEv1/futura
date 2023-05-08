import { createClient } from "@sanity/client";

export const configuredSanityClient = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});