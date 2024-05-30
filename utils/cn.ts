import { type ClassValue, clsx } from 'clsx'

export const cn = (...css: ClassValue[]) => clsx(css)
