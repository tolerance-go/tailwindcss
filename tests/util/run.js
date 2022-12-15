import path from 'path'
import postcss from 'postcss'
import tailwind from '../../src'
// 下面的代码会造成执行 test 疯狂打印 log，后续将 browser 测试单独抽出来
// import { tailwindcss } from '../../dist/index.browser'
// import fs from 'fs'

// tailwindcss.handleVol((vol) => {
//   vol.fromJSON({
//     '/css/preflight.css': fs.readFileSync(
//       path.join(process.cwd(), './src/css/preflight.css'),
//       'utf8'
//     ),
//   })
// })

export * from './strings'
export * from './defaults'

export let map = JSON.stringify({
  version: 3,
  file: null,
  sources: [],
  names: [],
  mappings: '',
})

// console.log('process.env.TEST_BROWSER', process.env.TEST_BROWSER)

export function run(input, config, plugin = tailwind) {
  let { currentTestName } = expect.getState()

  // if (process.env.TEST_BROWSER) {
  //   return tailwindcss.getRun({ from: `${path.resolve(__filename)}?test=${currentTestName}` })(
  //     input,
  //     config
  //   )
  // }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

export function runWithSourceMaps(input, config, plugin = tailwind) {
  let { currentTestName } = expect.getState()

  // if (process.env.TEST_BROWSER) {
  //   return tailwindcss.getRun({
  //     from: `${path.resolve(__filename)}?test=${currentTestName}`,
  //     map: {
  //       prev: map,
  //     },
  //   })(input, config)
  // }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
    map: {
      prev: map,
    },
  })
}
