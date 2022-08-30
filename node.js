const fs = require("fs")
const path = require("path")
const packageJson = (index) => `
{
  "name": "github-ci-test-${index}",
  "version": "1.0.10-bate-39",
  "description": "> TODO: description",
  "author": "SunLxy <1011771396@qq.com>",
  "homepage": "https://github.com/SunLxy/github-ci-test#readme",
  "license": "ISC",
  "main": "lib/${index}.js",
  "directories": {
    "lib": "lib"
  },
  "files": [
    "lib"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/SunLxy/github-ci-test.git"
  },
  "scripts": {
    "test": "echo 'Error: run tests from root' && exit 1"
  },
  "bugs": {
    "url": "https://github.com/SunLxy/github-ci-test/issues"
  }
}
`

const mdText = (index) => `
# \`github-ci-test-${index}\`

> TODO: description

## Usage

\`\`\`
const a = require('github-ci-test-${index}');

// TODO: DEMONSTRATE API
\`\`\`

`

Array.from({ length: 100 }).forEach((_, index) => {
  const dir = `demo${index + 1}`
  fs.mkdirSync(path.join(process.cwd(), "packages", dir))
  fs.mkdirSync(path.join(process.cwd(), "packages", dir, "lib"))
  const json = packageJson(dir)
  const README = mdText(dir)
  fs.writeFileSync(path.join(process.cwd(), "packages", dir, "package.json"), json, { flag: "w+", encoding: "utf-8" })
  fs.writeFileSync(path.join(process.cwd(), "packages", dir, "README.md"), README, { flag: "w+", encoding: "utf-8" })
})
