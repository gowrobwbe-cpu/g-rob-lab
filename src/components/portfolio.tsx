import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  AtSign,
  Bot,
  Check,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Play,
  Radio,
  RotateCw,
  Youtube,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import portraitAsset from "@/assets/gowrob-dash-professional.png.asset.json";
import { aiContent, components, journey, labParts, navItems, projects, skills } from "@/lib/portfolio-data";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/share/1QxLisHeF1/", icon: Facebook },
  { label: "YouTube 1", href: "#youtube-one-pending", icon: Youtube, pending: true },
  { label: "YouTube 2", href: "https://www.youtube.com/channel/UC5vqvuXIFt35KuA2dVvaWBA", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/in/gowrob-dash-7847913ab", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/gowrobwbe-cpuURL", icon: Github },
  { label: "Email", href: "mailto:Gowrobwbe@gmail.com", icon: Mail },
];

function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading reveal">
    <div className="section-index"><span>{number}</span><span>{eyebrow}</span></div>
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </div>;
}

function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}

function TechnicalCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cursor = document.querySelector<HTMLElement>(".tech-cursor");
    const label = document.querySelector<HTMLElement>(".tech-cursor-label");
    if (!cursor || !label) return;
    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      document.body.dataset["cursorActive"] = target ? "true" : "false";
      label.textContent = target?.dataset["cursor"] ?? "";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <><div className="tech-cursor" aria-hidden="true" /><div className="tech-cursor-label" aria-hidden="true" /></>;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: "-35% 0px -55%" });
    navItems.forEach(([, id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
    <a className="brand-mark" href="#home" aria-label="Gowrob Dash home"><span>GD</span><em>G-ROBOTICS</em></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navItems.map(([label, id]) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`}>{label}</a>)}
    </nav>
    <Sheet>
      <SheetTrigger asChild><Button variant="console" size="icon" className="mobile-menu" aria-label="Open menu"><Menu /></Button></SheetTrigger>
      <SheetContent className="mobile-sheet">
        <SheetHeader><SheetTitle>G-ROBOTICS</SheetTitle><SheetDescription>Personal electronics laboratory</SheetDescription></SheetHeader>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id], index) => <SheetClose asChild key={id}><button onClick={() => go(id)}><span>{String(index + 1).padStart(2, "0")}</span>{label}<ChevronRight /></button></SheetClose>)}
        </nav>
      </SheetContent>
    </Sheet>
  </header>;
}

function PortraitConsole() {
  return <div className="portrait-console reveal" data-cursor="SCAN">
    <div className="portrait-grid" aria-hidden="true" />
    <div className="portrait-orbit orbit-one" aria-hidden="true" />
    <div className="portrait-orbit orbit-two" aria-hidden="true" />
    <div className="portrait-scan" aria-hidden="true" />
    <img src={portraitAsset.url} alt="Professional portrait of Gowrob Dash, Electronics student and G-Robotics enthusiast" fetchPriority="high" />
    <div className="portrait-readout top"><span>SUBJECT / GD-01</span><b>IDENTITY LOCKED</b></div>
    <div className="portrait-readout bottom"><span>SYLHET, BD</span><b>LAB ONLINE</b></div>
    <div className="portrait-nodes" aria-hidden="true"><i /><i /><i /><i /></div>
  </div>;
}

function CircuitPath() {
  const [selected, setSelected] = useState(1);
  const [buildStep, setBuildStep] = useState(-1);
  const [building, setBuilding] = useState(false);
  const selectedComponent = components[selected] ?? components[0];
  const activate = () => {
    if (building) return;
    setBuilding(true); setBuildStep(0); setSelected(1);
    const steps = [1, 2, 3, 4, 5, 6];
    steps.forEach((step, index) => window.setTimeout(() => { setBuildStep(step); setSelected(step); }, (index + 1) * 520));
    window.setTimeout(() => setBuilding(false), 3900);
  };
  return <section className="circuit-deck reveal" aria-labelledby="system-title">
    <div className="deck-topline"><span>LIVE SYSTEM / SIGNAL PATH</span><span className="signal-live"><i /> 3.3V STABLE</span></div>
    <div className="circuit-layout">
      <div className="component-rail" role="list" aria-label="Interactive electronic signal path">
        {components.map((part, index) => {
          const Icon = part.icon; const energized = building ? index <= buildStep : index === selected;
          return <div className="component-step" key={part.id}>
            <Button variant="circuit" className={`component-node ${energized ? "energized" : ""}`} onMouseEnter={() => !building && setSelected(index)} onFocus={() => !building && setSelected(index)} onClick={() => setSelected(index)} data-cursor="TARGET" aria-pressed={selected === index}>
              <span className="node-code">0{index + 1}</span><Icon /><strong>{part.name}</strong><small>{part.type}</small>
            </Button>
            {index < components.length - 1 ? <div className={`trace-segment ${building && index < buildStep ? "active" : ""}`}><i /></div> : null}
          </div>;
        })}
      </div>
      <aside className="component-readout" aria-live="polite">
        <div><span>SELECTED COMPONENT</span><b>0{selected + 1}</b></div>
        <h3 id="system-title">{selectedComponent.name}</h3>
        <p>{selectedComponent.detail}</p>
        <dl><div><dt>SYSTEM ROLE</dt><dd>{selectedComponent.type}</dd></div><div><dt>LINK STATUS</dt><dd className="online">CONNECTED</dd></div></dl>
      </aside>
    </div>
    <div className="build-control">
      <div><span>SEQUENCE</span><strong>{building ? (buildStep === 6 ? "System Connected" : "Activating signal path…") : "Ready to initialize"}</strong></div>
      <Button variant="signal" size="xl" onClick={activate} disabled={building}><Zap /> {building ? "BUILDING..." : "BUILD THE SYSTEM"}</Button>
    </div>
  </section>;
}

function Hero() {
  return <section id="home" className="hero-section">
    <div className="hero-grid-bg" aria-hidden="true" />
    <div className="hero-layout page-shell">
      <div className="hero-copy reveal">
        <div className="eyebrow"><CircuitBoard /> G-ROBOTICS <i /> ELECTRONICS <i /> ROBOTICS</div>
        <h1>Hi, I’m <span>Gowrob Dash</span></h1>
        <p className="hero-lead">Building Ideas With <strong>Electronics, Robotics & AI</strong></p>
        <p className="hero-description">I’m an Electronics student and G-Robotics enthusiast exploring embedded systems, Arduino, ESP32, robotics and AI-powered technology content.</p>
        <div className="hero-actions"><Button asChild variant="signal" size="xl" data-cursor="OPEN"><a href="#projects">Explore My Projects <ArrowDownRight /></a></Button><Button asChild variant="console" size="xl" data-cursor="LINK"><a href="#contact">Let’s Connect <ArrowRight /></a></Button></div>
        <div className="hero-status"><span><i /> ACTIVE EXPLORATION</span><p>Currently Exploring Electronics + Robotics + AI</p></div>
      </div>
      <PortraitConsole />
    </div>
    <div className="page-shell"><CircuitPath /></div>
  </section>;
}

function About() {
  const data = [["NAME", "Gowrob Dash"], ["FIELD", "Electronics & Robotics"], ["INSTITUTE", "Sylhet Polytechnic Institute"], ["DEPARTMENT", "Electronics"], ["PROGRAM", "Diploma in Engineering"], ["STATUS", "4th Semester — Currently Studying"], ["LOCATION", "Sylhet, Bangladesh"]];
  return <section id="about" className="section-band"><div className="page-shell"><SectionHeading number="01" eyebrow="IDENTITY FILE" title="ABOUT GOWROB" />
    <div className="about-layout">
      <div className="about-copy reveal"><p className="lead-copy">I’m Gowrob Dash, an Electronics student at Sylhet Polytechnic Institute and a passionate G-Robotics enthusiast.</p><p>I enjoy learning how electronic systems work, building practical projects and experimenting with microcontrollers, motors, sensors and robotics.</p><p>My interests include Arduino, ESP32, embedded systems, robotics, electronics projects and AI-powered technology content.</p><div className="coordinate"><MapPin /><span>24.8949° N / 91.8687° E</span><b>SYLHET</b></div></div>
      <div className="profile-terminal reveal"><div className="terminal-head"><span>TECHNICAL PROFILE</span><div><i/><i/><i/></div></div>{data.map(([key,value]) => <div className="data-row" key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
    </div>
  </div></section>;
}

function Skills() {
  return <section id="skills" className="section-band section-grid"><div className="page-shell"><SectionHeading number="02" eyebrow="CAPABILITY MATRIX" title="TECHNICAL SKILLS" description="A growing toolkit built through study, hands-on experiments, and continuous technical exploration." />
    <div className="skills-grid">{skills.map(([title, text, Icon], index) => <article className="skill-card reveal" key={title} style={{ "--delay": `${(index % 5) * 45}ms` } as React.CSSProperties}><span>SK-{String(index + 1).padStart(2,"0")}</span><Icon/><h3>{title}</h3><p>{text}</p><div className="skill-indicator"><i/><i/><i/></div></article>)}</div>
  </div></section>;
}

function Education() {
  return <section id="education" className="section-band"><div className="page-shell"><SectionHeading number="03" eyebrow="ACADEMIC SIGNAL" title="EDUCATION" />
    <div className="education-console reveal"><div className="edu-timeline"><span>2026</span><i/><span>NOW</span></div><div className="edu-main"><span className="mono-label">CURRENT PROGRAM</span><h3>Sylhet Polytechnic Institute</h3><p>Department of Electronics</p><div className="edu-details"><span><small>PROGRAM</small>Diploma in Engineering</span><span><small>STATUS</small>4th Semester — Currently Studying</span><span><small>LOCATION</small>Sylhet, Bangladesh</span></div></div><CircuitBoard className="edu-chip" /></div>
  </div></section>;
}

function ProjectDialog({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <Dialog><DialogTrigger asChild><Button variant="console" data-cursor="VIEW">View Project <ArrowRight /></Button></DialogTrigger><DialogContent className="project-dialog"><DialogHeader><span className="mono-label">PROJECT FILE / 0{index + 1}</span><DialogTitle>{project.title}</DialogTitle><DialogDescription>{project.description}</DialogDescription></DialogHeader><div className="dialog-placeholder"><CircuitBoard/><span>PROJECT IMAGES / DEMO</span><strong>Media will be added soon</strong></div><div className="dialog-grid">{[["Project Overview", project.description], ["Problem / Idea", "Detailed project notes will be added as the experiment develops."], ["How It Works", "The working process will be documented here."], ["Components", "Component list pending documentation."], ["Technology Used", project.tags.join(" • ")], ["Future Improvements", "Future revisions and improvements will be documented here."]].map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}</div></DialogContent></Dialog>;
}

function Projects() {
  return <section id="projects" className="section-band section-grid"><div className="page-shell"><SectionHeading number="04" eyebrow="BUILD ARCHIVE" title="PROJECTS & EXPERIMENTS" description="Practical explorations in embedded control, movement, sensing, and robotics." />
    <div className="projects-grid">{projects.map((project,index) => <article className="project-card reveal" key={project.title} data-cursor="VIEW"><div className={`project-visual visual-${(index % 3) + 1}`}><div className="visual-circuit"><CircuitBoard/><span>PROJECT MEDIA</span><small>Placeholder / awaiting field images</small></div><b>0{index + 1}</b></div><div className="project-body"><span>EXPERIMENT / {project.tags[0]}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</div><ProjectDialog project={project} index={index}/></div></article>)}</div>
  </div></section>;
}

function AiContent() {
  return <section id="ai-content" className="section-band"><div className="page-shell"><SectionHeading number="05" eyebrow="CREATIVE TRANSMISSION" title="AI × TECHNOLOGY" description="Exploring technology through AI-powered visual storytelling, educational explainers and creative short-form content." />
    <div className="video-grid">{aiContent.map(([title, description], index) => <article className="video-card reveal" key={title}><div className="video-placeholder"><span>AI / {String(index + 1).padStart(2,"0")}</span><Button variant="console" size="icon" aria-label={`Play ${title}`} title="Video coming soon"><Play/></Button><small>VIDEO PLACEHOLDER</small></div><div><span>{index % 2 ? "CREATIVE CONCEPT" : "EDUCATIONAL"}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div>
  </div></section>;
}

function TechLab() {
  const [active, setActive] = useState(0);
  const part = labParts[active] ?? labParts[0]; const ActiveIcon = part[4];
  return <section id="tech-lab" className="section-band lab-band"><div className="page-shell"><SectionHeading number="06" eyebrow="INTERACTIVE BENCH" title="MY TECH LAB" description="Select a component on the virtual workbench to inspect its role in an electronic system." />
    <div className="lab-console reveal"><div className="lab-bench">{labParts.map(([name,,, ,Icon], index) => <Button key={name} variant="circuit" className={`lab-part part-${index + 1} ${active === index ? "active" : ""}`} onClick={() => setActive(index)} data-cursor="INSPECT"><Icon/><span>{name}</span></Button>)}<div className="bench-lines" aria-hidden="true"/></div><aside className="lab-readout"><div className="readout-icon"><ActiveIcon/></div><span>COMPONENT 0{active + 1}</span><h3>{part[0]}</h3><dl><div><dt>WHAT IT DOES</dt><dd>{part[1]}</dd></div><div><dt>TYPICAL USE</dt><dd>{part[2]}</dd></div><div><dt>RELATED PROJECT</dt><dd>{part[3]}</dd></div></dl></aside></div>
  </div></section>;
}

function TechnologyMap() {
  const nodes = ["Electronics", "Arduino", "ESP32", "ESP32-S3", "Sensors", "Motor Control", "Robotics", "PLC", "AI Content"];
  const [active, setActive] = useState(2);
  return <section className="section-band technology-map"><div className="page-shell"><SectionHeading number="07" eyebrow="KNOWLEDGE NETWORK" title="TECHNOLOGY MAP" />
    <div className="map-console reveal"><div className="map-stage"><div className="map-core"><Cpu/><span>CORE SYSTEM</span><strong>MICROCONTROLLER / PCB</strong></div>{nodes.map((node,index) => <Button key={node} variant="circuit" className={`map-node node-${index + 1} ${active === index ? "active" : ""}`} onClick={() => setActive(index)} data-cursor="LINK"><i/><span>{node}</span></Button>)}</div><aside className="map-readout"><span>ACTIVE CONNECTION / 0{active + 1}</span><h3>{nodes[active]}</h3><p>{nodes[active]} connects to Gowrob’s core electronics learning path through practical experiments and technology content.</p><div><small>RELATED SYSTEMS</small><b>{active < 4 ? "Embedded control • Prototyping" : active < 7 ? "Sensors • Motion • Robotics" : "Automation • Communication"}</b></div></aside></div>
  </div></section>;
}

function Journey() {
  return <section id="journey" className="section-band"><div className="page-shell"><SectionHeading number="08" eyebrow="CONTINUOUS LEARNING" title="MY TECHNOLOGY JOURNEY" description="Not a finished timeline—a live path of learning, building, and experimentation." />
    <ol className="journey-line">{journey.map((item,index) => <li className="reveal" key={item}><span>{String(index + 1).padStart(2,"0")}</span><i/><h3>{item}</h3><small>{index === journey.length - 1 ? "NEXT SIGNAL" : "CONNECTED"}</small></li>)}</ol>
  </div></section>;
}

function Certificates() {
  return <section id="certificates" className="section-band"><div className="page-shell"><SectionHeading number="09" eyebrow="VERIFIED RECORDS" title="CERTIFICATES & ACHIEVEMENTS" />
    <div className="certificate-empty reveal"><div className="certificate-seal"><CircuitBoard/></div><div><span>ARCHIVE STATUS / READY</span><h3>Certificates and achievements will be added soon.</h3><p>This area is prepared for verified records as Gowrob’s technology journey continues.</p></div><div className="empty-slots"><i/><i/><i/></div></div>
  </div></section>;
}

function Contact() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(`Name: ${String(data.get("name") ?? "")}\nEmail: ${String(data.get("email") ?? "")}\n\n${String(data.get("message") ?? "")}`);
    window.location.href = `mailto:Gowrobwbe@gmail.com?subject=${subject}&body=${body}`;
  };
  return <><section className="exploring-strip reveal"><div className="page-shell"><div><span><i/> ACTIVE EXPLORATION</span><h2>Electronics + Robotics + AI</h2><p>Learning, building and experimenting with new technology.</p></div><div className="signal-wave" aria-hidden="true">{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div></div></section>
    <section id="contact" className="section-band contact-band"><div className="page-shell"><SectionHeading number="10" eyebrow="OPEN CHANNEL" title="LET’S BUILD SOMETHING" description="Have a project idea, collaboration opportunity or technology concept?" />
      <div className="contact-layout"><div className="contact-details reveal"><a href="mailto:Gowrobwbe@gmail.com" data-cursor="MAIL"><AtSign/><span>EMAIL</span><strong>Gowrobwbe@gmail.com</strong></a><div><MapPin/><span>LOCATION</span><strong>Sylhet, Bangladesh</strong></div><div className="social-row">{socials.map(({label,href,icon:Icon,pending}) => <a key={label} href={href} target={pending || href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" aria-label={pending ? `${label} URL pending` : label} title={pending ? "URL pending" : label} data-cursor="LINK"><Icon/>{pending ? <i/> : null}</a>)}</div></div>
      <form className="contact-form reveal" onSubmit={submit}><label><span>NAME</span><input name="name" required placeholder="Your name" /></label><label><span>EMAIL</span><input name="email" type="email" required placeholder="you@example.com" /></label><label><span>MESSAGE</span><textarea name="message" required rows={5} placeholder="Tell me about your idea" /></label><Button variant="signal" size="xl" type="submit">Send Message <ArrowRight/></Button></form></div>
    </div></section></>;
}

function Footer() {
  return <footer className="site-footer"><div className="page-shell"><div><a className="brand-mark" href="#home"><span>GD</span><em>G-ROBOTICS</em></a><p>Gowrob Dash</p><small>Electronics • Robotics • AI</small></div><div><p>Building, learning and exploring technology.</p><a href="mailto:Gowrobwbe@gmail.com">Gowrobwbe@gmail.com</a><span>Sylhet, Bangladesh</span></div><div><span>© 2026 Gowrob Dash.</span><span>All rights reserved.</span></div></div></footer>;
}

export function Portfolio() {
  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => ({ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%`, delay: `${(i % 6) * .6}s` })), []);
  return <div className="portfolio-app"><ScrollReveal/><TechnicalCursor/><div className="ambient-particles" aria-hidden="true">{particles.map((p,i)=><i key={i} style={{left:p.left,top:p.top,animationDelay:p.delay}}/>)}</div><Navigation/><main><Hero/><About/><Skills/><Education/><Projects/><AiContent/><TechLab/><TechnologyMap/><Journey/><Certificates/><Contact/></main><Footer/></div>;
}