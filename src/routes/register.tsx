import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create an Account — Provost" },
      {
        name: "description",
        content: "Register as a freelancer or a client and start posting or bidding on curated contracts.",
      },
      { property: "og:title", content: "Create an Account — Provost" },
      { property: "og:description", content: "Register as a freelancer or client on Provost." },
    ],
  }),
  component: Register,
});

function Register() {
  const [role, setRole] = useState<"freelancer" | "client">("freelancer");
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-md space-y-8 px-4 py-12">
      <header className="enter space-y-3">
        <p className="label text-primary">New Entry</p>
        <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tighter">Begin your record.</h1>
      </header>

      <div className="grid grid-cols-2 border border-border">
        {(["freelancer", "client"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={
              role === r
                ? "label bg-primary py-3 text-primary-foreground"
                : "label py-3 text-muted-foreground hover:text-foreground"
            }
          >
            {r === "freelancer" ? "I'm a freelancer" : "I'm hiring"}
          </button>
        ))}
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="label text-muted-foreground">
            Full name
          </label>
          <input id="name" required className="field" placeholder="Elias Thorne" />
        </div>
        <div className="space-y-2">
          <label htmlFor="remail" className="label text-muted-foreground">
            Email
          </label>
          <input id="remail" type="email" required className="field" placeholder="you@studio.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="rpassword" className="label text-muted-foreground">
            Password
          </label>
          <input id="rpassword" type="password" required className="field" placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">
          Create Account
        </button>
        {sent && <p className="label text-primary">Demo only — no account is created.</p>}
      </form>

      <p className="label text-muted-foreground">
        Already registered?{" "}
        <Link to="/login" className="text-primary">
          Sign in →
        </Link>
      </p>
    </main>
  );
}
