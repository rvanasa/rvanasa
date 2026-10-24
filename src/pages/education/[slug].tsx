import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import MarkdownBody from "../../components/MarkdownBody";
import { getContactInfo, getEducationEntries, getEducationEntry, type ContactInfo, type ContentEntry, type EducationContent } from "../../lib/content";

type EducationPageProps = {
  entry: ContentEntry<EducationContent>;
  contactInfo: ContactInfo;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getEducationEntries().map((entry) => ({ params: { slug: entry.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<EducationPageProps> = async ({ params }) => {
  const entry = getEducationEntry(String(params?.slug));
  if (!entry) return { notFound: true };

  return { props: { entry, contactInfo: getContactInfo() } };
};

export default function EducationPage({ entry, contactInfo }: EducationPageProps) {
  return (
    <Layout contactInfo={contactInfo}>
      <Head><title>{entry.title} | Ryan Vandersmith</title></Head>
      <main className="container-shell max-w-4xl pb-24 pt-28">
        <Link href="/#education" className="text-sm font-semibold text-accent hover:underline">&larr; Education &amp; honors</Link>
        <header className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{entry.kind}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">{entry.title}</h1>
          <p className="mt-2 text-slate-300">{entry.institution}</p>
          <p className="mt-1 text-sm text-slate-400">{entry.period} <span aria-hidden="true">·</span> {entry.location}</p>
        </header>
        <div className="mt-8 border-t border-white/10 pt-8">
          <MarkdownBody content={entry.content} />
        </div>
      </main>
    </Layout>
  );
}
