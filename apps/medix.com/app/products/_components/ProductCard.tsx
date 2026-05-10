import { Card, CardContent, CardHeader, CardTitle } from '@medix/ui'

const statusStyles = {
  active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  closed: 'bg-muted text-muted-foreground border-transparent',
  draft: 'bg-amber-50 text-amber-700 border-amber-200',
} as const

const statusLabels = {
  active: 'Active',
  closed: 'Closed',
  draft: 'Draft',
} as const

type Status = keyof typeof statusStyles

type ProductCardProps = {
  title: string
  description: string
  status: Status
}

export function ProductCard({
  title,
  description,
  status,
}: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <span
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </CardContent>
    </Card>
  )
}
