const path = require('path')
const recursiveReaddir = require('recursive-readdir')
const mainPkg = require('../package')
const chalk = require('chalk')
const fs = require('fs')

const examplesFolder = path.relative(process.cwd(), 'examples')
const libName = mainPkg.name

recursiveReaddir(examplesFolder, ['node_modules'], (err, files) => {
  const examplesPkgPaths = files.filter(file => path.basename(file) === 'package.json')

  examplesPkgPaths.forEach(packagePath => {
    const packageFullPath = path.join(process.cwd(), packagePath)
    const pkg = require(packageFullPath)

    pkg.dependencies[libName] = `^${mainPkg.version}`

    console.log(chalk.blue(`Bumping up library version in ${packagePath}`))
    fs.writeFile(packageFullPath, JSON.stringify(pkg, null, 2), err => {
      if (err) {
        console.log(chalk.red(`Cannot bump library version in example ${packagePath}`))
        console.log(err)
      } else {
        console.log(chalk.green(`Example ${packagePath} now use latest version of ${libName}`))
      }
    })
  })
})
