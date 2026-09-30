import { cva } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border border-transparent w-fit shrink-0 transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        accent: 'bg-accent text-accent-foreground',
        neutral: 'bg-neutral text-neutral-foreground',
        info: 'bg-info text-info-foreground',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warning text-warning-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        ghost: 'bg-muted text-foreground',
        outline: 'border-foreground/20 text-foreground',
      },
      size: {
        default: 'h-6 px-2.5 text-sm',
        sm: 'h-5 px-2 text-xs',
        lg: 'h-7 px-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
