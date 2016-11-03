# Ionic boilerplate with Webpack and ES6

### Instruction

Creating hybrid, mobile applications with technologies:

- Ionic framework
- Cordova
- AngularJS
- SASS
- Webpack
- ES6


### Installation

```
$ npm install
```

### Run

```
# Web dev with live reload
# Open browser on http://localhost:8080
$ npm run dev

# Android
$ npm run runAndroid

# iOS
$ npm run runIos
```

### Folder Structure

`app`

- Development folder
- Contain all `AngularJS` code, `scss`, `img`, etc.
- Webpack serve from this folder, including live reload

`www`

- Webpack build output to this folder
- Ionic will serve this folder
- Ionic will build and run on this folder
