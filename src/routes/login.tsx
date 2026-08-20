import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — Provost" },
      { name: "description", content: "Sign in to your Provost account to manage contracts, messages and payouts." },
      { property: "og:title", content: "Sign In — Provost" },
      { property: "og:description", content: "Access your Provost contracts, messages and payouts." },
    ],
  }),
  component: Login,
});

function Login() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-md space-y-8 px-4 py-12">
      <header className="enter space-y-3">
        <p className="label text-primary">Account Access</p>
        <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tighter">Return to the record.</h1>
      </header>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="space-y-2">
          <label htmlFor="email" className="label text-muted-foreground">
            Email
          </label>
          <input id="email" type="email" required className="field" placeholder="you@studio.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="label text-muted-foreground">
            Password
          </label>
          <input id="password" type="password" required className="field" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">
          Sign In
        </button>
        {sent && <p className="label text-primary">Demo only — no account is created.</p>}
      </form>

      <p className="label text-muted-foreground">
        No account?{" "}
        <Link to="/register" className="text-primary">
          Register →
        </Link>
      </p>
    </main>
  );
}
