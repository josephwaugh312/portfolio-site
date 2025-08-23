import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'button'
}

export function Skeleton({ 
  className, 
  variant = 'default',
  ...props 
}: SkeletonProps) {
  const variants = {
    default: '',
    card: 'h-64 w-full rounded-lg',
    text: 'h-4 w-full rounded',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24 rounded-lg',
  }
  
  return (
    <div
      className={cn(
        'animate-pulse bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%]',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="space-y-3 rounded-lg border border-border p-6">
      <Skeleton variant="text" className="h-6 w-3/4" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="button" className="h-8 w-16" />
        <Skeleton variant="button" className="h-8 w-16" />
        <Skeleton variant="button" className="h-8 w-16" />
      </div>
    </div>
  )
}

export function SkeletonProjectCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <Skeleton className="aspect-video w-full" />
      <div className="space-y-3 p-6">
        <Skeleton variant="text" className="h-6 w-3/4" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          <Skeleton variant="button" className="h-6 w-14" />
          <Skeleton variant="button" className="h-6 w-14" />
          <Skeleton variant="button" className="h-6 w-14" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonTimeline() {
  return (
    <div className="relative space-y-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="relative flex flex-col items-center">
            <Skeleton className="h-12 w-12 rounded-full" />
            {i < 2 && <Skeleton className="mt-2 h-full w-0.5" />}
          </div>
          <div className="flex-1 space-y-2 pb-8">
            <Skeleton variant="text" className="h-5 w-32" />
            <Skeleton variant="text" className="h-6 w-48" />
            <Skeleton variant="text" className="h-4 w-full" />
            <Skeleton variant="text" className="h-4 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkeletonSkills() {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between">
            <Skeleton variant="text" className="h-4 w-24" />
            <Skeleton variant="text" className="h-4 w-12" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      ))}
    </div>
  )
}