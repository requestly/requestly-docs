<quote>These docs are now being managed separately through notion. You can view the updated docs at https://developers.requestly.io </quote>

<p align="center"><img src="https://user-images.githubusercontent.com/16779465/194505910-b6a7be70-df20-4b1a-9730-06a48cdd75ac.png" alt="Requestly Logo" width="50%"/></p>

<h3 align="center"></h3>

<p align="center">
    Requestly's documentation. Built with Docusauraus
    <br />
    <a href="https://docs.requestly.io"><strong>Explore the docs</strong></a>
</p>

## Getting Started

### Prerequisites
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)


### Installation
- Clone repo
```sh
git clone https://github.com/requestly/requestly-docs.git
```

- Install npm packages
```sh
npm install
```

- Run the app
```sh
npm start
```

## Writing Documentation

### Documentation Structure
```
- static
    - img
        - docs : images for docs
- docs
    - browser-extension
            - chrome : Chrome specific documentation
            - firefox : Firefox specific documentation
            - edge : Edge specific documentation
            - brave : Brave specific documentation
            - opera : Opera specific documentation
            - safari : Safari specific documentation
            - common : Common files for all the browser-extension platforms
        - desktop-app
            - mac : MacOS specific documentation
            - linux : Linux specific documentation
            - windows : Windows specific documentation
            - common : Common files for all the desktop-app platforms
        - common : Common files for browser-extension and desktop app
        - mocks
        - session-recording
```

## Deployment
Deployments are automatically triggered when there is new push to master

