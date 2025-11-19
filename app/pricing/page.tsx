"use client"

import Link from "next/link"
import { ArrowLeft, Check, Code2, Cpu, Database, Globe, Layout, Zap, Terminal, Search, Command, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-white text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
              <span className="font-bold tracking-tight">V-Grid</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/demos" className="hover:text-foreground transition-colors">
              Demos
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/changelog" className="hover:text-foreground transition-colors">
              Changelog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://v0.app"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Open in v0
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 subtle-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Simple, transparent pricing.
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                V-Grid is open source and free to use. No hidden fees, no credit card required.
              </p>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 md:p-12 max-w-lg w-full shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
                
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-white">Open Source</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <span className="text-muted-foreground">/forever</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Because this is a v0 template!
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">Unlimited Rows & Columns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">Virtual Scrolling Engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">Headless Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">Full TypeScript Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">MIT License</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-white">Community Support</span>
                  </div>
                </div>

                <Link
                  href="/demos"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Start Building Now
                </Link>
                
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  No credit card required. It's just code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-white/10 bg-black py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Is it really free?</h3>
                <p className="text-muted-foreground">
                  Yes! V-Grid is a template generated by v0 and is completely free to use in your personal and commercial projects.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Can I use this in commercial projects?</h3>
                <p className="text-muted-foreground">
                  Absolutely. The code is yours to modify and distribute as you see fit.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Do you offer support?</h3>
                <p className="text-muted-foreground">
                  Since this is a template, support is community-driven. You can check the documentation or open issues on GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2025 V-Grid Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="https://github.com/headline-design/v-grid" className="text-muted-foreground hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
