const SERVICE_DOMAIN = "gnt0000";
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;

const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

const headers = { "X-MICROCMS-API-KEY": API_KEY };

export const getBlogs = () =>
  fetch(`${BASE_URL}/blogs?orders=-publishedAt`, { headers }).then((r) => r.json());

export const getBlog = (contentId) =>
  fetch(`${BASE_URL}/blogs/${contentId}`, { headers }).then((r) => r.json());
