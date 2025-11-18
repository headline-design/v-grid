import Link from "next/link"
import { ArrowRight, Check, ChevronRight, Code2, Cpu, Database, Globe, Layout, Zap, Terminal, Search, Command } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
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
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/demos" className="hover:text-foreground transition-colors">
              Demos
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Log in
            </Link>
            <Link
              href="#"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 subtle-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="container relative mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                V-Grid 2.0 is now available
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                The Data Grid <br />
                for the Modern Web
              </h1>
              
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                High-performance, feature-rich React data grid. 
                Built for speed, designed for control, and engineered to handle millions of rows without skipping a frame.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link
                  href="/demos"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Start Building
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Documentation
                </Link>
              </div>

              {/* Code Preview / Grid Demo */}
              <div className="mt-16 w-full max-w-5xl rounded-xl border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="flex items-center border-b border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <Link href="/demos" className="mx-auto flex items-center gap-2 rounded-md bg-black/50 px-3 py-1 text-xs text-muted-foreground border border-white/5 hover:text-white hover:border-white/20 transition-all cursor-pointer">
                    <Command className="h-3 w-3" />
                    <span>demo.v-grid.com</span>
                  </Link>
                </div>
                <div className="relative h-[400px] w-full bg-black font-mono text-sm">
                  {/* Mock Grid Header */}
                  <div className="grid grid-cols-6 border-b border-white/10 bg-white/5 text-xs font-medium text-muted-foreground">
                    <div className="p-3 border-r border-white/10">ID</div>
                    <div className="p-3 border-r border-white/10 col-span-2">Customer</div>
                    <div className="p-3 border-r border-white/10">Status</div>
                    <div className="p-3 border-r border-white/10">Amount</div>
                    <div className="p-3">Date</div>
                  </div>
                  {/* Mock Grid Rows */}
                  <div className="overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="grid grid-cols-6 border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <div className="p-3 border-r border-white/5 text-muted-foreground group-hover:text-white">#{2490 + i}</div>
                        <div className="p-3 border-r border-white/5 col-span-2 flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
                          <span className="text-white">Company {String.fromCharCode(65 + i)} Inc.</span>
                        </div>
                        <div className="p-3 border-r border-white/5">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            i % 3 === 0 ? 'bg-emerald-500/10 text-emerald-500' : 
                            i % 3 === 1 ? 'bg-amber-500/10 text-amber-500' : 
                            'bg-blue-500/10 text-blue-500'
                          }`}>
                            {i % 3 === 0 ? 'Paid' : i % 3 === 1 ? 'Pending' : 'Processing'}
                          </span>
                        </div>
                        <div className="p-3 border-r border-white/5 text-white font-medium">
                          ${(Math.random() * 10000).toFixed(2)}
                        </div>
                        <div className="p-3 text-muted-foreground">Oct {12 + i}, 2023</div>
                      </div>
                    ))}
                  </div>
                  {/* Fade out at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-white/10 bg-black py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-white tracking-tighter">10M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Rows Rendered</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-white tracking-tighter">60 FPS</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Scroll Performance</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-white tracking-tighter">5kb</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Gzipped Size</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-3xl font-bold text-white tracking-tighter">0ms</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Input Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Everything you need <br />
                <span className="text-muted-foreground">to build complex data interfaces.</span>
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Virtual Scrolling</h3>
                <p className="text-muted-foreground">
                  Render millions of rows without compromising performance. Only what's visible is rendered in the DOM.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Layout className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Layout Engine</h3>
                <p className="text-muted-foreground">
                  Flexible column sizing, pinning, reordering, and resizing. Build the exact layout your data needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Server-Side Model</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with your backend. Infinite scrolling, pagination, and sorting handled efficiently.
                </p>
              </div>

              {/* Feature 4 - Large Span */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20 md:col-span-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="max-w-md">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">Developer Experience First</h3>
                    <p className="text-muted-foreground">
                      Fully typed with TypeScript. Intuitive API design that feels like native React. 
                      Comprehensive documentation and examples to get you started in minutes.
                    </p>
                  </div>
                  <div className="relative rounded-lg border border-white/10 bg-black p-4 font-mono text-xs text-muted-foreground w-full md:w-auto min-w-[300px]">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                    </div>
                    <p><span className="text-purple-400">import</span> {'{'} DataGrid {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'v-grid'</span>;</p>
                    <p className="mt-2"><span className="text-purple-400">const</span> App = () ={'>'} (</p>
                    <p className="pl-4 text-blue-400">{'<DataGrid'}</p>
                    <p className="pl-8"><span className="text-orange-400">columns</span>={'{'}columns{'}'}</p>
                    <p className="pl-8"><span className="text-orange-400">rows</span>={'{'}rows{'}'}</p>
                    <p className="pl-8"><span className="text-orange-400">virtualScroll</span></p>
                    <p className="pl-8"><span className="text-orange-400">stickyHeader</span></p>
                    <p className="pl-4 text-blue-400">{'/>'}</p>
                    <p>);</p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Accessibility</h3>
                <p className="text-muted-foreground">
                  WAI-ARIA compliant. Keyboard navigation support out of the box. Built for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-y border-white/10 bg-black py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to handle your data?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of developers building high-performance data applications with V-Grid.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <div className="relative rounded-md border border-white/10 bg-black px-4 py-2 font-mono text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-white">$</span> npm install v-grid
                  <button className="ml-2 rounded p-1 hover:bg-white/10 transition-colors">
                    <span className="sr-only">Copy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </button>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
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
                <span className="font-bold tracking-tight text-white">V-Grid</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The high-performance React data grid for modern web applications. 
                Built by developers, for developers.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/demos" className="hover:text-white transition-colors">Demos</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Examples</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2025 V-Grid Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
