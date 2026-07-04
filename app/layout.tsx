import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Dr. Schaida Schirwani | Genomics & Dermatogenetics Consultancy',
  description: 'Specialist consultancy for clinical genetics, dermatogenetics, cancer genetics, education, and precision medicine strategy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={cn(inter.variable, playfair.variable, 'font-sans')}>{children}</body></html>
}
