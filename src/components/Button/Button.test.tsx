import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /Click me/i })).toBeInTheDocument()
  })

  it('applies the default variant styles', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-900 text-white')
  })

  it('applies the destructive variant styles', () => {
    render(<Button variant="destructive">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-red-500 text-white')
  })

  it('applies the outline variant styles', () => {
    render(<Button variant="outline">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('border border-gray-200 bg-transparent')
  })

  it('applies the subtle variant styles', () => {
    render(<Button variant="subtle">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-100 text-gray-900')
  })

  it('applies the ghost variant styles', () => {
    render(<Button variant="ghost">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent')
  })

  it('applies the link variant styles', () => {
    render(<Button variant="link">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent underline-offset-4')
  })

  it('applies the small size styles', () => {
    render(<Button size="sm">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-9 px-2')
  })

  it('applies the large size styles', () => {
    render(<Button size="lg">Click me</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-11 px-8')
  })
})
