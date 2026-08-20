import { Link } from "@tanstack/react-router";
import avatar from "@/assets/avatar.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/freelancers", label: "Talent" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/messages", label: "Messages" },
  { to: "/payment", label: "Payment" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-extrabold uppercase italic tracking-tighter">
          Provost
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login" className="label text-muted-foreground hover:text-primary">
            Sign in
          </Link>
          <Link to="/profile" aria-label="Profile" className="size-8 overflow-hidden rounded-full bg-secondary">
            <img src={avatar} alt="Your profile" width={512} height={512} className="size-full object-cover" />
          </Link>
        </div>
      </div>
      <nav className="mx-auto max-w-5xl overflow-x-auto border-t border-border px-4">
        <ul className="flex gap-5 py-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "label text-primary" }}
                inactiveProps={{ className: "label text-muted-foreground hover:text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border p-8 text-center">
      <p className="label tracking-[0.3em] text-muted-foreground">© Provost Institutional MMXXVI</p>
    </footer>
  );
}
