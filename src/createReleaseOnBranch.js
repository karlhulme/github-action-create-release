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
