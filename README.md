# A Github Action for Creating a Release

Plug this into a Github workflow wherever the branch being targetted is known.

The package.json will be updated with a new version number and then the repo tagged with a new release.

The https://github.com/karlhulme/github-action-prepare-release action can be used to get the inputs required for this action.

## Inputs

* **branchName** - The name of the branch that is being targetted for release.
* **releaseVersion** - The version of the new release in major.minor.patch format.
* **releaseNotes** - A formatted markdown block containing the commit comments since the last release.

## Outputs

* None

## Example

```yml
name: Release

on:
  issue_comment:
    types: [created]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Prepare Release
        uses: karlhulme/github-action-create-release@master
        with:
          releaseBranch: master
          releaseVersion: '1.2.3'
          releaseNotes: '## Breaking Changes\nChanged the interface'
        env:
          GITHUB_TOKEN: ${{ github.token }}
```

## Development

You must run `npm run build` to create the distribution file.  Do this before committing changes.
