const fetchPackageJson = require('./fetchPackageJson')
const createVersionedPackageJsonContent = require('./createVersionedPackageJsonContent')
const uploadPackageJson = require('./uploadPackageJson')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ branchName, releaseVersion, releaseNotes, owner, repo, getContents, createOrUpdateFile }) => {
  const packageJson = await fetchPackageJson(owner, repo, branchName, getContents)
  const newContent = createVersionedPackageJsonContent(packageJson.content, releaseVersion)
  await uploadPackageJson(owner, repo, branchName, packageJson.sha, newContent, createOrUpdateFile)

  // and then create the release with tag and release notes

  return {}
}

module.exports = run
