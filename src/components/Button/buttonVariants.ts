import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-gray-400',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-gray-200 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800',
        subtle: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100',
        ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700',
        link: 'bg-transparent underline-offset-4 hover:underline text-gray-900 dark:text-gray-100 hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
