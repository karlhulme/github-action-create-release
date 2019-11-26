/* eslint-env jest */
const createVersionedPackageJsonContent = require('./createVersionedPackageJsonContent')

const createPackageJsonContent = () => ({
  name: 'testRepo',
  version: '0.0.0',
  other: 'fields'
})

test('Compile release notes for just fixes.', async () => {
  expect(createVersionedPackageJsonContent(createPackageJsonContent(), '1.2.3')).toEqual({
    name: 'testRepo',
    version: '1.2.3',
    other: 'fields'
  })
})
