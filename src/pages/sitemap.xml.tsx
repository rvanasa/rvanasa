import type { GetServerSideProps } from "next";
import { getEducationEntries, getProjects, getRoles } from "../lib/content";

const siteUrl = "https://www.ryanvandersmith.com";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const paths = [
    "/",
    ...getRoles().map((role) => `/roles/${role.slug}`),
    ...getEducationEntries().map((entry) => `/education/${entry.slug}`),
    ...getProjects().map((project) => `/projects/${project.slug}`),
  ];
  const urls = paths.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n");

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}