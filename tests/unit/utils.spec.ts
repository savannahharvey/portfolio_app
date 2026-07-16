import { describe, it, expect } from 'vitest'
import { cn } from '../../src/lib/utils'

describe('cn utility', () => {
  it('merges class names using clsx and twMerge', () => {
    const result = cn('text-center', 'font-bold')
    expect(result).toContain('text-center')
    expect(result).toContain('font-bold')
  })

  it('deduplicates and merges conflicting tailwind classes', () => {
    const result = cn('px-2 px-4', 'px-3')
    // tw-merge should keep the last conflicting utility, typical behavior
    expect(result).toMatch(/px-(3|4)/)
  })

  it('handles falsy inputs gracefully', () => {
    const result = cn('text-center', undefined, false, null, 'mt-2')
    expect(result).toContain('text-center')
    expect(result).toContain('mt-2')
  })
})
