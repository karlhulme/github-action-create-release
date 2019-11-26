const uploadPackageJson = async (owner, repo, branchName, sha, content, createOrUploadFile) => {
  await createOrUploadFile({
    owner,
    repo,
    path: 'package.json',
    branch: branchName,
    sha,
    content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
    message: '--ignore Updating version in package.json for release.'
  })
}

module.exports = uploadPackageJson
