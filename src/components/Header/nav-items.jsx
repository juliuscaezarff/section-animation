import { cn } from '@/lib/utils'
import Link from 'next/link'

export function NavLink({ children, className, href, active, ...props }) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-base font-general font-semibold rounded-md px-3 py-2',
        active && 'bg-secondary',
        className
      ])}
      {...props}
    >
      {children}
    </Link>
  )
}
