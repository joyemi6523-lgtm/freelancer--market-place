import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { threads } from "@/lib/data";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Messages — Provost" },
      { name: "description", content: "Talk directly with clients and freelancers about scope, drafts and delivery." },
      { property: "og:title", content: "Messages — Provost" },
      { property: "og:description", content: "Direct conversations about scope, drafts and delivery." },
    ],
  }),
  component: Messages,
});

function Messages() {
  const [activeId, setActiveId] = useState(threads[0]!.id);
  const [draft, setDraft] = useState("");
  const active = threads.find((t) => t.id === activeId)!;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="enter mb-6 text-4xl font-extrabold tracking-tighter md:text-6xl">Correspondence</h1>

      <div className="grid gap-0 border border-border md:grid-cols-[280px_1fr]">
        <aside className="border-b border-border md:border-b-0 md:border-r">
          <p className="label border-b border-border px-4 py-3 text-muted-foreground">Threads</p>
          <ul className="max-h-56 overflow-y-auto md:max-h-none">
            {threads.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActiveId(t.id)}
                  className={
                    "flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left " +
                    (t.id === activeId ? "bg-primary/5" : "hover:bg-secondary")
                  }
                >
                  <img src={t.image} alt={t.name} loading="lazy" width={512} height={512} className="size-9 object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="flex justify-between">
                      <span className="text-sm font-medium">{t.name}</span>
                      <span className="label text-muted-foreground">{t.time}</span>
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">{t.preview}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex min-h-[420px] flex-col bg-card">
          <header className="flex items-center gap-3 border-b border-border px-4 py-3">
            <img src={active.image} alt={active.name} width={512} height={512} className="size-10 object-cover" />
            <div>
              <p className="text-sm font-medium">{active.name}</p>
              <p className="label text-muted-foreground">{active.role}</p>
            </div>
          </header>

          <div className="flex-1 space-y-3 p-4">
            {active.messages.map((m, i) => (
              <div key={i} className={m.from === "me" ? "flex justify-end" : "flex"}>
                <div
                  className={
                    "max-w-[85%] border p-3 text-sm " +
                    (m.from === "me"
                      ? "border-primary/20 bg-primary/5"
                      : "border-border bg-background text-muted-foreground")
                  }
                >
                  {m.text}
                  <span className="label mt-2 block opacity-60">{m.time}</span>
                </div>
              </div>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault();
              setDraft("");
            }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a reply..."
              aria-label="Message"
              className="field"
            />
            <button type="submit" className="btn-primary w-auto whitespace-nowrap px-5">
              Send
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
