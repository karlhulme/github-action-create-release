/**
 * Uploads a replacement package.json file to github.
 * @param {String} owner The owner of a the repo.
 * @param {String} repo The name of the repo.
 * @param {String} branchName The name of a branch.
 * @param {String} sha The checksum of the previously downloaded package.json file.
 * @param {String} content The a package.json object.
 * @param {Function} createOrUploadFile A function that uploads files to github.
 */
const uploadPackageJson = async (owner, repo, branchName, sha, content, createOrUploadFile) => {
  await createOrUploadFile({
    owner,
    repo,
    path: 'package.json',
    branch: branchName,
    sha,
    content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
    message: 'Updating version in package.json for release.'
  })
}

module.exports = uploadPackageJson
