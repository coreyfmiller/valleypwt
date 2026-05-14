'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors mt-2"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
