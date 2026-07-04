'use client'

import { BookOpen, ExternalLink, HeroSection, expertiseCards, researchLinks } from '@/components/ui/hero-section-5'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="expertise" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Specialist consultancy</p><h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-6xl">Genomics advice grounded in clinical practice and research.</h2><p className="mt-6 text-lg text-muted-foreground">Publicly available profiles describe Dr. Schirwani as a consultant in clinical genetics and genomic medicine, an honorary senior clinical lecturer at the University of Southampton, and lead for dermatogenetics services in Wessex. This site uses that evidence to present a focused consultancy offer.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{expertiseCards.map((card) => <article key={card.title} className="rounded-[2rem] border bg-card p-7 shadow-sm"><card.icon className="size-8 text-accent" /><h3 className="mt-8 text-xl font-semibold">{card.title}</h3><p className="mt-4 text-muted-foreground">{card.text}</p></article>)}</div>
      </section>

      <section id="approach" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Approach</p><h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">Rigorous, calm, and implementation-minded.</h2><p className="mt-6 text-primary-foreground/75">Engagements are structured to help clinical, research, and innovation teams make decisions without losing sight of patient safety, evidence quality, and operational realities.</p></div>
          <div className="grid gap-4">
            {['Map the question, audience, and risk context.', 'Review available evidence, pathway constraints, and stakeholder needs.', 'Co-design practical recommendations, teaching, or implementation plans.', 'Support adoption through clear documentation and decision cadence.'].map((step, index) => <div className="rounded-3xl border border-white/10 bg-white/10 p-6" key={step}><span className="text-sm font-bold text-accent">0{index + 1}</span><p className="mt-2 text-lg">{step}</p></div>)}
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1581093458791-9d09cc2c3b5d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-8 text-white shadow-sm"><div className="flex min-h-[420px] flex-col justify-end rounded-[1.5rem] bg-black/35 p-7 backdrop-blur-[2px]"><p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Profile</p><h2 className="mt-3 font-serif text-4xl font-semibold">Dr. Schaida Schirwani</h2></div></div>
        <div className="self-center"><p className="text-lg text-muted-foreground">Research found that Dr. Schirwani is listed by University Hospital Southampton with credentials including MBChB, MSc Medical Genetics, MRCP, and an RCPATH Certificate in Medical Genetics. UHS also lists roles including consultant in clinical genetics and genomic medicine, honorary senior clinical lecturer in clinical genetics, and Wessex dermatogenetics lead.</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-3xl border bg-card p-5"><strong className="text-3xl">32</strong><p className="text-sm text-muted-foreground">ResearchGate-listed publications at time of research</p></div><div className="rounded-3xl border bg-card p-5"><strong className="text-3xl">202</strong><p className="text-sm text-muted-foreground">ResearchGate-listed citations at time of research</p></div><div className="rounded-3xl border bg-card p-5"><strong className="text-3xl">UHS</strong><p className="text-sm text-muted-foreground">Current NHS consultant profile source</p></div></div></div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <div className="rounded-[2rem] border bg-card p-8 md:p-12"><div className="flex items-center gap-3"><BookOpen className="size-7 text-accent" /><h2 className="font-serif text-3xl font-semibold md:text-4xl">Public sources used</h2></div><p className="mt-4 max-w-3xl text-muted-foreground">The site avoids unsupported biography claims and links out to the public profiles and publication records used for the consultancy positioning.</p><div className="mt-8 grid gap-3 md:grid-cols-3">{researchLinks.map((link) => <a key={link.href} href={link.href} className="group rounded-2xl border p-5 font-semibold hover:border-accent" target="_blank" rel="noreferrer">{link.label}<ExternalLink className="mt-4 size-4 text-muted-foreground transition group-hover:text-accent" /></a>)}</div></div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 text-center lg:px-12"><div className="rounded-[2.5rem] bg-secondary p-8 md:p-14"><p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Contact</p><h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Discuss a genomics advisory project.</h2><p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Use this placeholder call-to-action to connect the site to a confirmed business email, booking form, or CRM when the consultancy is ready to launch.</p><Button asChild size="lg" className="mt-8 rounded-full"><a href="mailto:hello@schaidaschirwani.com">Email an enquiry</a></Button></div></section>

      <footer className="border-t py-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row lg:px-12"><p>© 2026 Dr. Schaida Schirwani Consultancy concept.</p><p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn-style components.</p></div></footer>
    </>
  )
}
