import { createFileRoute, Link } from "@tanstack/react-router";
import { jobs, threads } from "@/lib/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Project Ledger — Provost Dashboard" },
      {
        name: "description",
        content: "Track earnings, active contracts, milestones and escrow across your freelance engagements.",
      },
      { property: "og:title", content: "Project Ledger — Provost Dashboard" },
      { property: "og:description", content: "Earnings, contracts, milestones and escrow in one ledger." },
    ],
  }),
  component: Dashboard,
});

const milestones = [
  { name: "API Hardening", project: "Ledgerhouse", amount: "$2,500.00", status: "In review" },
  { name: "Grid Specimen", project: "Aether Studio", amount: "$1,800.00", status: "Approved" },
  { name: "Annual Report, Draft 3", project: "Meridian Capital", amount: "$3,200.00", status: "Pending" },
];

function Dashboard() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-8">
      <h1 className="enter text-4xl font-extrabold tracking-tighter md:text-6xl">Project Ledger</h1>

      <section className="enter grid grid-cols-2 gap-6 bg-foreground p-6 text-background sm:grid-cols-4">
        {[
          ["Net Earnings", "$14,208.50"],
          ["Contracts", "04"],
          ["In Escrow", "$12,450"],
          ["Milestones", "03"],
        ].map(([k, v]) => (
          <div key={k} className="space-y-1">
            <p className="label opacity-60">{k}</p>
            <p className="text-2xl font-bold tracking-tighter">{v}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="label border-b border-border pb-2 text-muted-foreground">Milestones</h2>
        {milestones.map((m) => (
          <div key={m.name} className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="font-medium tracking-tight">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.project}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm">{m.amount}</p>
              <p className="label text-primary">{m.status}</p>
            </div>
          </div>
        ))}
        <Link to="/payment" className="btn-primary block text-center">
          Release Next Milestone
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="label border-b border-border pb-2 text-muted-foreground">Recent Messages</h2>
          {threads.slice(0, 2).map((t) => (
            <Link key={t.id} to="/messages" className="flex items-center gap-3 border-b border-border pb-4">
              <img src={t.image} alt={t.name} loading="lazy" width={512} height={512} className="size-10 object-cover" />
              <div className="min-w-0">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.preview}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="label border-b border-border pb-2 text-muted-foreground">Recommended Openings</h2>
          {jobs.slice(2, 4).map((j) => (
            <Link key={j.id} to="/jobs/$jobId" params={{ jobId: j.id }} className="block border-b border-border pb-4">
              <p className="label text-primary">{j.category}</p>
              <p className="text-sm font-medium tracking-tight">{j.title}</p>
              <p className="label text-muted-foreground">{j.rate}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
