import Link from "next/link"
import { ArrowLeft, Package, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">Changelog</span>
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
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/demos"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Try Demo
            </Link>
            <Link
              href="https://v0.app/templates/v-grid-fRhs5MEIcJT"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Open in v0
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Changelog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Track new features, improvements, and bug fixes across all V-Grid releases.
            </p>
          </div>

          <Separator className="bg-white/10" />

          {/* Version 0.1.0 */}
          <article className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <Package className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h2 className="text-2xl font-bold tracking-tight">Version 0.1.0</h2>
                  <Badge variant="outline" className="w-fit">
                    Initial Release
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime="2025-01-15">January 15, 2025</time>
                  <span>•</span>
                  <span>Static Data Focus</span>
                </div>
              </div>
            </div>

            <div className="ml-14 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We're excited to announce the first release of V-Grid, a high-performance React data grid built with the
                Vercel aesthetic in mind. This initial version focuses on providing a robust foundation for working with
                static datasets.
              </p>

              {/* Core Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  Core Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Virtual Scrolling:</strong> Efficiently render large datasets
                      with smooth 60fps performance using row and column virtualization.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Multi-Column Sorting:</strong> Sort by multiple columns
                      simultaneously with type-aware comparators for strings, numbers, dates, and more.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Advanced Filtering:</strong> Global search across all columns
                      plus column-specific filters with operators like "contains", "equals", and "starts with".
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Inline Cell Editing:</strong> Double-click or press Enter to
                      edit cells directly with automatic type validation and undo/redo support.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Row Selection:</strong> Single and multi-row selection with
                      keyboard shortcuts and bulk operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Column Management:</strong> Show/hide columns, resize headers,
                      and customize visibility on the fly.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Keyboard Navigation:</strong> Full keyboard support modeled
                      after Excel and Google Sheets with arrow keys, Enter, Escape, and more.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong className="text-foreground">Import & Export:</strong> Load data from CSV files or paste
                      from clipboard. Export to CSV or JSON formats.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Technical Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Technical Highlights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">→</span>
                    <span>
                      Built on{" "}
                      <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">@tanstack/react-table</code>{" "}
                      for robust data management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">→</span>
                    <span>Styled with Tailwind CSS v4 for a modern, customizable UI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">→</span>
                    <span>Fully typed with TypeScript for enhanced developer experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">→</span>
                    <span>Responsive design that works seamlessly on desktop and mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">→</span>
                    <span>Optimized for Next.js with server and client component support</span>
                  </li>
                </ul>
              </div>

              {/* Data Type Support */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Supported Data Types</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-blue-400">string</span>
                    <p className="text-xs text-muted-foreground mt-1">Text with standard sorting and filtering</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-green-400">number</span>
                    <p className="text-xs text-muted-foreground mt-1">Numeric values with locale formatting</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-yellow-400">date</span>
                    <p className="text-xs text-muted-foreground mt-1">Date objects with human-readable display</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-purple-400">boolean</span>
                    <p className="text-xs text-muted-foreground mt-1">True/false with visual indicators</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-pink-400">url</span>
                    <p className="text-xs text-muted-foreground mt-1">Clickable web links</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-sm text-orange-400">email</span>
                    <p className="text-xs text-muted-foreground mt-1">Email addresses with mailto links</p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-blue-400">What's Next?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Future releases will expand V-Grid's capabilities with server-side data operations, column grouping,
                  row grouping, infinite scrolling, and more advanced cell types. Stay tuned for v0.2.0 coming soon!
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/demos"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Try the Demo
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  View Documentation
                </Link>
                <Link
                  href="https://github.com/headline-design/v-grid"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          </article>
        </div>
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
