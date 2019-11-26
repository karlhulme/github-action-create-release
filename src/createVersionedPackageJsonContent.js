const createVersionedPackageJsonContent = (packageJsonContent, version) => {
  const newContent = JSON.parse(JSON.stringify(packageJsonContent))
  newContent.version = version
  return newContent
}

module.exports = createVersionedPackageJsonContent
