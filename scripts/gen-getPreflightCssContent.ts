import fs from 'fs-extra'
import path from 'path'
import invariant from 'tiny-invariant'

const filePath = path.join(__dirname, '../src/browser-getPreflightCssContent.js')
const cssPath = path.join(__dirname, '../src/css/preflight.css')

invariant(fs.existsSync(cssPath), `${cssPath} not find.`)

fs.ensureFileSync(filePath)
fs.writeFileSync(
   filePath,
   `export const getPreflightCssContent = () => \`
${fs.readFileSync(cssPath, { encoding: 'utf-8' }).replace(/`/g, '\\`')}
\``,
   { encoding: 'utf-8' },
)
