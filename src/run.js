/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ branchName, releaseVersion, releaseNotes, owner, repo, getContents, createOrUpdateFile }) => {
  console.log('made it into the action - trying with refs')

  const contentsResult = await getContents({ owner, repo, path: 'package.json', ref: 'refs/heads/' + branchName })

  console.log(JSON.stringify(contentsResult.data))

  return {}
}

module.exports = run
