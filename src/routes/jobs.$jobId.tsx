import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { jobs } from "@/lib/data";

export const Route = createFileRoute("/jobs/$jobId")({
  loader: ({ params }) => {
    const job = jobs.find((j) => j.id === params.jobId);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Job not found — Provost" }, { name: "robots", content: "noindex" }] };
    }
    const { job } = loaderData;
    return {
      meta: [
        { title: `${job.title} — Provost` },
        { name: "description", content: job.summary },
        { property: "og:title", content: `${job.title} — Provost` },
        { property: "og:description", content: job.summary },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <Link to="/jobs" className="label text-muted-foreground hover:text-primary">
        ← All openings
      </Link>
      <header className="enter space-y-4 border-b border-border pb-6">
        <span className="label text-primary">{job.category}</span>
        <h1 className="text-balance text-4xl font-extrabold leading-[0.95] tracking-tighter">{job.title}</h1>
        <p className="text-sm text-muted-foreground">{job.company}</p>
        <div className="flex gap-2">
          {job.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="label text-muted-foreground">Scope</h2>
        <p className="max-w-[60ch] text-base leading-relaxed">{job.summary}</p>
        <p className="max-w-[60ch] text-base leading-relaxed text-muted-foreground">
          Engagement runs through a milestone contract held in escrow. Payment is released per accepted deliverable and
          documented in your project ledger.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-4 border border-border bg-card p-6">
        <div className="space-y-1">
          <p className="label text-muted-foreground">Compensation</p>
          <p className="font-mono text-xl font-bold tracking-tighter">{job.rate}</p>
        </div>
        <div className="space-y-1">
          <p className="label text-muted-foreground">Proposals</p>
          <p className="font-mono text-xl font-bold tracking-tighter">12</p>
        </div>
      </section>

      <Link to="/payment" className="btn-primary block text-center">
        Submit Proposal
      </Link>
    </main>
  );
}
