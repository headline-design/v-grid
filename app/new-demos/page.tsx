"use client"

import { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Moon, Github, ChevronDown } from 'lucide-react'
import { Toolbar } from '@/components/layout/toolbar'
import V0Table from '@/components/table/v0-table'
import { ActionsSidebar } from '@/components/layout/actions-sidebar'
import Image from 'next/image'

interface DummyJSONProduct {
  id: number
  title: string
  brand: string
  category: string
  price: number
  stock: number
  rating: number
  thumbnail: string
}

interface DummyJSONCart {
  id: number
  userId: number
  totalProducts: number
  totalQuantity: number
  total: number
  discountedTotal: number
}

interface DummyJSONUser {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  phone: string
  company: {
    name: string
    department: string
  }
}

export default function DataGridPage() {
  const [activeDemo, setActiveDemo] = useState<'performance' | 'finance' | 'hr' | 'inventory'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('v0-active-demo')
      return (saved as any) || 'performance'
    }
    return 'performance'
  })
  const [loading, setLoading] = useState(false)
  const [tableKey, setTableKey] = useState(0)

  const demos = [
    { id: 'performance', label: 'Performance', description: 'Grid performance with adjustable rows and columns', image: '/images/performance-demo.jpg' },
    { id: 'finance', label: 'Finance', description: 'Financial data with complex calculations', image: '/images/finance-demo.jpg' },
    { id: 'hr', label: 'HR', description: 'Human resources management interface', image: '/images/hr-demo.jpg' },
    { id: 'inventory', label: 'Inventory', description: 'Product inventory tracking system', image: '/images/inventory-demo.jpg' },
  ] as const

  const handleDemoChange = async (demoId: 'performance' | 'finance' | 'hr' | 'inventory') => {
    setLoading(true)
    setActiveDemo(demoId)

    // Save active demo to localStorage
    localStorage.setItem('v0-active-demo', demoId)

    try {
      let url = ''
      let transformedData: Record<string, any>[] = []
      let headers: string[] = []

      switch (demoId) {
        case 'performance':
        case 'inventory': {
          url = 'https://dummyjson.com/products?limit=100'
          const response = await fetch(url)
          const data = await response.json()
          const products = data.products as DummyJSONProduct[]

          transformedData = products.map(product => ({
            'ID': String(product.id),
            'Product Name': product.title,
            'Brand': product.brand || 'N/A',
            'Category': product.category,
            'Price': `$${product.price.toFixed(2)}`,
            'Stock': String(product.stock),
            'Rating': String(product.rating.toFixed(1)),
            'Performance Score': String((product.rating * product.stock / 10).toFixed(0)),
          }))

          headers = ['ID', 'Product Name', 'Brand', 'Category', 'Price', 'Stock', 'Rating', 'Performance Score']
          break
        }

        case 'finance': {
          url = 'https://dummyjson.com/carts?limit=100'
          const response = await fetch(url)
          const data = await response.json()
          const carts = data.carts as DummyJSONCart[]

          transformedData = carts.map(cart => ({
            'Cart ID': String(cart.id),
            'User ID': String(cart.userId),
            'Total Products': String(cart.totalProducts),
            'Total Quantity': String(cart.totalQuantity),
            'Total Amount': `$${cart.total.toFixed(2)}`,
            'Discounted Total': `$${cart.discountedTotal.toFixed(2)}`,
            'Savings': `$${(cart.total - cart.discountedTotal).toFixed(2)}`,
            'Discount %': `${(((cart.total - cart.discountedTotal) / cart.total) * 100).toFixed(1)}%`,
          }))

          headers = ['Cart ID', 'User ID', 'Total Products', 'Total Quantity', 'Total Amount', 'Discounted Total', 'Savings', 'Discount %']
          break
        }

        case 'hr': {
          url = 'https://dummyjson.com/users?limit=100'
          const response = await fetch(url)
          const data = await response.json()
          const users = data.users as DummyJSONUser[]

          transformedData = users.map(user => ({
            'ID': String(user.id),
            'Full Name': `${user.firstName} ${user.lastName}`,
            'First Name': user.firstName,
            'Last Name': user.lastName,
            'Email': user.email,
            'Age': String(user.age),
            'Phone': user.phone,
            'Department': user.company?.department || 'N/A',
            'Company': user.company?.name || 'N/A',
          }))

          headers = ['ID', 'Full Name', 'First Name', 'Last Name', 'Email', 'Age', 'Phone', 'Department', 'Company']
          break
        }
      }

      const storageData = {
        headers,
        tableData: transformedData,
        fileName: `${demoId}-data.csv`,
      }

      localStorage.setItem('v0-table-data', JSON.stringify(storageData))

      // Force V0Table to remount and reload data
      setTableKey(prev => prev + 1)

    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleDemoChange(activeDemo)
  }, []) // Only run on mount

  const [isActionsOpen, setIsActionsOpen] = useState(false)
  const [tableState, setTableState] = useState<any>({})
  const [columnsData, setColumnsData] = useState<any[]>([])
  const tableControlsRef = useRef<any>({})
  const tableActionsRef = useRef<any>({})
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleViewChange = (view: string) => {
    setTableState((prev: any) => ({ ...prev, view }))
  }

  const handleColumnsChange = (columns: number) => {
    setTableState((prev: any) => ({ ...prev, columns }))
  }

  const handleRowsChange = (rows: number) => {
    setTableState((prev: any) => ({ ...prev, rows }))
  }

  const handleFilterChange = (filters: Array<{ column: string; operator: string; value: string }>) => {
    setTableState((prev: any) => ({ ...prev, filters }))

    if (tableControlsRef.current.applyFilters) {
      tableControlsRef.current.applyFilters(filters)
    }
  }

  const handleSortChange = (sorts: Array<{ column: string; direction: 'asc' | 'desc' }>) => {
    setTableState((prev: any) => ({ ...prev, sorts }))

    if (tableControlsRef.current.applySorting) {
      tableControlsRef.current.applySorting(sorts)
    }
  }

  const handleSearchChange = (search: string) => {
    setTableState((prev: any) => ({ ...prev, search }))
    if (tableControlsRef.current.setGlobalFilter) {
      tableControlsRef.current.setGlobalFilter(search)
    }
  }

  const handleStateChange = useCallback((state: any) => {
    setTableState(state)
    if (state.headers) {
      const cols = state.headers.map((header: string) => ({
        id: header,
        isVisible: state.columnVisibility?.[header] !== false,
        type: state.columnTypes?.[header],
      }))
      setColumnsData(cols)
    }
    if (state.toggleColumn) {
      tableControlsRef.current.toggleColumn = state.toggleColumn
    }
    if (state.setRowRange) {
      tableControlsRef.current.setRowRange = state.setRowRange
    }
    if (state.setGlobalFilter) {
      tableControlsRef.current.setGlobalFilter = state.setGlobalFilter
    }
    if (state.applyFilters) {
      tableControlsRef.current.applyFilters = state.applyFilters
    }
    if (state.applySorting) {
      tableControlsRef.current.applySorting = state.applySorting
    }
    if (state.actions) {
      tableActionsRef.current = state.actions
    }
  }, [])

  const handleColumnVisibilityChange = useCallback((columnId: string, visible: boolean) => {
    if (tableControlsRef.current.toggleColumn) {
      tableControlsRef.current.toggleColumn(columnId, visible)
    }
  }, [])

  const handleRowRangeChange = useCallback((start: number, end: number) => {
    if (tableControlsRef.current.setRowRange) {
      tableControlsRef.current.setRowRange({ start, end })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <div className="text-lg font-semibold tracking-tight">v0 Data Grid</div>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground/60 hover:text-foreground hover:bg-accent">
                <Moon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground/60 hover:text-foreground hover:bg-accent">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Performance Section */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="lg:max-w-md">
            <h1 className="text-4xl font-bold capitalize mb-4">{activeDemo}</h1>
            <p className="text-muted-foreground">
              {demos.find(d => d.id === activeDemo)?.description}
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:flex-1 lg:max-w-3xl">
            {demos.map((demo) => (
              <Card
                key={demo.id}
                onClick={() => handleDemoChange(demo.id)}
                className={`p-4 cursor-pointer transition-all hover:border-foreground/50 border-2 ${activeDemo === demo.id
                  ? 'border-foreground bg-card'
                  : 'border-transparent bg-card hover:bg-accent'
                  }`}
              >
                <div className="aspect-video bg-muted rounded mb-2 flex items-center justify-center overflow-hidden relative">
                  {loading && activeDemo === demo.id ? (
                    <div className="text-xs text-muted-foreground">Loading...</div>
                  ) : (
                    <Image
                      src={demo.image || "/placeholder.svg"}
                      alt={`${demo.label} demo preview`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div
                  className={`font-medium ${activeDemo === demo.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                >
                  {demo.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Grid */}
        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="flex w-full min-w-0 flex-1 min-h-0">
            <div className="flex flex-1 min-w-0 min-h-0 flex-col">
              <Toolbar
                onToggleActions={() => setIsActionsOpen(!isActionsOpen)}
                isActionsOpen={isActionsOpen}
                columns={columnsData}
                totalColumns={tableState.totalColumns || 0}
                visibleColumns={tableState.visibleColumns || 0}
                totalRows={tableState.totalRows || 0}
                onColumnVisibilityChange={handleColumnVisibilityChange}
                onRowRangeChange={handleRowRangeChange}
                onViewChange={handleViewChange}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
                onSearchChange={handleSearchChange}
                tableActions={tableActionsRef.current}
                tableState={tableState}
              />

              <div ref={scrollContainerRef} className="flex-1 min-h-0 overflow-y-auto">
                {scrollContainerRef.current && (
                  <V0Table
                    key={tableKey}
                    onStateChange={handleStateChange}
                    scrollContainerRef={scrollContainerRef as React.RefObject<HTMLDivElement>}
                  />
                )}
              </div>
            </div>

            <ActionsSidebar isOpen={isActionsOpen} onClose={() => setIsActionsOpen(false)} />
          </div>
        </div>

      </main>
    </div>
  )
}
