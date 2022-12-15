import type { Volume } from 'memfs/lib/volume'
import type { Config } from './types/config'

type ConvertHTMLToTailwindcss = (
  html: string,
  input: string,
  config?: Partial<Config>
) => Promise<string>

type HandleVol = (callback: (vol: Volume) => void) => void

declare global {
  var tailwindcss: {
    convertHTMLToTailwindcss: ConvertHTMLToTailwindcss
    handleVol: HandleVol
  }
}
