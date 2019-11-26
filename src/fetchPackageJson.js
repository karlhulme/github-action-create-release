const fetchPackageJson = async (owner, repo, branchName, getContents) => {
  const contentsResult = await getContents({ owner, repo, path: 'package.json', ref: branchName })
  console.log(JSON.stringify(contentsResult.data, null, 2))
  return {
    sha: contentsResult.data.sha,
    content: JSON.parse(Buffer.from(contentsResult.data.content, 'base64').toString('utf8'))
  }
}

module.exports = fetchPackageJson
