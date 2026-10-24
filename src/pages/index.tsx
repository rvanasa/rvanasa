import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { icons } from "../components/Icons";
import RoleThumbnail from "../components/RoleThumbnail";
import SocialLinks from "../components/SocialLinks";
import {
  getContactInfo,
  getEducationEntries,
  getProjects,
  getRoles,
  type ContactInfo,
  type ContentEntry,
  type EducationContent,
  type ProjectContent,
  type ProjectSection,
  type RoleContent,
} from "../lib/content";

const skills = [
  "Python",
  "MetPy",
  "Siphon",
  "Xarray",
  "NumPy / Pandas",
  "Numerical weather model data",
  "Data visualization",
  "TypeScript",
  "React",
  "Node.js",
  "Rust",
  "WebAssembly",
  "Databricks",
];

async function getTotalContributions(username: string) {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=all`,
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { total: Record<string, number> };
    return Object.values(data.total).reduce((sum, count) => sum + count, 0);
  } catch {
    return null;
  }
}

const sections: {
  id: ProjectSection;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    id: "weather",
    eyebrow: "Weather",
    title: "Forecasting and atmospheric analysis tools",
    description:
      "Self-taught meteorology applied through software: mesoanalysis, sounding analysis, inversion forecasting, and terrain-driven flow. Built with Python and scientific packages such as MetPy, Siphon, and Xarray, and used by photographers, storm chasers, and researchers.",
  },
  {
    id: "software",
    eyebrow: "Software development",
    title: "Full-stack applications and data tools",
    description:
      "Production web applications, infrastructure, data analysis, language tooling, and research software built over a decade of professional work and personal passion.",
  },
];

type HomeProps = {
  roles: ContentEntry<RoleContent>[];
  projects: ContentEntry<ProjectContent>[];
  education: ContentEntry<EducationContent>[];
  contactInfo: ContactInfo;
  contributions: number | null;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    roles: getRoles(),
    projects: getProjects(),
    education: getEducationEntries(),
    contactInfo: getContactInfo(),
    contributions: await getTotalContributions("rvanasa"),
  },
});

export default function HomePage({
  roles,
  projects,
  education,
  contactInfo,
  contributions,
}: HomeProps) {
  const highlights = [
    { value: "11", label: "Years building software" },
    ...(contributions
      ? [
          {
            value: `${Math.round(contributions / 1000)}k+`,
            label: "Open source contributions",
          },
        ]
      : []),
    { value: "200k+", label: "Personal project users" },
  ];
  const Pin = icons.Location;
  const Arrow = icons.Arrow;

  return (
    <Layout contactInfo={contactInfo}>
      <Head>
        <title>Ryan Vandersmith | R&D Software Engineer, Meteorology</title>
        <meta
          name="description"
          content="Portfolio of Ryan Vandersmith, an R&D software engineer building weather forecasting and atmospheric analysis tools, with over a decade of experience in software engineering."
        />
      </Head>

      <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 sm:items-center sm:pb-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero.jpg"
          aria-hidden="true"
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/50 to-base/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-base/70 to-transparent" />

        <div className="container-shell relative">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">
            <Pin className="h-4 w-4" /> {contactInfo.location.text}
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Ryan Vandersmith
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            R&D software engineer building weather forecasting tools with over 10
            years of full-stack development experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#weather"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
            >
              View projects <Arrow className="h-4 w-4" />
            </a>
            <SocialLinks links={contactInfo.links} />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/10 bg-surface/60 py-24"
      >
        <div className="container-shell grid gap-12 lg:grid-cols-[320px_1fr]">
          <RoleThumbnail
            image="/media/profile.jpg"
            title="Ryan Vandersmith portrait"
            className="aspect-[4/5] w-full max-w-sm rounded-2xl"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Software engineering meets atmospheric science
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              Growing up in Colorado, I became fascinated by how the atmosphere
              interacts with terrain and taught myself to forecast and analyze
              mountain waves, downslope windstorms, inversions, and severe convection. I turn that knowledge into forecast tools and
              open-source contributions used by photographers, storm chasers,
              and researchers.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Professionally, I worked on an AI website builder,
              led development of custom programming language tooling, and built
              websites as a freelance consultant.
            </p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              I am looking for a role to combine my knowledge of meteorology with expertise in R&D software development.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/15 via-white/5 to-transparent p-5 shadow-soft"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <dd className="bg-gradient-to-r from-white to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
                    {item.value}
                  </dd>
                  <dt className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="container-shell scroll-mt-16 py-24"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            {section.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            {section.description}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.section === section.id)
              .map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft ${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <RoleThumbnail
                    image={project.thumbnail}
                    title={project.title}
                    className={`w-full transition duration-500 group-hover:scale-[1.02] ${index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {project.type}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                      {project.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Read more{" "}
                      <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <section id="resume" className="hidden container-shell scroll-mt-16 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Background
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Resume
        </h2>
        <ol className="mt-10 space-y-8 border-l border-white/15 pl-6 sm:pl-10">
          {roles.map((role) => (
            <li key={role.slug} className="relative">
              <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-base sm:-left-[47px]" />
              <Link
                href={`/roles/${role.slug}`}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-accent/60"
              >
                <RoleThumbnail
                  image={role.thumbnail}
                  title={role.title}
                  className="h-16 w-16 shrink-0 rounded-xl sm:h-24 sm:w-24"
                />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">{role.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-accent">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-400">{role.company}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {role.summary}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <h3 id="education" className="mt-10 scroll-mt-20 text-lg font-semibold text-white">
            Education &amp; honors
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {education.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/education/${entry.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-soft"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {entry.kind}
                  </span>
                  <span className="mt-2 font-semibold text-white group-hover:text-accent">
                    {entry.title}
                  </span>
                  <span className="mt-1 text-sm text-slate-400">
                    {entry.institution}
                  </span>
                  <span className="mt-3 text-xs text-slate-500">
                    {entry.period}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
