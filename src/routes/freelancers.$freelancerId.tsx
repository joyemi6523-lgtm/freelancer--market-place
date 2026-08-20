import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { freelancers } from "@/lib/data";

export const Route = createFileRoute("/freelancers/$freelancerId")({
  loader: ({ params }) => {
    const person = freelancers.find((f) => f.id === params.freelancerId);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Profile not found — Provost" }, { name: "robots", content: "noindex" }] };
    }
    const { person } = loaderData;
    return {
      meta: [
        { title: `${person.name}, ${person.role} — Provost` },
        { name: "description", content: person.bio },
        { property: "og:title", content: `${person.name}, ${person.role} — Provost` },
        { property: "og:description", content: person.bio },
      ],
    };
  },
  component: FreelancerDetail,
});

function FreelancerDetail() {
  const { person } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <Link to="/freelancers" className="label text-muted-foreground hover:text-primary">
        ← All talent
      </Link>

      <header className="enter flex gap-5 border-b border-border pb-6">
        <img
          src={person.image}
          alt={person.name}
          width={512}
          height={512}
          className="size-24 shrink-0 object-cover"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tighter">{person.name}</h1>
          <p className="text-sm text-muted-foreground">
            {person.role} · {person.location}
          </p>
          <p className="label text-primary">
            Rating {person.rating} · {person.rate}
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="label text-muted-foreground">Statement</h2>
        <p className="max-w-[60ch] leading-relaxed">{person.bio}</p>
        <div className="flex flex-wrap gap-2">
          {person.skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 bg-foreground p-6 text-background">
        <div className="space-y-1">
          <p className="label opacity-60">Delivered</p>
          <p className="text-xl font-bold tracking-tighter">48</p>
        </div>
        <div className="space-y-1">
          <p className="label opacity-60">On time</p>
          <p className="text-xl font-bold tracking-tighter">98%</p>
        </div>
        <div className="space-y-1">
          <p className="label opacity-60">Repeat</p>
          <p className="text-xl font-bold tracking-tighter">72%</p>
        </div>
      </section>

      <Link to="/messages" className="btn-primary block text-center">
        Start a Conversation
      </Link>
    </main>
  );
}
