const core = require('@actions/core')
const { GitHub, context } = require('@actions/github')

const run = require('./run')

/**
 * The entry point to the Github action.
 */
const entryPoint = async () => {
  const github = new GitHub(process.env.GITHUB_TOKEN)
  const { owner, repo } = context.repo

  const input = {
    branchName: core.getInput('branchName'),
    releaseVersion: core.getInput('releaseVersion'),
    releaseNotes: core.getInput('releaseNotes'),
    owner,
    repo,
    getContents: github.repos.getContents,
    createOrUpdateFile: github.repos.createOrUpdateFile,
    createRelease: github.repos.createRelease
  }

  console.log(`Inputs\n${JSON.stringify(input, null, 2)}\n`)

  const output = await run(input)

  console.log(`Output\n${JSON.stringify(output, null, 2)}\n`)

  for (const propName in output) {
    core.setOutput(propName, output[propName])
  }
}

entryPoint()
