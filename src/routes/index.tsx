import { createFileRoute } from "@tanstack/react-router";
import thinker from "@/assets/thinker.png";
import logo from "@/assets/tma-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const spheres = [
  "Tech & Digital Public Infrastructure",
  "Green Finance & Carbon Markets",
  "PPP & Infra Asset Structuring",
  "Healthcare and Health Supplies",
];

const services = [
  {
    title: "Government Consultations",
    points: [
      "Principal interface with Central and State Governments and key regulatory bodies",
      "Shape regulatory positioning aligned with your commercial agenda",
      "Track and analyse political, regulatory and policy developments",
      "Direct introductions at ministry and department level",
      "Access to think tank sessions and policy working groups",
    ],
  },
  {
    title: "Tender Intelligence & Pipeline",
    points: [
      "Identification of relevant tenders across GeM, CPPP and state platforms",
      "Qualification against your capabilities and delivery bandwidth",
      "Go / no-go recommendations with clear rationale",
      "Scope mapping: what tenders require vs. what they say",
      "Monitoring of re-tenders, extensions and follow-on opportunities",
    ],
  },
  {
    title: "Ecosystem & Partner Leverage",
    points: [
      "Activation of ecosystem partners that strengthen your positioning",
      "Identifying and converting impact investment decisions",
      "Connections with industry bodies engaged with government",
      "Engagement with innovation labs and policy initiatives — Startup India, Digital India, ONDC, AgriStack",
    ],
  },
  {
    title: "Use-case Development & Documentation",
    points: [
      "Government-specific use cases tied to real public sector problems",
      "Case study documentation in formats government evaluators trust",
      "Concise capability briefs tailored to individual departments",
      "White papers, policy briefs and thought-leadership content",
    ],
  },
  {
    title: "IP & Competition Law Consultancy",
    points: [
      "Patent and trademark strategy for public-sector technology partnerships",
      "Competition law compliance in government procurement and PPP structures",
      "Technology transfer and licensing frameworks for public infrastructure",
      "IP portfolio management aligned with national innovation policies",
      "Regulatory advocacy on IP and competition matters before government bodies",
    ],
  },
];

const differentiators = [
  { k: "Sector depth", v: "We understand the mechanics of government procurement, PPP frameworks, regulatory approvals and policy cycles." },
  { k: "Research-led", v: "Every recommendation is backed by data, precedent and documented analysis." },
  { k: "Commercially minded", v: "Advice that translates to outcomes, timelines and returns — we know our clients are businesses." },
  { k: "Trusted advisors", v: "We work as long-term advisors, not transactional vendors." },
];

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between py-5 lg:py-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thinking Man Advisory"
            className="h-28 lg:h-40 xl:h-44 w-auto drop-shadow-md transition-transform hover:scale-[1.03]"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-14 text-xl 2xl:text-2xl text-foreground/80">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#spheres" className="hover:text-primary transition-colors">Operating Spheres</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden xl:inline-flex whitespace-nowrap items-center text-lg 2xl:text-2xl font-medium text-primary border-b border-primary/40 pb-0.5 hover:border-primary">
          Partner with us →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-44 lg:pt-64 pb-14 lg:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.56fr)] gap-8 xl:gap-12 items-center">
        <div>
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70 mb-5 lg:mb-6">Government Consulting · India</p>
          <h1 className="font-serif text-5xl lg:text-[5.6rem] xl:text-8xl 2xl:text-9xl leading-[0.98] text-primary">
            Engage government as a <em className="italic font-normal">navigable, winnable</em> terrain.
          </h1>
          <p className="mt-6 max-w-3xl text-xl xl:text-2xl text-muted-foreground leading-snug">
            Thinking Man Advisory is a boutique consulting practice built for India's new
            era of public-private engagement — helping companies win mandates, structure
            partnerships and shape outcomes in the public sphere.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-lg xl:text-xl font-medium text-primary-foreground hover:bg-primary/90 transition">
              Start a conversation
            </a>
            <a href="#services" className="text-lg xl:text-xl text-primary hover:text-primary/80 border-b border-primary/30 pb-0.5">
              Explore our services
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-accent/60 blur-3xl" aria-hidden />
            <img src={thinker} alt="The Thinker by Auguste Rodin" className="relative h-[420px] lg:h-[520px] xl:h-[600px] 2xl:h-[680px] w-auto object-contain drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t hairline py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 grid md:grid-cols-12 gap-8 xl:gap-12">
        <div className="md:col-span-4">
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">About</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl text-primary leading-tight">
            Between policy expertise and commercial acumen.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-4 text-xl xl:text-2xl text-foreground/80 leading-snug">
          <p>
            India's regulatory and policy landscape is complex, fast-moving and consequential. A
            misread tender, a missed approval window, or a poorly structured engagement can cost
            companies months and millions.
          </p>
          <p>
            We fill the vacuum between deep public policy expertise and private sector commercial
            acumen — enabling partners to navigate government as a strategic asset rather than a
            compliance burden.
          </p>
          <p className="font-serif italic text-2xl xl:text-3xl text-primary pt-3">
            "A 2–3× acceleration in scaling government-facing revenue streams compared to going
            alone or hiring fragmented advisors."
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-accent/40 border-y hairline py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 grid md:grid-cols-2 gap-10 xl:gap-14">
        <div>
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">Vision</p>
          <h3 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-tight">
            A private sector that engages government with confidence, and a public sector that
            benefits from it.
          </h3>
        </div>
        <div>
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">Mission</p>
          <h3 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-tight">
            Leveraging markets for better state-growth through partnerships that are financially
            rewarding and economically transformative.
          </h3>
          <p className="mt-4 font-serif italic text-primary/70 text-xl">
            Institutional Expertise · Policy Fluency · Boutique Advisory
          </p>
        </div>
      </div>
    </section>
  );
}

function Spheres() {
  return (
    <section id="spheres" className="py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">Operating Spheres</p>
            <h2 className="mt-4 font-serif text-4xl lg:text-6xl text-primary">Where we work.</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {spheres.map((s, i) => (
            <div key={s} className="bg-background p-8 lg:p-10 xl:p-12 min-h-[210px] lg:min-h-[250px] flex flex-col justify-between hover:bg-accent/30 transition-colors">
              <span className="text-sm xl:text-base text-primary/60 font-medium">0{i + 1}</span>
              <h3 className="font-serif text-3xl xl:text-4xl text-primary leading-tight mt-6">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="bg-primary text-primary-foreground py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 grid md:grid-cols-12 gap-8 xl:gap-12">
        <div className="md:col-span-4">
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary-foreground/60">What sets us apart</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl leading-tight">
            Not a vendor. <em className="italic font-normal">A long-term advisor.</em>
          </h2>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-8 xl:gap-y-10">
          {differentiators.map((d) => (
            <div key={d.k}>
              <h3 className="font-serif text-3xl xl:text-4xl mb-3">{d.k}</h3>
              <p className="text-lg xl:text-xl text-primary-foreground/75 leading-relaxed">{d.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-8 lg:mb-10 max-w-5xl">
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">Our Services</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-6xl text-primary leading-tight">
            Five practices, built around how government actually works.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border hairline">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-background p-7 lg:p-10 xl:p-12 ${i === 4 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-6 lg:mb-7">
                <span className="text-sm xl:text-base text-primary/60 font-medium">0{i + 1}</span>
                <h3 className="font-serif text-3xl xl:text-4xl text-primary leading-tight">{s.title}</h3>
              </div>
              <ul className={`space-y-4 ${i === 4 ? "md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-4 md:space-y-0" : ""}`}>
                {s.points.map((p) => (
                  <li key={p} className="flex gap-4 text-lg xl:text-xl text-foreground/80 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0 text-2xl leading-none">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="border-t hairline py-14 lg:py-18">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 grid md:grid-cols-12 gap-8 xl:gap-12 items-start">
        <div className="md:col-span-5">
          <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">The Team</p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-tight">
            Led by individuals who have worked inside and alongside government.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-3 text-xl xl:text-2xl text-foreground/80 leading-snug">
          {[
            "Inside and alongside governments — at central and state level",
            "In public policy and governance — understanding what the government needs",
            "In procurement — and the real nuances of the process",
            "In research advisory — quality documentation and best-in-class use case development",
          ].map((t) => (
            <div key={t} className="flex gap-4 pb-4 border-b hairline">
              <span className="font-serif italic text-primary/60 text-2xl shrink-0">—</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-accent/40 py-14 lg:py-18 border-t hairline">
      <div className="mx-auto max-w-7xl px-7 lg:px-12 xl:px-16 text-center">
        <p className="text-base xl:text-lg tracking-[0.18em] uppercase text-primary/70">Partner with us</p>
        <h2 className="mt-6 font-serif text-4xl lg:text-7xl text-primary leading-tight">
          Position your company as a leader in India's <em className="italic font-normal">growth story.</em>
        </h2>
        <p className="mt-6 text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto leading-snug">
          We work with private companies and corporates that have, or are looking to grow, a
          significant interface with government.
        </p>
        <div className="mt-6 inline-flex flex-col items-center gap-3">
          <a href="mailto:info@tmadvisory.in" className="font-serif text-3xl lg:text-5xl text-primary border-b-2 border-primary/40 hover:border-primary pb-1 transition">
            info@tmadvisory.in
          </a>
          <span className="text-base xl:text-lg text-muted-foreground">New Delhi, India</span>
          <p className="font-serif italic text-lg xl:text-xl text-primary/80">
            We provide only boutique advisory services — mail to book an appointment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t hairline py-10">
      <div className="mx-auto max-w-[1920px] px-7 lg:px-12 xl:px-16 2xl:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-base text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-auto opacity-80" />
        </div>
        <p>© {new Date().getFullYear()} Thinking Man Advisory LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <VisionMission />
      <Spheres />
      <Differentiators />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
