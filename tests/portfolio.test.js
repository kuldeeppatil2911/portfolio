import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import assert from 'node:assert/strict'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (file) => readFileSync(resolve(root, file), 'utf8')

test('production build completes successfully', () => {
  const command = process.platform === 'win32' ? process.env.ComSpec : 'npm'
  const args = process.platform === 'win32' ? ['/d', '/s', '/c', 'npm run build'] : ['run', 'build']

  execFileSync(command, args, {
    cwd: root,
    stdio: 'pipe',
  })

  assert.ok(existsSync(resolve(root, 'dist/index.html')))
})

test('portfolio exposes its required interactive sections', () => {
  const app = read('src/App.jsx')

  for (const section of ['about', 'experience', 'projects', 'systems', 'skills', 'achievements', 'contact']) {
    assert.match(app, new RegExp(`id=\\"${section}\\"`))
  }

  for (const interaction of ['setSelected', 'runCommand', 'scrollTo', 'setHoveredTech']) {
    assert.match(app, new RegExp(interaction))
  }
})

test('local assets and deployment metadata are present', () => {
  assert.ok(existsSync(resolve(root, 'src/assets/hero.png')))
  assert.ok(existsSync(resolve(root, 'public/favicon.svg')))
  assert.equal(read('vite.config.js').includes("base: '/'") , true)
  assert.match(read('index.html'), /Kuldeep Patil \\| Software Engineer/)
})

test('architecture documentation matches the frontend-only scope', () => {
  const architecture = read('docs/ARCHITECTURE.md')

  assert.match(architecture, /There is no API in this repository/)
  assert.match(architecture, /No database is connected/)
  assert.match(architecture, /mermaid/)
})

test('repository does not track common secret files', () => {
  const gitignore = read('.gitignore')

  for (const ignoredPath of ['node_modules', 'dist', '*.local']) {
    const escapedPath = ignoredPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    assert.match(gitignore, new RegExp(escapedPath, 'i'))
  }
})
