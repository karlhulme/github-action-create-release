/* eslint-env jest */
const uploadPackageJson = require('./uploadPackageJson')

test('Upload a package.json object.', async () => {
  const createOrUploadFile = jest.fn(async () => ({}))
  await expect(uploadPackageJson('boss', 'testRepo', 'master', '67bb81cdd491639aa3d696ef60921f97648c29f4', 'base64filecontent', createOrUploadFile)).resolves.not.toThrow()
  expect(createOrUploadFile.mock.calls.length).toEqual(1)
})
