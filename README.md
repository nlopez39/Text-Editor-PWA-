# Text-Editor-PWA-

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)

## Description

The app will be a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To create this application, I used:

IndexedDB (via the idb package) as a database
Webpack to bundle front-end code
Workbox to create a service worker that caches static assets
And, it has been deployed on Render


### Demo

https://text-editor-pwa-5j9j.onrender.com/

## Installation

To install this project you can either perform a `git clone` in your command-line or simply fork your own copy into your Github.

## Usage

To use this project,

1.  Go to the cloned files, then type `npm i` in your terminal to install the appropriate dependencies. Be sure you’re in the correct location in your terminal first!
2.  Bundle the front-end code by entering `npm run build`.
3.  Start the server by entering `npm run start`
4. Go to the port on your local host
5. Click the "Install" button.

   You can also just use the live application [here](https://text-editor-pwa-5j9j.onrender.com/)


## Credits

https://webpack.js.org/plugins/mini-css-extract-plugin/#getting-started


## Tests

Feel free to play around with the code and use your own data.

## License

![Static Badge](https://img.shields.io/badge/MIT-blue)
