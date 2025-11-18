import Link from "next/link"
import { InteractiveGrid } from "@/components/interactive-grid"
import { ArrowLeft } from 'lucide-react'

export default function DemosPage() {
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
            <span className="font-medium text-foreground">Demos</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#" className="text-foreground transition-colors">
              Demos
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Demo</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Experience the performance and flexibility of V-Grid. Try sorting, filtering, and selecting rows in the example below.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm">
            <InteractiveGrid />
          </div>

          <div className="grid gap-6 md:grid-cols-3 pt-8">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 font-semibold text-white">Client-Side Sorting</h3>
              <p className="text-sm text-muted-foreground">
                Lightning fast sorting on the client side. Click any column header to sort by that field.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 font-semibold text-white">Real-time Filtering</h3>
              <p className="text-sm text-muted-foreground">
                Filter through thousands of rows instantly. The search bar updates results as you type.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 font-semibold text-white">Selection Model</h3>
              <p className="text-sm text-muted-foreground">
                Robust selection capabilities. Select individual rows or bulk select all visible rows.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
