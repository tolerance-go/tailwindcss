import type { Volume } from 'memfs/lib/volume'
import type { Config } from './types/config'

declare const convertHTMLToTailwindcss: (
  html: string,
  input: string,
  config?: Partial<Config>
) => Promise<string>

declare const handleVol: (callback: (vol: Volume) => void) => void

export { convertHTMLToTailwindcss, handleVol }
