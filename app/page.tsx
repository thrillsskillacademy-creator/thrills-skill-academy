import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl">
          <p className="text-sm tracking-widest text-white/70">THRILLS SKILL ACADEMY</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            Train. Compete. Level Up.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Elite skill development + travel basketball built for growth, discipline, and confidence.
            Join the family and put in real work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tryouts"
              className="rounded-2xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90"
            >
              Register for Tryouts
            </Link>

            <Link
              href="/payments"
              className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-semibold hover:bg-white/10"
            >
              Pay Registration / Fees
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Stat label="Practice" value="2–3x / week" />
            <Stat label="Tournaments" value="6-Pack Series" />
            <Stat label="Ages" value="9U–17U" />
          </div>
        </div>
      </section>

      {/* Info blocks */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="What you get">
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>High-level skill development (handles, shooting, IQ)</li>
              <li>Competitive travel schedule</li>
              <li>Accountability + culture</li>
              <li>Player development plan</li>
            </ul>
          </Card>

          <Card title="Tryouts + Registration">
            <p className="text-white/80">
              Register first to lock your spot. Tryout fee/registration is <span className="font-semibold text-white">$50</span>.
              Scholarship/fundraising options available.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/tryouts" className="rounded-xl bg-white px-4 py-2 text-black font-semibold">
                Tryout Registration
              </Link>
              <Link href="/schedule" className="rounded-xl border border-white/20 px-4 py-2 font-semibold hover:bg-white/10">
                View Schedule
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/70 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Thrills Skill Academy</p>
          <p>Questions: thrillsskillacademy@gmail.com • 407-383-3483</p>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <p className="text-xs uppercase tracking-widest text-white/60">{label}</p>
      <p className="mt-2 text-xl font-bold">{value}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
