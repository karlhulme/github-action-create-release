const uploadPackageJson = async (owner, repo, branchName, sha, content, createOrUploadFile) => {
  await createOrUploadFile({
    owner,
    repo,
    path: 'package.json',
    ref: branchName,
    sha,
    content: Buffer.from('new content').toString('base64'),
    message: '--ignore Updating version in package.json for release.'
  })
}

module.exports = uploadPackageJson
