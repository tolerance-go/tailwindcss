import tailwindcss from './index'
import postcss from 'postcss'

import { vol } from 'memfs'

vol.fromJSON({
  '/css/preflight.css': '',
})

const convertHTMLToTailwindcss = (html, input, config) => {
  return postcss(
    tailwindcss({
      ...config,
      content: [
        {
          raw: html,
        },
      ],
    })
  )
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

export default convertHTMLToTailwindcss
