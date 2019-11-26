/**
 * Runs the Github action and returns a keyed object with values for output.
 * @param {Object} props The input properties to the github action.
 */
const run = async ({ branchName, releaseVersion, releaseNotes, owner, repo, getContents, createOrUpdateFile }) => {
  console.log('made it into the action')
}

module.exports = run
