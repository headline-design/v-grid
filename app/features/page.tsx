import Link from "next/link"
import { Check, Code2, Cpu, Database, Keyboard, Layout, Zap, MousePointer2, Palette, ShieldCheck } from "lucide-react"

export default function FeaturesPage() {
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
            <Link href="/features" className="text-foreground transition-colors">
              Features
            </Link>
            <Link href="/demos" className="hover:text-foreground transition-colors">
              Demos
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/changelog" className="hover:text-foreground transition-colors">
              Changelog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://v0.app/templates/v-grid-fRhs5MEIcJT"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Open in v0
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
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                Engineered for scale
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Performance meets <br />
                Precision.
              </h1>

              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                A deep dive into the architecture that makes V-Grid the fastest and most flexible React data grid on the
                market.
              </p>
            </div>
          </div>
        </section>

        {/* Core Architecture Grid */}
        <section className="py-24 bg-black border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Virtualization */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/[0.07]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Cpu className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Virtualization Engine</h3>
                  <p className="text-muted-foreground">
                    Our core rendering engine only draws what is visible in the viewport. Scroll through 100,000+ rows
                    with consistent 60fps performance and minimal memory footprint.
                  </p>
                </div>
              </div>

              {/* Headless */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/[0.07]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Layout className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <Palette className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Headless Design</h3>
                  <p className="text-muted-foreground">
                    Built on top of TanStack Table, V-Grid gives you complete control over the UI. We provide the logic
                    and structure; you provide the style via Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* TypeScript */}
              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:border-white/20 hover:bg-white/[0.07]">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Code2 className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Type Safety</h3>
                  <p className="text-muted-foreground">
                    Written in TypeScript from the ground up. Enjoy full type inference for your data columns, props,
                    and event handlers. No more guessing `any`.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6 space-y-24">
            {/* Interaction */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                  Interaction
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Keyboard First Navigation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Power users shouldn't have to reach for the mouse. V-Grid supports full keyboard navigation modeled
                  after Excel and Google Sheets.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white">
                      <Keyboard className="h-3 w-3" />
                    </div>
                    Arrow keys to navigate cells
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white">
                      <MousePointer2 className="h-3 w-3" />
                    </div>
                    Shift + Click for range selection
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white">
                      <Check className="h-3 w-3" />
                    </div>
                    Space to toggle selection
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl" />
                  <div className="relative rounded-lg bg-black border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 text-xs font-medium text-muted-foreground">
                      <div className="p-4 border-r border-white/10">Name</div>
                      <div className="p-4 border-r border-white/10">Role</div>
                      <div className="p-4">Status</div>
                    </div>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-3 border-b border-white/5 ${i === 2 ? "bg-blue-500/20" : ""}`}
                      >
                        <div
                          className={`p-4 border-r border-white/5 text-sm ${i === 2 ? "text-white ring-1 ring-inset ring-blue-500" : "text-muted-foreground"}`}
                        >
                          User {i}
                        </div>
                        <div className="p-4 border-r border-white/5 text-sm text-muted-foreground">Developer</div>
                        <div className="p-4 text-sm text-muted-foreground">Active</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white">
                  Data Management
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Powerful Data Operations</h2>
                <p className="text-lg text-muted-foreground">
                  Sort, filter, and group your data with zero latency. V-Grid handles complex data operations on the
                  client side or integrates seamlessly with server-side logic.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold text-white mb-1">Sorting</h4>
                    <p className="text-sm text-muted-foreground">Multi-column sort with custom comparators.</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold text-white mb-1">Filtering</h4>
                    <p className="text-sm text-muted-foreground">Fuzzy search and specific column filters.</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold text-white mb-1">Pagination</h4>
                    <p className="text-sm text-muted-foreground">Client or server-side pagination support.</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h4 className="font-semibold text-white mb-1">Selection</h4>
                    <p className="text-sm text-muted-foreground">Single, multiple, and range selection modes.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black rounded-xl" />
                  <div className="relative z-10 grid gap-4 w-full max-w-sm">
                    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black p-3 text-sm text-muted-foreground">
                      <Database className="h-4 w-4" />
                      <span>Fetching 10,000 rows...</span>
                      <span className="ml-auto text-green-500">Done (12ms)</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black p-3 text-sm text-muted-foreground">
                      <Layout className="h-4 w-4" />
                      <span>Calculating layout...</span>
                      <span className="ml-auto text-green-500">Done (4ms)</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black p-3 text-sm text-muted-foreground">
                      <Zap className="h-4 w-4" />
                      <span>First paint...</span>
                      <span className="ml-auto text-green-500">Done (16ms)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/10 bg-black py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Start building with V-Grid
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The modern, high-performance data grid for your next React application.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link
                  href="/demos"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Demos
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">© 2025 V-Grid Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                Twitter
              </Link>
              <Link
                href="https://github.com/headline-design/v-grid"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
