import Image from "next/image";

const BOOK =
  "https://ocweightloss.zenoti.com/webstoreNew/31118c19-f989-4281-8c77-29e853eabc00?serviceid=4053b372-324c-4a74-a200-73aa89fbf7eb";
const PHONE = "tel:+19494160950";
const MAPS = "https://maps.app.goo.gl/r8cHoDvze2ztmEx56";
const YELP = "https://www.yelp.com/biz/oc-weight-loss-and-med-spa-mission-viejo-6";
const SITE = "https://ocweightlossandmedspa.com";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <How />
        <Starters />
        <Membership />
        <Layers />
        <Provider />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[var(--copper)]">OC</span>
          <span className="text-sm font-medium tracking-tight text-[var(--ink)]">Weight Loss & Med Spa</span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] text-[var(--ink-soft)] md:flex">
          <a href="#how" className="hover:text-[var(--ink)]">How it works</a>
          <a href="#programs" className="hover:text-[var(--ink)]">Starter programs</a>
          <a href="#membership" className="hover:text-[var(--ink)]">Membership</a>
          <a href="#provider" className="hover:text-[var(--ink)]">Provider</a>
        </nav>
        <a href={BOOK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--ink)] px-4 py-2 text-[12px] font-medium tracking-wide text-[var(--paper)] hover:bg-[var(--ink-soft)]">Book free consult</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-[var(--copper)]">MEDICAL WEIGHT LOSS · MISSION VIEJO</p>
          <h1 className="serif max-w-[16ch] text-[2.35rem] leading-[1.08] tracking-tight text-[var(--ink)] md:text-[3.35rem]">
            The prescription isn’t the plan.
            <span className="block text-[var(--sage)]">The plan is the plan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--ink-soft)] md:text-[17px]">
            Clinician-led medical weight management with medication, monthly oversight, body-composition tracking and a clear path beyond the first prescription.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--copper)] px-6 py-3 text-[13px] font-semibold tracking-wide text-white hover:bg-[var(--copper-deep)]">Book a free consultation</a>
            <a href="#how" className="rounded-full border border-[var(--ink)]/20 px-6 py-3 text-[13px] font-medium text-[var(--ink)] hover:border-[var(--ink)]">See how the program works</a>
          </div>
          <p className="mt-4 text-[12px] tracking-wide text-[var(--ink-soft)]">Free consultation + InBody scan</p>
        </div>
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[var(--paper-2)]">
            <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="Clinician consultation in a calm medical setting" fill className="object-cover" sizes="(max-width: 768px) 100vw, 420px" priority />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4 shadow-sm md:left-auto md:right-[-12px] md:w-56">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--copper)]">FIRST VISIT</p>
            <p className="mt-1 text-sm font-medium">Free consult + InBody 580</p>
            <p className="mt-1 text-xs text-[var(--ink-soft)]">Written plan. Written price. No obligation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <TrustItem label="Every visit" value="Lindsay Short, NP-BC" />
        <TrustItem label="Serving Orange County" value="4+ years" note="Business-published" />
        <TrustItem label="First visit" value="Free consult + InBody" />
        <TrustItem label="Patient reviews" value="4.9 Google · 4.8 Yelp" note="196 Google · 333 Yelp" />
      </div>
    </section>
  );
}

function TrustItem({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--copper)]">{label.toUpperCase()}</p>
      <p className="mt-1 text-lg font-medium tracking-tight">{value}</p>
      {note ? <p className="mt-1 text-xs text-[var(--ink-soft)]">{note}</p> : null}
    </div>
  );
}

function How() {
  const steps = [
    { n: "01", t: "Free consult + InBody", d: "Thirty minutes with a licensed provider and a baseline scan that separates fat, muscle and water." },
    { n: "02", t: "Clinician-built plan", d: "History, labs where warranted, and a written program with the cost confirmed before anything starts." },
    { n: "03", t: "Medication + monthly monitoring", d: "Prescribed dose managed in clinic — not a mailed box with nobody watching." },
    { n: "04", t: "Measure + adjust", d: "Repeat InBody scans so the plan changes on evidence, not on a scale guess." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--copper)]">HOW IT WORKS</p>
      <h2 className="serif mt-3 text-3xl tracking-tight md:text-4xl">Measure it. Don’t guess.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <article key={s.n} className="border-t border-[var(--ink)]/15 pt-5">
            <p className="text-[12px] tracking-[0.2em] text-[var(--copper)]">{s.n}</p>
            <h3 className="mt-3 text-lg font-medium">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Starters() {
  return (
    <section id="programs" className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#d7b196]">STARTER PROGRAMS</p>
        <h2 className="serif mt-3 max-w-[18ch] text-3xl tracking-tight md:text-4xl">A course of care, not a box of medication.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ProgramCard name="Semaglutide" weeks="8 weeks" price="$700" />
          <ProgramCard name="Tirzepatide" weeks="8 weeks" price="$800" />
        </div>
        <p className="mt-6 text-sm text-white/60">Includes medication, visits and monitoring. Ongoing cost varies by prescribed dose.</p>
        <a href={BOOK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[var(--paper)] px-6 py-3 text-[13px] font-semibold text-[var(--ink)] hover:bg-white">Book free consultation</a>
      </div>
    </section>
  );
}

function ProgramCard({ name, weeks, price }: { name: string; weeks: string; price: string }) {
  return (
    <div className="rounded-3xl border border-white/12 bg-white/5 p-8">
      <p className="text-[11px] tracking-[0.18em] text-[#d7b196]">{weeks.toUpperCase()}</p>
      <h3 className="mt-2 text-2xl font-medium">{name}</h3>
      <p className="serif mt-4 text-4xl">{price}</p>
      <p className="mt-3 text-sm text-white/65">Medication, clinician visits and monitoring across eight weeks.</p>
    </div>
  );
}

function Membership() {
  return (
    <section id="membership" className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--copper)]">MEMBERSHIP</p>
      <h2 className="serif mt-3 max-w-[16ch] text-3xl tracking-tight md:text-4xl">Built for month nine, not just week one.</h2>
      <p className="mt-5 max-w-2xl text-[var(--ink-soft)]">
        Lose Weight is the foundation: prescription GLP-1 therapy at your prescribed dose band, a monthly InBody 580 scan, monthly B12 and lipotropic injection, monthly provider visit, and labs multiple times a year. Price depends on prescribed tier — we do not publish one universal membership number.
      </p>
      <ul className="mt-8 grid gap-3 text-sm md:grid-cols-2">
        {["Prescription GLP-1 therapy at prescribed dose band","Monthly InBody 580 scan","Monthly B12 and lipotropic injection","Monthly provider visit / medical oversight","Labs multiple times per year"].map((item) => (
          <li key={item} className="border-l-2 border-[var(--copper)] pl-4">{item}</li>
        ))}
      </ul>
      <a href={`${SITE}/membership/`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-6 py-3 text-[13px] font-semibold text-[var(--paper)] hover:bg-[var(--ink-soft)]">Explore membership</a>
    </section>
  );
}

function Layers() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <article>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--copper)]">LOOK GREAT</p>
          <h3 className="mt-2 text-2xl font-medium">Aesthetic add-on</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">One included laser treatment per quarter from the member menu, subject to provider discretion, plus 15% off other aesthetic services.</p>
        </article>
        <article>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--copper)]">FEEL GREAT</p>
          <h3 className="mt-2 text-2xl font-medium">Peptides, labs, hormones</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">One week of peptides per month, broader vitality labs multiple times a year, and member pricing on hormone replacement therapy — billed separately.</p>
        </article>
      </div>
    </section>
  );
}

function Provider() {
  return (
    <section id="provider" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[var(--paper-2)] md:col-span-5">
          <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80" alt="Portrait of a female clinician in a medical setting" fill className="object-cover" sizes="(max-width: 768px) 100vw, 420px" />
        </div>
        <div className="md:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--copper)]">YOUR PROVIDER</p>
          <h2 className="serif mt-3 text-3xl tracking-tight md:text-4xl">One provider. One through-line.</h2>
          <p className="mt-2 text-lg font-medium">Lindsay Short, NP-BC</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-soft)]">Board-certified Nurse Practitioner. B.S. Chemistry, UCLA. M.S.N., Columbia University. Every medical weight-loss visit is with Lindsay. The clinic is owned and physician-supervised by Dr. Nezar Dahdal, MD, board certified in Internal Medicine.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[var(--sage)] text-[var(--paper)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="serif max-w-[16ch] text-3xl tracking-tight md:text-4xl">Start with data, not another diet app.</h2>
        <p className="mt-4 text-lg">Free consultation + InBody</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--paper)] px-6 py-3 text-[13px] font-semibold text-[var(--ink)]">Book free consultation</a>
          <a href={PHONE} className="rounded-full border border-white/30 px-6 py-3 text-[13px] font-medium">Call 949-416-0950</a>
        </div>
        <p className="mt-6 text-sm text-white/70">24002 Via Fabricante, Suite 201, Mission Viejo<br />Mon–Fri 9–5 · Sat–Sun closed</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-[var(--paper)]">OC Weight Loss & Med Spa</p>
          <p className="mt-2 text-xs leading-relaxed">24002 Via Fabricante, Suite 201<br />Mission Viejo, CA 92691</p>
          <p className="mt-2 text-xs"><a href="mailto:info@ocweightlossandmedspa.com" className="hover:text-white">info@ocweightlossandmedspa.com</a></p>
        </div>
        <div className="flex gap-5 text-xs">
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google</a>
          <a href={YELP} target="_blank" rel="noopener noreferrer" className="hover:text-white">Yelp</a>
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="hover:text-white">Current site</a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-[11px] leading-relaxed text-white/40">Speculative redesign by Novenworks. Information is educational and not medical advice. Individual results vary. Treatments require clinician assessment.</p>
    </footer>
  );
}
