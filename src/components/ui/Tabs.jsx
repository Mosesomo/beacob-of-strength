import * as React from "react"

// Utility function to combine classNames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const TabsContext = React.createContext({
  selectedTab: "",
  setSelectedTab: () => {},
})

const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }) => {
  const [selectedTab, setSelectedTab] = React.useState(value || defaultValue || "")
  
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value)
    }
  }, [value])

  const handleTabChange = React.useCallback((newValue) => {
    if (value === undefined) {
      setSelectedTab(newValue)
    }
    onValueChange?.(newValue)
  }, [onValueChange, value])

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-flex h-14 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500", className)}
    role="tablist"
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext)
  const isActive = selectedTab === value

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm",
        className
      )}
      onClick={() => setSelectedTab(value)}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const { selectedTab } = React.useContext(TabsContext)
  const isActive = selectedTab === value

  if (!isActive) return null

  return (
    <div
      ref={ref}
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }