const fetchPackageJson = require('./fetchPackageJson')
const createVersionedPackageJsonContent = require('./createVersionedPackageJsonContent')
const uploadPackageJson = require('./uploadPackageJson')
const createReleaseOnBranch = require('./createReleaseOnBranch')

/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ branchName, releaseVersion, releaseNotes, owner, repo, getContents, createOrUpdateFile, createRelease }) => {
  try {
    const packageJson = await fetchPackageJson(owner, repo, branchName, getContents)
    const newContent = createVersionedPackageJsonContent(packageJson.content, releaseVersion)
    await uploadPackageJson(owner, repo, branchName, packageJson.sha, newContent, createOrUpdateFile)
    await createReleaseOnBranch(owner, repo, branchName, releaseVersion, releaseNotes, createRelease)

    return {
      didRelease: 'yes'
    }
  } catch (err) {
    return {
      didRelease: 'no',
      releaseFailureReason: err.toString()
    }
  }
}

module.exports = run
