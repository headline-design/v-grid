import Link from "next/link"
import { ArrowLeft, Keyboard, Zap, Layout, Database, Filter, ArrowDownUp, Edit3, Copy, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
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
            <span className="font-medium text-foreground">Docs</span>
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
            <Link href="/docs" className="text-foreground transition-colors">
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

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 max-w-5xl">
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Everything you need to know about V-Grid's features, architecture, and usage.
            </p>
          </div>

          <Separator className="bg-white/10" />

          {/* Overview */}
          <section id="overview" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              V-Grid is a high-performance, feature-rich React data grid designed for modern web applications. It
              combines the power of{" "}
              <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">@tanstack/react-table</code> with a
              polished, Vercel-inspired UI to deliver a seamless developer and user experience.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 bg-white/5 border-white/10">
                <Zap className="h-6 w-6 mb-3 text-yellow-400" />
                <h3 className="font-semibold mb-2">Performance First</h3>
                <p className="text-sm text-muted-foreground">
                  Virtual scrolling for rows and columns ensures 60fps performance even with millions of records.
                </p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10">
                <Layout className="h-6 w-6 mb-3 text-blue-400" />
                <h3 className="font-semibold mb-2">Flexible Layout</h3>
                <p className="text-sm text-muted-foreground">
                  Pin columns, resize headers, and toggle visibility to create the perfect view for your data.
                </p>
              </Card>
              <Card className="p-6 bg-white/5 border-white/10">
                <Database className="h-6 w-6 mb-3 text-green-400" />
                <h3 className="font-semibold mb-2">Data Rich</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in support for sorting, filtering, editing, and exporting data in multiple formats.
                </p>
              </Card>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Core Features */}
          <section id="features" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Core Features</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <ArrowDownUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sorting</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Multi-column sorting with support for string, number, date, and boolean types. Click headers to
                      toggle ascending/descending order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <Filter className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Filtering</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Advanced filtering with operators like "contains", "equals", "starts with", and more. Global
                      search across all visible columns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <Edit3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Inline Editing</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Double-click or press Enter to edit cells directly. Includes undo/redo support for all data
                      changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <Copy className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Selection & Bulk Actions</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Row selection with checkbox support. Perform bulk operations like delete, duplicate, or edit on
                      selected rows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <Share2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Import / Export</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Import data from CSV files or paste directly from clipboard. Export filtered or selected data to
                      CSV and JSON.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5 border border-white/10">
                    <Keyboard className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Keyboard Navigation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Full keyboard support for navigation, selection, and editing. Excel-like shortcuts for efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Keyboard Shortcuts */}
          <section id="shortcuts" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Keyboard Shortcuts</h2>
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-white/5 text-muted-foreground font-medium border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3">Action</th>
                    <th className="px-4 py-3">Shortcut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Undo</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Ctrl</Badge> + <Badge variant="outline">Z</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Redo</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Ctrl</Badge> + <Badge variant="outline">Y</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Edit Cell</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Enter</Badge> or <Badge variant="outline">F2</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Copy Cell</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Ctrl</Badge> + <Badge variant="outline">C</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Paste Cell</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Ctrl</Badge> + <Badge variant="outline">V</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Navigate</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Arrow Keys</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Delete Cell Content</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Delete</Badge> or <Badge variant="outline">Backspace</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">Cancel Edit</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <Badge variant="outline">Escape</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Data Types */}
          <section id="types" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Supported Data Types</h2>
            <p className="text-muted-foreground">
              V-Grid automatically detects data types to provide appropriate formatting and sorting logic.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-blue-400 mb-2">string</div>
                <p className="text-sm text-muted-foreground">
                  Default text content. Supports standard sorting and filtering.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-green-400 mb-2">number</div>
                <p className="text-sm text-muted-foreground">
                  Numeric values. Right-aligned with locale-aware formatting.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-yellow-400 mb-2">date</div>
                <p className="text-sm text-muted-foreground">Date objects or strings. Formatted as readable dates.</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-purple-400 mb-2">boolean</div>
                <p className="text-sm text-muted-foreground">True/false values. Rendered as Yes/No with icons.</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-pink-400 mb-2">url</div>
                <p className="text-sm text-muted-foreground">Web links. Rendered as clickable anchor tags.</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/5">
                <div className="font-mono text-sm text-orange-400 mb-2">email</div>
                <p className="text-sm text-muted-foreground">Email addresses. Rendered as mailto links.</p>
              </div>
            </div>
          </section>

          <Separator className="bg-white/10" />

          {/* Usage */}
          <section id="usage" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Basic Usage</h2>
            <div className="rounded-lg border border-white/10 bg-black p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <span className="text-purple-400">import</span> {"{"} DataGrid {"}"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'@/components/v-grid/data-grid'</span>
                {"\n\n"}
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-blue-400">MyPage</span>() {"{"}
                {"\n  "}
                <span className="text-purple-400">const</span> handleStateChange = (state) ={">"} {"{"}
                {"\n    "}console.log(<span className="text-green-400">'Table state updated:'</span>, state)
                {"\n  "}
                {"}"}
                {"\n\n  "}
                <span className="text-purple-400">return</span> ({"\n    "}
                <span className="text-blue-400">{"<div"}</span> <span className="text-orange-400">className</span>=
                <span className="text-green-400">"h-[600px]"</span>
                {">"}
                {"\n      "}
                <span className="text-blue-400">{"<DataGrid"}</span>
                {"\n        "}
                <span className="text-orange-400">onStateChange</span>={"{"}handleStateChange{"}"}
                {"\n      "}
                <span className="text-blue-400">{"/>"}</span>
                {"\n    "}
                <span className="text-blue-400">{"</div>"}</span>
                {"\n  "}){"\n"}
                {"}"}
              </pre>
            </div>
            <p className="text-muted-foreground">
              The <code className="text-sm font-mono bg-white/10 px-1 py-0.5 rounded">DataGrid</code> component is
              self-contained and manages its own internal state for data, sorting, and filtering. Use the{" "}
              <code className="text-sm font-mono bg-white/10 px-1 py-0.5 rounded">onStateChange</code> prop to listen
              for updates or control the table externally.
            </p>
          </section>
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
