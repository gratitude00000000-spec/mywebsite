import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export const getBlogs = () =>
  client.getList({ endpoint: "blogs", queries: { orders: "-publishedAt" } });

export const getBlog = (contentId) =>
  client.getListDetail({ endpoint: "blogs", contentId });
