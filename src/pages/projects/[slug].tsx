import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import MarkdownBody from "../../components/MarkdownBody";
import RoleThumbnail from "../../components/RoleThumbnail";
import { getContactInfo, getProject, getProjects, getRole, type ContactInfo, type ContentEntry, type ProjectContent, type RoleContent } from "../../lib/content";

type ProjectPageProps = {
  project: ContentEntry<ProjectContent>;
  role: ContentEntry<RoleContent> | null;
  contactInfo: ContactInfo;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getProjects().map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  const project = getProject(String(params?.slug));
  if (!project) return { notFound: true };

  return {
    props: {
      project,
      role: project.relatedRole ? getRole(project.relatedRole) ?? null : null,
      contactInfo: getContactInfo(),
    },
  };
};

export default function ProjectPage({ project, role, contactInfo }: ProjectPageProps) {
  return (
    <Layout contactInfo={contactInfo}>
      <Head><title>{project.title} | Ryan Vandersmith</title></Head>
      <main className="container-shell max-w-4xl pb-24 pt-28">
        <Link href={`/#${project.section}`} className="text-sm font-semibold text-accent hover:underline">&larr; All projects</Link>
        <RoleThumbnail image={project.thumbnail} title={project.title} className="mx-auto mt-6 aspect-[16/8] w-full max-w-3xl rounded-2xl" imageFit="contain" />
        <article className="mx-auto mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{project.type}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-xl leading-8 text-slate-300">{project.summary}</p>
          {role && (
            <p className="mt-4 text-sm text-slate-400">
              Related role: <Link href={`/roles/${role.slug}`} className="font-semibold text-accent hover:underline">{role.title} at {role.company}</Link>
            </p>
          )}
          <div className="mt-8 border-t border-white/10 pt-8">
            <MarkdownBody content={project.content} />
          </div>
        </article>
      </main>
    </Layout>
  );
}
