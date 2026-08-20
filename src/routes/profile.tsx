import { createFileRoute, Link } from "@tanstack/react-router";
import { freelancers } from "@/lib/data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — Provost" },
      { name: "description", content: "Edit your public Provost profile: statement, disciplines, rate and portfolio." },
      { property: "og:title", content: "Your Profile — Provost" },
      { property: "og:description", content: "Manage your public freelance profile on Provost." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const me = freelancers[1]!;

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <header className="enter flex gap-5 border-b border-border pb-6">
        <img src={me.image} alt={me.name} width={512} height={512} className="size-24 shrink-0 object-cover" />
        <div className="space-y-2">
          <p className="label text-primary">Your Profile</p>
          <h1 className="text-3xl font-extrabold tracking-tighter">{me.name}</h1>
          <p className="text-sm text-muted-foreground">
            {me.role} · {me.location}
          </p>
        </div>
      </header>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label htmlFor="headline" className="label text-muted-foreground">
            Headline
          </label>
          <input id="headline" defaultValue={me.role} className="field" />
        </div>
        <div className="space-y-2">
          <label htmlFor="statement" className="label text-muted-foreground">
            Statement
          </label>
          <textarea id="statement" rows={4} defaultValue={me.bio} className="field" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="rate" className="label text-muted-foreground">
              Hourly rate
            </label>
            <input id="rate" defaultValue={me.rate} className="field font-mono" />
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="label text-muted-foreground">
              Location
            </label>
            <input id="location" defaultValue={me.location} className="field" />
          </div>
        </div>
        <div className="space-y-2">
          <p className="label text-muted-foreground">Disciplines</p>
          <div className="flex flex-wrap gap-2">
            {me.skills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Save Profile
        </button>
      </form>

      <Link to="/freelancers/$freelancerId" params={{ freelancerId: me.id }} className="label block text-primary">
        View public profile →
      </Link>
    </main>
  );
}
