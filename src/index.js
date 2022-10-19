const pacote = require('pacote')
const path = require("path")
const libpub = require('libnpmpublish')

const dadsa = path.join(__dirname, "../packages/demo1")

const run = async () => {
  const manifest = await pacote.manifest(dadsa)
  const tarData = await pacote.tarball(dadsa)
  console.log(manifest, tarData)
  await libpub.publish(manifest, tarData, {
    npmVersion: 'github-ci-test-demo1@1.0.10-bate-39',
    defaultTag: "bate",
    token: "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"
  })
}
run()
