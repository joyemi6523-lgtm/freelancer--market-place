import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Release Payment — Provost" },
      {
        name: "description",
        content: "Review milestone amounts, platform fees and release escrowed funds to your freelancer.",
      },
      { property: "og:title", content: "Release Payment — Provost" },
      { property: "og:description", content: "Review milestones and release escrowed funds." },
    ],
  }),
  component: Payment,
});

function Payment() {
  const [done, setDone] = useState(false);

  return (
    <main className="mx-auto max-w-2xl space-y-8 px-4 py-8">
      <header className="enter space-y-3">
        <p className="label text-primary">Escrow</p>
        <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tighter md:text-6xl">Checkout Summary</h1>
      </header>

      <section className="space-y-4 border border-primary/20 bg-primary/5 p-6">
        <div className="flex justify-between text-sm">
          <span>Milestone 04 — API Hardening</span>
          <span className="font-mono">$4,500.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Platform Fee (10%)</span>
          <span className="font-mono">$450.00</span>
        </div>
        <div className="flex justify-between border-t border-primary/10 pt-2 text-xl font-bold">
          <span>Total Due</span>
          <span className="font-mono">$4,950.00</span>
        </div>
      </section>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <h2 className="label border-b border-border pb-2 text-muted-foreground">Payment Method</h2>
        <div className="space-y-2">
          <label htmlFor="card" className="label text-muted-foreground">
            Card number
          </label>
          <input id="card" required inputMode="numeric" placeholder="4242 4242 4242 4242" className="field font-mono" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="exp" className="label text-muted-foreground">
              Expiry
            </label>
            <input id="exp" required placeholder="09 / 28" className="field font-mono" />
          </div>
          <div className="space-y-2">
            <label htmlFor="cvc" className="label text-muted-foreground">
              CVC
            </label>
            <input id="cvc" required placeholder="123" className="field font-mono" />
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Initialize Transfer
        </button>
        {done && <p className="label text-primary">Demo only — no funds were moved.</p>}
      </form>
    </main>
  );
}
