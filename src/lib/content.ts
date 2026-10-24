import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "public");

export type ContentEntry<T> = T & {
  slug: string;
  content: string;
};

export type RoleContent = {
  order: number;
  title: string;
  company: string;
  position: string;
  period: string;
  location: string;
  summary: string;
  thumbnail: string | null;
};

export type ProjectSection = "weather" | "software";

export type ProjectContent = {
  order: number;
  section: ProjectSection;
  title: string;
  type: string;
  summary: string;
  relatedRole?: string;
  thumbnail: string | null;
};

export type EducationContent = {
  order: number;
  title: string;
  institution: string;
  kind: string;
  period: string;
  location: string;
  summary: string;
};

export type ContactInfo = {
  links: {
    label: string;
    text: string;
    href: string;
    surfaces: ("resume" | "llms")[];
  }[];
  location: {
    label: string;
    text: string;
    surfaces: ("resume" | "llms")[];
  };
};

function readEntries<T extends { order: number }>(collection: "roles" | "projects" | "education"): ContentEntry<T>[] {
  const directory = path.join(contentRoot, collection);

  return fs.readdirSync(directory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.slice(0, -3).replace(/^\d+-/, "");
      const parsed = matter(fs.readFileSync(path.join(directory, filename), "utf8"));

      return {
        ...(parsed.data as T),
        slug,
        content: parsed.content.trim(),
      };
    })
    .sort((left, right) => left.order - right.order);
}

export function getRoles() {
  return readEntries<Omit<RoleContent, "thumbnail">>("roles").map((role) => {
    const extension = ["png", "jpg", "webp"].find((format) =>
      fs.existsSync(path.join(contentRoot, "roles", `${role.slug}.${format}`)),
    );

    return {
      ...role,
      thumbnail: extension ? `/roles/${role.slug}.${extension}` : null,
    };
  });
}

export function getProjects() {
  return readEntries<Omit<ProjectContent, "thumbnail">>("projects").map((project) => {
    const extension = ["png", "jpg", "webp"].find((format) =>
      fs.existsSync(path.join(contentRoot, "projects", `${project.slug}.${format}`)),
    );

    return { ...project, thumbnail: extension ? `/projects/${project.slug}.${extension}` : null };
  });
}

export function getEducationEntries() {
  return readEntries<EducationContent>("education");
}

export function getEducationEntry(slug: string) {
  return getEducationEntries().find((entry) => entry.slug === slug);
}

export function getContactInfo(): ContactInfo {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "lib", "contact.json"), "utf8")) as ContactInfo;
}

export function getRole(slug: string) {
  return getRoles().find((role) => role.slug === slug);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}