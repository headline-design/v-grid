"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Sparkles, Building2, AtSign, Link, Zap, Radio, Share2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface ActionsSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ActionsSidebar({ isOpen, onClose }: ActionsSidebarProps) {
  const [activeTab, setActiveTab] = useState("enrichments")

  if (!isOpen) return null

  return (
    <nav
      className="border-l border-gray-200 w-[480px] flex h-full flex-col bg-white"
      data-width="medium"
      data-variant="docked"
    >
      <div className="flex h-full">
        <div className="flex max-h-[inherit] w-full flex-col overflow-x-hidden">
          {/* Header */}
          <div className="flex w-full flex-shrink-0 items-center gap-2 border-b min-h-0 py-2 pr-2 pl-4">
            <h5 className="text-sm font-semibold tracking-tight">Actions</h5>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="ml-auto h-8 bg-transparent"
              aria-label="Close"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex h-full min-h-0 flex-col">
            {/* Search */}
            <div className="flex flex-col w-full border-b">
              <div className="w-full border-b p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  <Input placeholder="Search" className="pl-9 h-10 border-gray-300" />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 px-4 py-3">
                <Button
                  variant={activeTab === "sources" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("sources")}
                  className="flex-1 h-20 flex-col gap-2"
                >
                  <Search className="size-5" />
                  <span className="text-xs">Sources</span>
                </Button>
                <Button
                  variant={activeTab === "enrichments" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("enrichments")}
                  className="flex-1 h-20 flex-col gap-2"
                >
                  <Zap className="size-5" />
                  <span className="text-xs">Enrichments</span>
                </Button>
                <Button
                  variant={activeTab === "signals" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("signals")}
                  className="flex-1 h-20 flex-col gap-2"
                >
                  <Radio className="size-5" />
                  <span className="text-xs">Signals</span>
                </Button>
                <Button
                  variant={activeTab === "exports" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("exports")}
                  className="flex-1 h-20 flex-col gap-2"
                >
                  <Share2 className="size-5" />
                  <span className="text-xs">Exports</span>
                </Button>
              </div>
            </div>

            {/* Enrichments List */}
            {activeTab === "enrichments" && (
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  {/* Suggested Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between mb-4">
                        Suggested
                        <ChevronDown className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Suggested</DropdownMenuItem>
                      <DropdownMenuItem>All</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Enrichment Items */}
                  <div className="space-y-2">
                    {/* Use AI */}
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border">
                      <div className="p-2 rounded bg-purple-100">
                        <Sparkles className="size-5 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h6 className="text-sm font-semibold">Use AI</h6>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">0.5 / row</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Artificial Intelligence</p>
                      </div>
                    </div>

                    {/* Enrich person */}
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border">
                      <div className="p-2 rounded bg-gray-100">
                        <Building2 className="size-5 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h6 className="text-sm font-semibold">Enrich person</h6>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">1 / row</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Companies, People, Jobs</p>
                      </div>
                    </div>

                    {/* Enrich Company */}
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border">
                      <div className="p-2 rounded bg-gray-100">
                        <Building2 className="size-5 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h6 className="text-sm font-semibold">Enrich Company</h6>
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">1 / row</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Companies, People, Jobs</p>
                      </div>
                    </div>

                    {/* Work Email */}
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border">
                      <div className="p-2 rounded bg-blue-100">
                        <AtSign className="size-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h6 className="text-sm font-semibold">Work Email</h6>
                          <div className="flex gap-1">
                            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">+7</span>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">-3</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          Find a person's work email, this waterfall is optimized f...
                        </p>
                      </div>
                    </div>

                    {/* Company Domain */}
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border">
                      <div className="p-2 rounded bg-blue-100">
                        <Link className="size-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h6 className="text-sm font-semibold">Company Domain</h6>
                          <div className="flex gap-1">
                            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">+2</span>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">-1</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Need to find a domain for...</p>
                      </div>
                    </div>
                  </div>

                  {/* View All Link */}
                  <Button variant="link" className="w-full mt-4 text-blue-600">
                    View all enrichments
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
