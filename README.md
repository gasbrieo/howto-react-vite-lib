# HowTo.React.Vite.Lib

![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/gasbrieo_howto-react-vite-lib?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)
![Sonar Coverage](https://img.shields.io/sonar/coverage/gasbrieo_howto-react-vite-lib?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/gasbrieo/howto-react-vite-lib?style=for-the-badge)
![GitHub Release](https://img.shields.io/github/v/release/gasbrieo/howto-react-vite-lib?style=for-the-badge)

## Overview

**HowTo.NET.Lib** serves as a template for creating and publishing a React library using Vite, with CI/CD workflows for SonarCloud analysis and NPM package publishing.

## Features

- GitHub Actions Workflow

  - Static analysis with SonarCloud
  - Automated publishing to NPM

- Basic React + Vite Project Structure
  - Sample library component
  - Prettier + ESLint
  - Vitest
  - Storybook

## Getting Started

### Prerequisites

- A [NPM](https://www.npmjs.com) account.
- A [SonarCloud](https://sonarcloud.io/) account.

### Setup

1. Create a new project using the template:

```
npx degit gasbrieo/howto-react-vite-lib my-lib-name
```

This will generate a new project with the specified name and pre-configured settings.

2. Update the following Package Info:

```
"author": "Gabriel (@gasbrieo)",
"homepage": "https://github.com/gasbrieo/howto-react-vite-lib#readme",
"bugs": {
    "url": "https://github.com/gasbrieo/howto-react-vite-lib/issues"
},
"repository": {
    "type": "git",
    "url": "git+https://github.com/gasbrieo/howto-react-vite-lib.git"
},
```

3. Update the following SonarCloud keys in the workflow file `.github/workflows/build-and-analyze.yml`:

```
sonar-scanner \
    -Dsonar.projectKey=gasbrieo_howto-react-vite-lib \
    -Dsonar.projectName=howto-react-vite-lib \
    -Dsonar.organization=gasbrieo \
```

## Workflows

### SonarCloud Analysis

The GitHub Action workflow `build-and-analyze` runs SonarCloud Analysis on each push to ensure code quality.

To enable SonarCloud:

1. Create a [SonarCloud](https://sonarcloud.io/) account and link your repository.
2. Add `SONAR_TOKEN` as a GitHub secret.
3. The workflow will automatically analyze your code on each push.

### NPM Publishing

The GitHub Action workflow `publish` publishes the package to NPM when a new release is created.

To enable NPM publishing:

1. Generate an API key on [NPM](https://www.npmjs.com).
2. Add `NPM_TOKEN` as a GitHub secret.
3. The package version is automatically determined based on the release tag in the format `vX.Y.Z`.
4. When you create a new GitHub release, the package will be published automatically.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
