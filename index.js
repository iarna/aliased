'use strict'
exports.register = register

const path = require('path')
const fs = require('fs')

const prequire = module.__proto__.require
module.__proto__.require = function (name) {
  if (global.aliases[name]) name = global.aliases[name]
  return prequire.call(this, name)
}
register()

function exists (fn) {
  try {
    fs.statSync(fn)
    return true
  } catch (_) {
    return false
  }
}

function register () {
  let pkgdir = module.parent.dirname || process.cwd()
  while (pkgdir !== '/' && !exists(`${pkgdir}/package.json`)) {
    pkgdir = path.resolve(pkgdir, '..')
  }
  const pkg = JSON.parse(fs.readFileSync(`${pkgdir}/package.json`))
  global.aliases = Object.assign(global.aliases || {}, pkg.aliases)

}
