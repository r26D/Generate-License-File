# Generate License File [![Build Status](https://dev.azure.com/tobysmith568/Generate-License-File/_apis/build/status/tobysmith568.Generate-License-File?branchName=master)](https://dev.azure.com/tobysmith568/Generate-License-File/_build/latest?definitionId=15&branchName=master)

This CLI generates a text file containing all the licences for your production 3rd-party dependencies.

## Installation and Usage (CLI)
```
$ npm install generate-license-file -g

$ generate-license-file --input package.json --output 3rd-party-licenses.txt

$ generate-license-file --json --input package.json --output 3rd-party-licenses.json
```
- Input: The package.json for the project you want to target
- Output: The file to be created
- Json: If passed will generate it in JSON format instead of plain text

If either flag is omitted the CLI will prompt you for the inputs.

If you don't supply an input file, and the CLI is able to detect a package.json in the folder you run the command from, the it will allow you to run the command using the detected file.

## Installation and Usage (Programmatic use)
```
$ npm install generate-license-file
```
```js
const generateLicenseFile = require("generate-license-file");

// get licenses for the current project (assuming this file is on the same level as the package.json)
generateLicenseFile.getProjectLicenses("./")
.then((licenses) => {
  // do stuff with licenses...
})
.catch((error) => {
  // do stuff with error...
});
```
```ts
import * as generateLicenseFile from "generate-license-file";

const licenses = await generateLicenseFile.getProjectLicenses("./");
```
