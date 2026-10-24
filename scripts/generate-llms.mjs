import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const publicDirectory = path.join(process.cwd(), "public");
const siteUrl = "https://www.ryanvandersmith.com";

function readEntries(collection) {
  return fs.readdirSync(path.join(publicDirectory, collection))
    .filter((filename) => /^\d+-.+\.md$/.test(filename))
    .map((filename) => {
      const parsed = matter(fs.readFileSync(path.join(publicDirectory, collection, filename), "utf8"));
      const slug = filename.replace(/^\d+-/, "").replace(/\.md$/, "");

      return { ...parsed.data, filename, slug };
    })
    .sort((left, right) => left.order - right.order);
}

const roles = readEntries("roles");
const projects = readEntries("projects");
const education = readEntries("education");
const contactInfo = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "lib", "contact.json"), "utf8"));
const pages = [
  ...roles.map((role) => ({
    title: `${role.company} role`,
    route: `/roles/${role.slug}`,
    source: `/roles/${role.filename}`,
  })),
  ...education.map((entry) => ({
    title: entry.title,
    route: `/education/${entry.slug}`,
    source: `/education/${entry.filename}`,
  })),
  ...projects.map((project) => ({
    title: project.title,
    route: `/projects/${project.slug}`,
    source: `/projects/${project.filename}`,
  })),
];

const generatedSections = [
  `## Career highlights\n\n${roles.map((role) => `- ${role.company} (${role.period}): ${role.summary}`).join("\n")}`,
  `## Pages\n\n- [Resume](${siteUrl}/)\n${pages.map((page) => `- [${page.title}](${siteUrl}${page.route})`).join("\n")}`,
  `## Markdown sources\n\n${pages.map((page) => `- [${page.title} source](${siteUrl}${page.source})`).join("\n")}`,
  `## Contact\n\n${contactInfo.links.filter((link) => link.surfaces.includes("llms")).map((link) => `- ${link.label}: [${link.text}](${link.href})`).join("\n")}\n- ${contactInfo.location.label}: ${contactInfo.location.text}`,
].join("\n\n");

const sitemapRoutes = ["/", ...pages.map((page) => `${page.route}/`)];
const sitemapUrls = sitemapRoutes
  .map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`)
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;

const profileSections = [
  `# ${contactInfo.profile.name}`,
  `> ${contactInfo.profile.tagline}`,
  contactInfo.profile.summary,
  `## Expertise\n\n${contactInfo.profile.expertise.join("; ")}.`,
].join("\n\n");

fs.writeFileSync(path.join(publicDirectory, "llms.txt"), `${profileSections}\n\n${generatedSections}\n`);
fs.writeFileSync(path.join(publicDirectory, "sitemap.xml"), sitemap);
