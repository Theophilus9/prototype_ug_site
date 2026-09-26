import { createElement, useState } from "react";

const images = {
  hero: "https://cesp.ug.edu.gh/main/web/sites/default/files/styles/wide/public/bootstrap_simple_carousel/Zoom%20background%203.jpg?itok=v2fjQsub",
  director: "https://cesp.ug.edu.gh/main/web/sites/default/files/styles/custom_large_1000_x_514_/public/2023-08/0Y3A9685%20portrait%20new_0.JPG?itok=ruZZQHwM",
  course: "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?auto=format&fit=crop&w=1000&q=86",
  masters: "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?auto=format&fit=crop&w=1000&q=86",
  phd: "https://images.unsplash.com/photo-1679134015772-943d09a750ae?auto=format&fit=crop&w=1000&q=86",
};

function Icon({ name, className = "size-5" }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    linkedin: <><path d="M7 9v8M7 6v.01M11 17v-4.5a3.5 3.5 0 0 1 7 0V17M11 9v8" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
    x: <><path d="m5 5 14 14M19 5 5 19" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5 16.5 16.5 0 0 0 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.5 3a13 13 0 0 1-10.5-10L8 7.5 7 3Z" />,
  };
  return <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24">{paths[name]}</svg>;
}

function Link(props) {
  return createElement("a", props);
}

function Button(props) {
  return createElement("button", props);
}

function Heading({ as = "h2", children, className = "" }) {
  return createElement(as, { className }, children);
}

function ArrowLink({ children, href = "#", light = false }) {
  return (
    <Link className={`group inline-flex items-center gap-3 text-sm font-semibold tracking-wide ${light ? "text-ivory" : "text-forest"}`} href={href}>
      {children}
      <span className={`grid size-8 place-items-center transition-transform group-hover:translate-x-1 ${light ? "bg-white/10" : "bg-forest/8"}`}>
        <Icon className="size-4" name="arrow" />
      </span>
    </Link>
  );
}

function Brand({ light = false }) {
  return (
    <Link aria-label="CESP home" className="flex items-center gap-3" href="#top">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Ghana.png"
        alt="University of Ghana logo"
        className="size-11 object-contain"
      />
      <span>
        <span className={`block text-xl font-bold tracking-tight ${light ? "text-white" : "text-forest"}`}>Centre for Evidence Synthesis and Policy</span>
        <span className={`hidden text-[9px] font-semibold uppercase leading-tight tracking-[0.16em] sm:block ${light ? "text-white/60" : "text-ink/55"}`}>Evidence Synthesis &amp; Policy</span>
      </span>
    </Link>
  );
}

const navItems = ["About", "Research", "Training", "People", "Publications", "News & Events"];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-forest-deep text-white/70">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white" href="#">University of Ghana</Link>
          <div className="hidden items-center gap-6 text-[10px] font-medium md:flex">
            {["Students", "Faculty & Staff", "Alumni", "Give to UG"].map((item) => <Link className="transition-colors hover:text-gold" href="#" key={item}>{item}</Link>)}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => <Link className="text-sm font-medium text-ink/75 transition-colors hover:text-forest" href={`#${item.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`} key={item}>{item}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button aria-label="Search" className="grid size-10 place-items-center text-forest transition-colors hover:bg-forest/5"><Icon name="search" /></Button>
            <Link className="bg-forest px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-lg" href="#contact">Contact Us</Link>
          </div>
          <Button aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid size-11 place-items-center border border-forest/15 text-forest lg:hidden" onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} />
          </Button>
        </div>
        {open && (
          <nav aria-label="Mobile navigation" className="border-t border-forest/10 bg-ivory px-5 py-6 lg:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => <Link className="border-b border-forest/10 py-4 font-medium text-ink" href="#" key={item}>{item}</Link>)}
              <Link className="mt-6 bg-forest px-6 py-3 text-center font-semibold text-white" href="#contact">Contact Us</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

const researchAreas = [
  ["Evidence Synthesis", "Systematic Review & Meta-analysis"],
  ["Evidence-Based Medicine", "Critical Appraisal"],
  ["Evidence-Based Nursing", "Practice & Education"],
  ["Implementation Research", "From evidence to practice"],
  ["Guidelines Development", "Rigorous clinical guidance"],
  ["Clinical & Epidemiological Research", "Stronger health data"],
  ["Neglected Tropical Diseases", "Equity-led research"],
  ["Non-Communicable Diseases", "Prevention & care"],
  ["Evidence Translation & Policy", "Research for decisions"],
];

const programmes = [
  { title: "Short Courses", text: "Focused professional training in evidence synthesis and related methods.", image: images.course, label: "Professional learning" },
  { title: "MSc Programmes", text: "Graduate-level training for researchers and health professionals.", image: images.masters, label: "Graduate education" },
  { title: "PhD Programmes", text: "Advanced research training for future academic and research leaders.", image: images.phd, label: "Doctoral research" },
];

const research = [
  { category: "Evidence Synthesis", year: "2025", title: "Strengthening evidence-informed decision-making for resilient health systems", text: "A regional programme connecting researchers, clinicians and policymakers to accelerate the use of high-quality evidence." },
  { category: "Implementation Research", year: "2024", title: "Closing the gap between clinical evidence and everyday practice", text: "Examining the systems, behaviours and partnerships that help proven health interventions reach more people." },
  { category: "Health Policy", year: "2024", title: "A collaborative evidence agenda for health priorities across Africa", text: "A multi-country initiative identifying shared research needs and strengthening local capacity for policy translation." },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-ink" id="top">
      <Header />
      <main>
        <section className="relative min-h-[780px] bg-forest-deep lg:min-h-[720px]">
          <img alt="Researchers collaborating in a modern health research laboratory" className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-75" src={images.hero} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,61,111,.97)_0%,rgba(21,61,111,.84)_42%,rgba(21,61,111,.14)_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,61,111,.62)_0%,transparent_42%)]" />
          <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-5 py-24 lg:min-h-[720px] lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-10 bg-gold" /> Research • Capacity • Policy
              </div>
              <Heading as="h1" className="font-serif text-6xl leading-[0.96] tracking-[-0.035em] text-white sm:text-7xl lg:text-[88px]">
                Evidence that<br /><span className="text-gold">strengthens</span> health decisions.
              </Heading>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                The Centre for Evidence Synthesis and Policy advances high-quality evidence synthesis, research capacity and evidence-informed policy across Africa and beyond.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link className="inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-light" href="#research">
                  Explore Our Research <Icon className="size-4" name="arrow" />
                </Link>
                <Link className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/12" href="#training">Study With Us</Link>
              </div>
            </div>
            
          </div>
        </section>

        <section className="py-24 sm:py-32" id="about">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-24 lg:px-8">
            <div className="relative">
              <div className="overflow-hidden bg-sand">
                <img alt="Portrait of the CESP Director" className="w-full aspect-[4/3] object-cover object-center grayscale-[18%]" src={images.director}/>
              </div>
              <div className="absolute -bottom-7 -right-2 max-w-[240px] bg-gold p-6 text-forest-deep shadow-xl sm:right-[-2rem]">
                <p className="font-serif text-xl leading-snug">“Evidence has its greatest value when it changes lives.”</p>
              </div>
            </div>

            <div className="pt-10 lg:pt-0">
              <p className="eyebrow">From the Director</p>
              <Heading className="section-title mt-5">Turning research evidence into better decisions.</Heading>
              <p className="mt-7 text-lg leading-8 text-ink/65">
                At CESP, we bring people and evidence together. Our work strengthens the capacity of researchers, health professionals and decision-makers to ask better questions, find trustworthy answers and apply them where they matter most.
              </p>
              <p className="mt-5 leading-7 text-ink/60">
                From systematic reviews to policy translation, we are building a community committed to improving health across Ghana, Africa and other low- and middle-income settings.
              </p>
              <div className="mt-9"><ArrowLink>Read the Director's Message</ArrowLink></div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-24 sm:py-32" id="research">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
              <div>
                <p className="eyebrow">What we do</p>
                <Heading className="section-title mt-5 max-w-3xl">Building stronger evidence for better health.</Heading>
              </div>
              <p className="max-w-xl leading-7 text-ink/60 lg:pb-2">
                CESP develops capacity and applies rigorous evidence synthesis and translation methods to support researchers, clinicians and policymakers.
              </p>
            </div>
            <div className="mt-16 grid border-l border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3">
              {researchAreas.map(([title, text], index) => (
                <Link className="group min-h-52 border-b border-r border-forest/15 bg-mist p-7 transition-colors hover:bg-white" href="#" key={title}>
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-gold-dark">0{index + 1}</span>
                    <span className="grid size-9 place-items-center border border-forest/15 text-forest transition-all group-hover:rotate-[-30deg] group-hover:bg-forest group-hover:text-white"><Icon className="size-4" name="arrow" /></span>
                  </div>
                  <Heading as="h3" className="mt-10 text-xl font-semibold tracking-tight text-forest">{title}</Heading>
                  <p className="mt-2 text-sm text-ink/50">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-forest-deep py-24 text-white sm:py-32">
          <div className="network-grid absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <p className="eyebrow text-gold">Our impact</p>
              <Heading className="section-title mt-5 max-w-xl text-white">Research that moves beyond the paper.</Heading>
              <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
                We connect evidence, expertise and local insight to strengthen research systems and support decisions that improve health across the continent.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9">
                {[["XX+", "Research Projects"], ["XXX+", "Researchers Trained"], ["XX", "Countries Reached"], ["XX+", "Evidence Syntheses"]].map(([value, label]) => (
                  <div className="border-t border-white/20 pt-5" key={label}>
                    <p className="font-serif text-4xl text-gold">{value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-xl">
              <svg aria-label="Abstract network map of Africa" className="h-full w-full" viewBox="0 0 600 600">
                <path d="M286 61 228 79l-49 48-42 22-18 66 28 45 12 66 44 55 31 77 54 78 42-30 26-83 59-51 14-75 48-88-20-60-77-51-42-43-52-14Z" fill="rgba(255,255,255,.04)" stroke="rgba(232,191,83,.38)" strokeWidth="2" />
                {[[286,110],[208,180],[328,190],[390,245],[243,292],[315,345],[268,420],[334,472],[170,245],[415,320]].map(([x,y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} fill={i % 3 === 0 ? "#e8bf53" : "#f7f3e9"} r={i % 3 === 0 ? "7" : "4"} />
                    <circle cx={x} cy={y} fill="none" r="14" stroke="rgba(232,191,83,.25)" />
                  </g>
                ))}
                <g stroke="rgba(232,191,83,.38)" strokeDasharray="4 8">
                  <path d="m286 110-78 70 35 112 72 53 75-100-62-55-120-10M243 292l-73-47M315 345l-47 75 66 52M315 345l100-25" />
                </g>
              </svg>
              <div className="absolute right-6 top-12 border border-gold/20 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-gold backdrop-blur">Connected knowledge</div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32" id="training">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">Study with us</p>
            <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <Heading className="section-title max-w-3xl">Build the skills to turn evidence into action.</Heading>
              <ArrowLink>View all programmes</ArrowLink>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {programmes.map((programme) => (
                <article className="group overflow-hidden bg-white shadow-[0_16px_50px_rgba(21,61,111,.08)]" key={programme.title}>
                  <div className="overflow-hidden">
                    <img alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" src={programme.image} />
                  </div>
                  <div className="p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{programme.label}</p>
                    <Heading as="h3" className="mt-3 font-serif text-3xl text-forest">{programme.title}</Heading>
                    <p className="mt-4 min-h-20 text-sm leading-6 text-ink/60">{programme.text}</p>
                    <div className="mt-5"><ArrowLink>Learn More</ArrowLink></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-forest/10 bg-sand/50 py-24 sm:py-32" id="publications">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div><p className="eyebrow">Ideas into impact</p><Heading className="section-title mt-5">Featured Research</Heading></div>
              <div className="hidden sm:block"><ArrowLink>View all research</ArrowLink></div>
            </div>
            <div className="mt-14 divide-y divide-forest/15 border-y border-forest/15">
              {research.map((item, index) => (
                <article className="group grid gap-6 py-9 md:grid-cols-[100px_1fr_1fr_48px] md:items-center" key={item.title}>
                  <div><span className="font-serif text-3xl text-gold-dark">0{index + 1}</span><p className="mt-2 text-xs text-ink/45">{item.year}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-dark">{item.category}</p><Heading as="h3" className="mt-3 max-w-xl font-serif text-2xl leading-tight text-forest md:text-3xl">{item.title}</Heading></div>
                  <p className="max-w-md text-sm leading-6 text-ink/55">{item.text}</p>
                  <Link aria-label={`View ${item.title}`} className="grid size-11 place-items-center border border-forest/20 text-forest transition-all group-hover:bg-forest group-hover:text-white" href="#"><Icon name="arrow" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32" id="news-and-events">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="flex items-center justify-between"><Heading className="font-serif text-4xl text-forest">Latest News</Heading><ArrowLink>View All News</ArrowLink></div>
              <div className="mt-8 divide-y divide-forest/15 border-y border-forest/15">
                {[
                  ["18 Jun 2025", "Centre News", "CESP welcomes a new cohort of evidence synthesis fellows"],
                  ["02 Jun 2025", "Research", "Regional partners convene to shape an evidence agenda for health"],
                  ["21 May 2025", "Collaboration", "New partnership strengthens capacity for guideline development"],
                ].map(([date, category, title]) => (
                  <Link className="group block py-7" href="#" key={title}>
                    <div className="flex gap-5">
                      <p className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-gold-dark">{date}</p>
                      <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">{category}</p><Heading as="h3" className="mt-2 text-xl font-semibold leading-snug text-forest transition-colors group-hover:text-forest-light">{title}</Heading></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between"><Heading className="font-serif text-4xl text-forest">Upcoming Events</Heading><ArrowLink>View All Events</ArrowLink></div>
              <div className="mt-8 space-y-4">
                {[
                  ["08", "AUG", "Masterclass", "Writing high-quality systematic review protocols", "Accra • In person"],
                  ["22", "SEP", "Public Lecture", "Whose evidence counts? Rethinking knowledge for policy", "Hybrid • 4:00 PM GMT"],
                  ["14", "OCT", "Workshop", "From evidence synthesis to actionable guidelines", "CESP Training Centre"],
                ].map(([day, month, category, title, meta]) => (
                  <Link className="group grid grid-cols-[64px_1fr] gap-5 border border-forest/12 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg" href="#" key={title}>
                    <div className="border-r border-forest/15 pr-4 text-center"><p className="font-serif text-3xl text-forest">{day}</p><p className="text-[10px] font-bold tracking-widest text-gold-dark">{month}</p></div>
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark">{category}</p><Heading as="h3" className="mt-1 font-semibold leading-snug text-forest">{title}</Heading><p className="mt-2 text-xs text-ink/45">{meta}</p></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8">
          <div className="network-grid relative mx-auto max-w-7xl overflow-hidden bg-forest p-8 text-white sm:p-16 lg:p-20">
            <div className="absolute -right-16 -top-36 size-96 rounded-full border border-gold/20" />
            <div className="absolute -right-4 -top-20 size-72 rounded-full border border-gold/20" />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-gold">Start a conversation</p>
              <Heading className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">Better evidence starts with better questions.</Heading>
              <p className="mt-6 text-lg text-white/65">Explore our research, training programmes and opportunities to collaborate.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="bg-gold px-7 py-4 text-center text-sm font-bold text-forest-deep transition-colors hover:bg-gold-light" href="#about">Explore CESP</Link>
                <Link className="border border-white/25 px-7 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#contact">Get in Touch</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest-deep text-white" id="contact">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-14 border-b border-white/12 pb-16 lg:grid-cols-[1.25fr_.75fr_.85fr]">
            <div>
              <Brand light />
              <p className="mt-7 max-w-md text-sm leading-7 text-white/55">Advancing rigorous evidence synthesis, research capacity and evidence-informed policy for healthier communities across Africa and beyond.</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">A Centre of the University of Ghana</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Explore</p>
              <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 text-sm text-white/60">
                {[...navItems, "Contact"].map((item) => <Link className="transition-colors hover:text-white" href="#" key={item}>{item}</Link>)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Contact</p>
              <div className="mt-6 space-y-5 text-sm leading-6 text-white/60">
                <p className="flex gap-3"><Icon className="mt-0.5 size-4 shrink-0 text-gold" name="location" /> University of Ghana, Legon<br />Accra, Ghana</p>
                <p className="flex items-center gap-3"><Icon className="size-4 text-gold" name="mail" /> cesp@ug.edu.gh</p>
                <p className="flex items-center gap-3"><Icon className="size-4 text-gold" name="phone" /> +233 (0) 00 000 0000</p>
              </div>
              <div className="mt-7 flex gap-3">
                {["linkedin", "instagram", "x"].map((name) => <Link aria-label={name} className="grid size-9 place-items-center border border-white/15 text-white/65 transition-colors hover:border-gold hover:text-gold" href="#" key={name}><Icon className="size-4" name={name} /></Link>)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Centre for Evidence Synthesis and Policy. All rights reserved.</p>
            <div className="flex gap-5"><Link href="#">Privacy</Link><Link href="#">Accessibility</Link><Link href="#">University of Ghana</Link></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
