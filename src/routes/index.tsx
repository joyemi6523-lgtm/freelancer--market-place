import { createFileRoute, Link } from "@tanstack/react-router";
import { jobs, freelancers } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Provost — Hire Specialist Freelancers" },
      {
        name: "description",
        content:
          "Provost is a curated marketplace connecting studios and companies with senior freelance designers, engineers and writers.",
      },
      { property: "og:title", content: "Provost — Hire Specialist Freelancers" },
      {
        property: "og:description",
        content: "A curated marketplace for senior freelance design, engineering and editorial talent.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-8">
      <section className="enter space-y-6">
        <h1 className="text-balance text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl">
          The Work is the Record.
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for architecture, design, code..."
            className="field pr-24"
            aria-label="Search jobs and talent"
          />
          <span className="label absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">Search</span>
        </div>
      </section>

      <section className="enter space-y-4 [animation-delay:100ms]">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h2 className="label text-muted-foreground">Active Openings ({jobs.length})</h2>
          <Link to="/jobs" className="label text-primary">
            Filters +
          </Link>
        </div>
        {jobs.slice(0, 2).map((job) => (
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
            <h3 className="text-xl font-medium tracking-tight decoration-primary decoration-1 group-hover:underline">
              {job.title}
            </h3>
            <div className="flex gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <section className="enter space-y-4 [animation-delay:200ms]">
        <h2 className="label text-muted-foreground">Top Rated Curators</h2>
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4">
          {freelancers.map((f) => (
            <div key={f.id} className="min-w-[280px] snap-start border border-border bg-card p-5">
              <div className="mb-4 flex gap-4">
                <img
                  src={f.image}
                  alt={f.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="size-14 shrink-0 object-cover"
                />
                <div>
                  <p className="text-lg font-bold tracking-tight">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.role}</p>
                </div>
              </div>
              <div className="label flex justify-between border-t border-border/50 pt-4">
                <span>Rating: {f.rating}</span>
                <Link to="/freelancers/$freelancerId" params={{ freelancerId: f.id }} className="text-primary">
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="enter space-y-6 bg-foreground p-6 text-background [animation-delay:300ms]">
        <h2 className="label opacity-60">Project Ledger</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="label opacity-60">Net Earnings</p>
            <p className="text-2xl font-bold tracking-tighter">$14,208.50</p>
          </div>
          <div className="space-y-1">
            <p className="label opacity-60">Contracts</p>
            <p className="text-2xl font-bold tracking-tighter">04</p>
          </div>
        </div>
        <div className="border-t border-background/10 pt-4">
          <Link to="/messages" className="flex items-center justify-between">
            <p className="text-xs">
              Recent Message: <span className="text-[11px] italic opacity-60">"Final assets delivered..."</span>
            </p>
            <span className="size-2 rounded-full bg-primary" />
          </Link>
        </div>
      </section>

      <section className="enter space-y-4 border border-primary/20 bg-primary/5 p-6 [animation-delay:400ms]">
        <h2 className="label text-primary">Checkout Summary</h2>
        <div className="flex justify-between text-sm">
          <span>Platform Fee (10%)</span>
          <span className="font-mono">$450.00</span>
        </div>
        <div className="flex justify-between border-t border-primary/10 pt-2 text-xl font-bold">
          <span>Total Due</span>
          <span className="font-mono">$4,950.00</span>
        </div>
        <Link to="/payment" className="btn-primary block text-center">
          Initialize Transfer
        </Link>
      </section>
    </main>
  );
}
