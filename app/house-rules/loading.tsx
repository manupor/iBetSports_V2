export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-charcoal-black">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-brand-smoke-gray/20 rounded-full mx-auto mb-6"></div>
            <div className="h-12 bg-brand-smoke-gray/20 rounded-lg w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-brand-smoke-gray/20 rounded-lg w-96 mx-auto"></div>
          </div>

          {/* Content skeleton */}
          <div className="space-y-8">
            <div className="h-32 bg-brand-smoke-gray/20 rounded-lg"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-48 bg-brand-smoke-gray/20 rounded-lg"></div>
              <div className="h-48 bg-brand-smoke-gray/20 rounded-lg"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="h-64 bg-brand-smoke-gray/20 rounded-lg"></div>
              <div className="h-64 bg-brand-smoke-gray/20 rounded-lg"></div>
              <div className="h-64 bg-brand-smoke-gray/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
