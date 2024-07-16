// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(license !== "NONE"){
    return `![github licence](https://img.shields.io/badge/licence-${license.replace(' ','_')}-pink.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  ### Table of Contents

  * [Description](#description)

 * [Usage](#usage)
   * [Instalation](#instalation)
   *   [Problem](#problem)
   *   [Test](#test)
   *   [Contributors](#contributors)
   *   [Questions](#questions)


  ## Description

  ${data.description}

  ## Instalation

  ${data.instalation}

  ## Problem

  ${data.problem}

  ## Test

  ${data.test}

  ## Contributors 

  ${data.contributors}

  ## Questions

  if you have any questions email me ${data.email} check out more of my code@ ${data.github}

`;
}

module.exports = generateMarkdown;
