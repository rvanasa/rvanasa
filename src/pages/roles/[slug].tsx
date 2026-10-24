import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import MarkdownBody from "../../components/MarkdownBody";
import RoleThumbnail from "../../components/RoleThumbnail";
import { getContactInfo, getProjects, getRole, getRoles, type ContactInfo, type ContentEntry, type ProjectContent, type RoleContent } from "../../lib/content";

type RolePageProps = {
  role: ContentEntry<RoleContent>;
  projects: ContentEntry<ProjectContent>[];
  contactInfo: ContactInfo;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getRoles().map((role) => ({ params: { slug: role.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<RolePageProps> = async ({ params }) => {
  const role = getRole(String(params?.slug));
  if (!role) return { notFound: true };

  return {
    props: {
      role,
      projects: getProjects().filter((project) => project.relatedRole === role.slug),
      contactInfo: getContactInfo(),
    },
  };
};

export default function RolePage({ role, projects, contactInfo }: RolePageProps) {
  return (
    <Layout contactInfo={contactInfo}>
      <Head><title>{role.title} | Ryan Vandersmith</title></Head>
      <main className="container-shell max-w-4xl pb-24 pt-28">
        <Link href="/#resume" className="text-sm font-semibold text-accent hover:underline">&larr; Resume</Link>
        <header className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <RoleThumbnail image={role.thumbnail} title={role.title} className="h-28 w-28 shrink-0 rounded-2xl" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{role.company}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">{role.title}</h1>
            <p className="mt-2 text-slate-300">{role.position}</p>
            <p className="mt-1 text-sm text-slate-400">{role.period} <span aria-hidden="true">·</span> {role.location}</p>
          </div>
        </header>
        <div className="mt-8 border-t border-white/10 pt-8">
          <MarkdownBody content={role.content} />
        </div>
        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-xl font-semibold text-white">Related projects</h2>
          {projects.length > 0 ? (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`} className="block rounded-xl border border-white/10 bg-surface p-4 transition hover:border-accent/60">
                    <span className="font-semibold text-white">{project.title}</span>
                    <span className="mt-1 block text-sm text-slate-400">{project.type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : <p className="mt-3 text-sm text-slate-400">No projects are linked to this role yet.</p>}
        </section>
      </main>
    </Layout>
  );
}
