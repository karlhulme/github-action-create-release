/**
 * Creates a new package.json object using the given object
 * as a starting point and replacing the version with the
 * given version number.
 * @param {Object} packageJsonContent A packge.json object.
 * @param {String} version A version in the major.minor.patch format.
 */
const createVersionedPackageJsonContent = (packageJsonContent, version) => {
  const newContent = JSON.parse(JSON.stringify(packageJsonContent))
  newContent.version = version
  return newContent
}

module.exports = createVersionedPackageJsonContent
