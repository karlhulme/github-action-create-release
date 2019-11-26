/* eslint-env jest */
const createReleaseOnBranch = require('./createReleaseOnBranch')

test('Compile release notes for just fixes.', async () => {
  const createRelease = jest.fn(async () => ({}))
  await expect(createReleaseOnBranch('boss', 'testRepo', 'master', '1.2.3', '## Release Notes', createRelease)).resolves.not.toThrow()
  expect(createRelease.mock.calls.length).toEqual(1)
})
