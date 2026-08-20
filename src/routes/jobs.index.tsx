import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { jobs } from "@/lib/data";

export const Route = createFileRoute("/jobs/")({
  head: () => ({
    meta: [
      { title: "Open Freelance Jobs — Provost" },
      {
        name: "description",
        content: "Browse active freelance contracts in design, engineering, editorial and research on Provost.",
      },
      { property: "og:title", content: "Open Freelance Jobs — Provost" },
      { property: "og:description", content: "Active freelance contracts in design, engineering and editorial." },
    ],
  }),
  component: JobsPage,
});

const categories = ["All", ...Array.from(new Set(jobs.map((j) => j.category)))];

function JobsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const results = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (category === "All" || j.category === category) &&
          (j.title + j.company + j.summary).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="enter space-y-6">
        <h1 className="text-balance text-4xl font-extrabold leading-[0.9] tracking-tighter md:text-6xl">
          Active Openings
        </h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by role, studio or discipline..."
          className="field"
          aria-label="Search jobs"
        />
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                c === category
                  ? "label whitespace-nowrap border border-primary bg-primary px-3 py-1.5 text-primary-foreground"
                  : "label whitespace-nowrap border border-border px-3 py-1.5 text-muted-foreground hover:border-primary hover:text-primary"
              }
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <section className="space-y-4">
        <p className="label border-b border-border pb-2 text-muted-foreground">{results.length} Results</p>
        {results.map((job) => (
          <Link
            key={job.id}
            to="/jobs/$jobId"
            params={{ jobId: job.id }}
            className="group block space-y-3 border-b border-border pb-6"
          >
            <div className="flex items-start justify-between">
              <span className="label text-primary">{job.category}</span>
              <span className="label text-muted-foreground">{job.rate}</span>
            </div>
            <h2 className="text-xl font-medium tracking-tight decoration-primary decoration-1 group-hover:underline">
              {job.title}
            </h2>
            <p className="max-w-[60ch] text-sm text-muted-foreground">{job.summary}</p>
            <div className="flex gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
        {results.length === 0 && <p className="py-12 text-center text-sm text-muted-foreground">No openings match.</p>}
      </section>
    </main>
  );
}
