import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoyDex Agency — Coming Soon" },
      { name: "description", content: "RoyDex Agency – Rise Of Your Digital Experience. Our new digital experience is coming soon." },
      { property: "og:title", content: "RoyDex Agency — Coming Soon" },
      { property: "og:description", content: "Something exceptional is coming. Video Production, Creative Design, Visual Identity, Solutions Web." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = ["Video Production", "Creative Design", "Visual Identity", "Solutions Web"];

function Index() {
  return (
    <main className="hero-bg relative flex min-h-screen flex-col overflow-hidden text-primary-foreground">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-display text-xl tracking-wide text-primary-foreground">RoyDex Agency</span>
        <span className="rounded-full border border-primary-foreground/30 px-4 py-1 text-xs uppercase tracking-[0.3em]">
          Coming soon
        </span>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="fade-up mb-6 text-xs uppercase tracking-[0.5em] text-accent">A new experience</p>
        <h1 className="fade-up font-display text-4xl leading-tight md:text-5xl" style={{ animationDelay: "0.15s" }}>
          Something exceptional<br />is coming.
        </h1>
        <p className="fade-up mt-6 max-w-xl text-lg text-primary-foreground/80" style={{ animationDelay: "0.3s" }}>
          We're currently crafting our new digital experience. Stay tuned.
        </p>

        <div className="fade-up mt-14" style={{ animationDelay: "0.45s" }}>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60">What we do</p>
          <ul className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <li key={s} className="rounded-full bg-primary-foreground/10 px-5 py-2 text-sm backdrop-blur">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-8 text-center text-sm text-primary-foreground/70">
        <span className="font-display text-base text-primary-foreground">RoyDex Agency</span> — Rise Of Your Digital Experience <br/> +261 34 09 586 24
      </footer>
    </main>
  );
}
