// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return`![license](https://img.shields.io/badge/License-${license}-teal)
    `
  } else {
    return ''
  };

}

// Function that returns the license link
function renderLicenseLink(license) {
  if(license !== 'None') {
    return`- [License](#license)`
  } else {
    return ''
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if(license !== 'None') {
    return`## License
    ${license}`
  } else {
    return ''
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub Profile: https://github.com/${data.username}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
