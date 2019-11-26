/* eslint-env jest */
const createReleaseOnBranch = require('./createReleaseOnBranch')

test('Create a release on a branch.', async () => {
  const createRelease = jest.fn(async () => ({}))
  await expect(createReleaseOnBranch('boss', 'testRepo', 'master', '1.2.3', '## Release Notes', createRelease)).resolves.not.toThrow()
  expect(createRelease.mock.calls.length).toEqual(1)
})
