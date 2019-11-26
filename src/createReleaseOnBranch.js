/**
 * Creates a release on a branch.
 * @param {String} owner The owner of the repo.
 * @param {String} repo The name of the repo.
 * @param {String} branchName The name of the branch.
 * @param {String} version A version in the major.minor.patch format.
 * @param {String} releaseNotes A formatted markdown string of release notes.
 * @param {Function} createRelease A function that creates a release on github.
 */
const createReleaseOnBranch = async (owner, repo, branchName, version, releaseNotes, createRelease) => {
  await createRelease({
    owner,
    repo,
    tag_name: `v${version}`,
    target_commitish: branchName,
    name: `v${version}`,
    body: releaseNotes
  })
}

module.exports = createReleaseOnBranch
