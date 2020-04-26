function generateMarkdown(data) {
  return `
# ${data.projectName}

* ${data.description}

## Table of Contents

* [Installation](#Installation)
* [Packages Needed for Use](#Packages%20Needed%20for%20Use)
* [Necessary Licensing](#Necessary%20Licensing)
* [Contributions](#Contributions)
* [How to Test](#How%20to%20Test)

## Installation
* ${data.dependencies}

## Packages Needed for Use
* ${data.usage}

## Necessary Licensing
\`\`\`
* ${data.license}
\`\`\`

## Contributions
* ${data.contributing}
  
## How to Test
\`\`\`
* ${data.tests}
\`\`\`
`;
}

module.exports = generateMarkdown;
