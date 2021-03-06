/* eslint-env jest */
const fetchPackageJson = require('./fetchPackageJson')

const getContents = async () => ({
  data: {
    name: 'package.json',
    path: 'package.json',
    sha: '67bb81cdd491639aa3d696ef60921f97648c29f4',
    size: 295,
    url: 'https://api.github.com/repos/karlhulme/zzz/contents/package.json?ref=master',
    html_url: 'https://github.com/karlhulme/zzz/blob/master/package.json',
    git_url: 'https://api.github.com/repos/karlhulme/zzz/git/blobs/67bb81cdd491639aa3d696ef60921f97648c29f4',
    download_url: 'https://raw.githubusercontent.com/karlhulme/zzz/master/package.json',
    type: 'file',
    content: 'ewogICJuYW1lIjogInp6eiIsCiAgInZlcnNpb24iOiAiMS4wLjAiLAogICJk\nZXNjcmlwdGlvbiI6ICJBIHJlcG9zaXRvcnkgZm9yIHRlc3RzIHRoYXQgYXJl\nIGdpdCByZWxhdGVkLiIsCiAgIm1haW4iOiAiaW5kZXguanMiLAogICJyZXBv\nc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0\nK2h0dHBzOi8vZ2l0aHViLmNvbS9rYXJsaHVsbWUvenp6LmdpdCIKICB9LAog\nICJhdXRob3IiOiAiS2FybCBIdWxtZSA8a2FybGh1bG1lQGhvdG1haWwuY29t\nPiIsCiAgImxpY2Vuc2UiOiAiTUlUIgp9Cg==\n',
    encoding: 'base64',
    _links: {
      self: 'https://api.github.com/repos/karlhulme/zzz/contents/package.json?ref=master',
      git: 'https://api.github.com/repos/karlhulme/zzz/git/blobs/67bb81cdd491639aa3d696ef60921f97648c29f4',
      html: 'https://github.com/karlhulme/zzz/blob/master/package.json'
    }
  }
})

test('Fetch a package.json object.', async () => {
  const packageJson = await fetchPackageJson('boss', 'testRepo', 'master', getContents)
  expect(packageJson).toHaveProperty('sha', '67bb81cdd491639aa3d696ef60921f97648c29f4')
  expect(packageJson).toHaveProperty('content')
  expect(packageJson.content).toHaveProperty('name', 'zzz')
  expect(packageJson.content).toHaveProperty('version', '1.0.0')
})
