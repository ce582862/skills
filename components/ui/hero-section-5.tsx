'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Dna, Microscope, ShieldCheck, Stethoscope, Users, BookOpen, ExternalLink } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const menuItems = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Approach', href: '#approach' },
  { name: 'Profile', href: '#profile' },
  { name: 'Contact', href: '#contact' },
]

const highlights = ['Clinical genetics', 'Genomic medicine', 'Dermatogenetics', 'Cancer genetics', 'Medical education', 'Research advisory']

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative min-h-screen overflow-hidden">
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:max-w-3xl lg:text-left">
                <p className="inline-flex rounded-full border border-primary/15 bg-background/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">Genomics-led consultancy by Dr. Schaida Schirwani</p>
                <h1 className="mt-8 max-w-3xl text-balance font-serif text-5xl font-semibold tracking-tight md:text-6xl lg:mt-16 xl:text-7xl">Clinical genetics expertise for clearer, safer decisions.</h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">A specialist advisory website for organisations seeking support with genomic medicine, dermatogenetics, cancer genetics pathways, education, and evidence-informed clinical service design.</p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="h-12 rounded-full pl-5 pr-3 text-base">
                    <Link href="#contact"><span className="text-nowrap">Request a consultation</span><ChevronRight className="ml-1 size-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-5 text-base hover:bg-primary/5">
                    <Link href="#profile"><span className="text-nowrap">View credentials</span></Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-1 overflow-hidden rounded-3xl border border-black/10 lg:rounded-[3rem]">
              <img className="size-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2200&q=80" alt="Abstract clinical laboratory workspace" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6"><p className="text-center text-sm font-medium text-muted-foreground md:text-end">Advisory focus areas</p></div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
                  {highlights.map((item) => <div className="flex min-w-max items-center gap-2 rounded-full border bg-card px-5 py-2 text-sm font-semibold shadow-sm" key={item}><Dna className="size-4 text-accent" />{item}</div>)}
                </InfiniteSlider>
                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20" />
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20" />
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => setScrolled(latest > 0.05))
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav data-state={menuState && 'active'} className="group fixed z-20 w-full pt-2">
        <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/80 shadow-sm backdrop-blur-2xl')}>
          <motion.div key={1} className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center gap-3"><Logo /><span className="hidden font-semibold text-primary sm:inline">Dr. Schaida Schirwani</span></Link>
              <button onClick={() => setMenuState(!menuState)} aria-label={menuState ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>
              <div className="hidden lg:block"><ul className="flex gap-8 text-sm">{menuItems.map((item) => <li key={item.name}><Link href={item.href} className="block text-muted-foreground duration-150 hover:text-primary"><span>{item.name}</span></Link></li>)}</ul></div>
            </div>
            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 group-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex">
              <div className="lg:hidden"><ul className="space-y-6 text-base">{menuItems.map((item) => <li key={item.name}><Link href={item.href} className="block text-muted-foreground duration-150 hover:text-primary" onClick={() => setMenuState(false)}><span>{item.name}</span></Link></li>)}</ul></div>
              <Button asChild variant="outline" size="sm"><Link href="#research"><span>Research</span></Link></Button>
              <Button asChild size="sm"><Link href="#contact"><span>Enquire</span></Link></Button>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => <div className={cn('grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm', className)}>SS</div>

export const expertiseCards = [
  { icon: Microscope, title: 'Dermatogenetics advisory', text: 'Support for services and teams working at the intersection of inherited skin disease, tumour predisposition, and genomic testing.' },
  { icon: ShieldCheck, title: 'Cancer genetics pathways', text: 'Advice on referral logic, risk communication, governance, and patient-centred genomic pathway design.' },
  { icon: Stethoscope, title: 'Clinical genomics education', text: 'Workshops and briefings that translate complex genetics into practical learning for multidisciplinary audiences.' },
  { icon: Users, title: 'Service strategy', text: 'Independent review, facilitation, and implementation planning for genetics and precision medicine initiatives.' },
]

export const researchLinks = [
  { label: 'University Hospital Southampton consultant profile', href: 'https://www.uhs.nhs.uk/for-patients/find-your-consultant/dr-schaida-schirwani' },
  { label: 'Selected publications list', href: 'https://www.uhs.nhs.uk/Media/UHS-website-2019/Docs/Consultant-publications-lists/Dr-Schaida-Schirwani-publications.pdf' },
  { label: 'PubMed article example', href: 'https://pubmed.ncbi.nlm.nih.gov/38112607/' },
]

export { BookOpen, ExternalLink }
