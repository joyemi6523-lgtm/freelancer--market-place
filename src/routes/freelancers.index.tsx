import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { freelancers } from "@/lib/data";

export const Route = createFileRoute("/freelancers/")({
  head: () => ({
    meta: [
      { title: "Freelance Specialists — Provost" },
      {
        name: "description",
        content: "Browse vetted freelance designers, engineers and writers with verified ratings and day rates.",
      },
      { property: "og:title", content: "Freelance Specialists — Provost" },
      { property: "og:description", content: "Vetted freelance designers, engineers and writers." },
    ],
  }),
  component: FreelancersPage,
});

function FreelancersPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      freelancers.filter((f) =>
        (f.name + f.role + f.skills.join(" ")).toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
      <header className="enter space-y-6">
        <h1 className="text-balance text-4xl font-extrabold leading-[0.9] tracking-tighter md:text-6xl">
          Top Rated Curators
        </h1>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or discipline..."
          className="field"
          aria-label="Search freelancers"
        />
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((f) => (
          <article key={f.id} className="border border-border bg-card p-5">
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
                <p className="label mt-1 text-muted-foreground">{f.location}</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{f.bio}</p>
            <div className="label flex justify-between border-t border-border/50 pt-4">
              <span>
                Rating: {f.rating} · {f.rate}
              </span>
              <Link to="/freelancers/$freelancerId" params={{ freelancerId: f.id }} className="text-primary">
                View Profile →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
