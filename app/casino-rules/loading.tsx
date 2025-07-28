import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CasinoRulesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-charcoal-black via-brand-charcoal-black-secondary to-brand-charcoal-black-tertiary">
      {/* Header Skeleton */}
      <div className="relative bg-gradient-to-r from-brand-primary-green/20 to-brand-secondary-blue/20 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <Skeleton className="w-16 h-16 rounded-full mx-auto bg-brand-smoke-gray/20" />
            <Skeleton className="h-12 w-80 mx-auto bg-brand-smoke-gray/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-brand-smoke-gray/20" />
          </div>
        </div>
      </div>

      {/* Content Skeletons */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-brand-charcoal-black-secondary border-brand-smoke-gray/20">
              <CardHeader>
                <Skeleton className="h-8 w-64 bg-brand-smoke-gray/20" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full bg-brand-smoke-gray/20" />
                <Skeleton className="h-4 w-3/4 bg-brand-smoke-gray/20" />
                <Skeleton className="h-4 w-1/2 bg-brand-smoke-gray/20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
