/**
 * Fetches the contents of the package.json file from
 * a repo and returns it as a parsed JSON object.
 * @param {String} owner The owner of a the repo.
 * @param {String} repo The name of the repo.
 * @param {String} branchName The name of a branch.
 * @param {Function} getContents A function that retrieves file contents from github.
 */
const fetchPackageJson = async (owner, repo, branchName, getContents) => {
  const contentsResult = await getContents({ owner, repo, path: 'package.json', ref: branchName })

  return {
    sha: contentsResult.data.sha,
    content: JSON.parse(Buffer.from(contentsResult.data.content, 'base64').toString('utf8'))
  }
}

module.exports = fetchPackageJson
