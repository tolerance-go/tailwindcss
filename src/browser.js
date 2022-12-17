import tailwindcss from './base'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { getPreflightCssContent } from './browser-getPreflightCssContent'

import { vol } from 'memfs'

vol.fromJSON({
  '/css/preflight.css': getPreflightCssContent(),
})

export const convertHTMLToTailwindcss = (html, input, config) => {
  return postcss([
    tailwindcss({
      ...config,
      content: [
        {
          raw: html,
        },
      ],
    }),
    autoprefixer(),
  ])
    .process(input, { from: undefined })
    .then((result) => result.css)
}

export const getRun = (options) =>
  function run(input, config, plugin = tailwindcss) {
    return postcss(plugin(config)).process(input, options)
  }

export const handleVol = (callback) => {
  callback(vol)
}
