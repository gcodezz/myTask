# MyTask



# App Details

Create a simple cross platform application (React Native) for <add details>

The app will consist of:

    └──Profile Screen

    └──Edit-Profile Screen


# Proposed Stack

JavaScript (React Native)


# Top-level directory layout

    📦myTask
        📦assets
            ┗ 📦fonts
                ┣ 📜Karla-Bold.ttf
                ┣ 📜Karla-Light.ttf
                ┣ 📜Karla-Medium.ttf
                ┗ 📜Karla-Regular.ttf
            ┗ 📦images
                ┗ 📜man.jpg
            ┣ 📜adaptive-icon.png
            ┣ 📜favicon.png
            ┣ 📜icon.png
            ┗ 📜splash.png
        📦components
            ┗ 📜Description.js
        📦constants
            ┗ 📜Colors.js
        📦screens
            ┣ 📜EditProfileScreen.js
            ┗ 📜ProfileScreen.js
        ┣ 📜App.js
        ┣ 📜app.json
        ┣ 📜appNavigator.js
        ┣ 📜babel.config.js
        ┣ 📜package.json
        ┣ 📜package-lock.json
        ┗ 📜README.md


## Assumptions
1. The Profile screen is the home screen, it consists of an header button(Edit) on top right of the screen to navigate to the edit screen.

2. For the font, Custom fonts which were downloaded from google-fonts were loaded and used in the app.

3. The Expo framework(react-native) was used.


# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/gcodezz/myTask.git
```

### Install all dependencies

Using yarn

```
yarn install
```

Using npm

```
npm install
```

### Start watching the file and changes

Using yarn

```
yarn run watch
```

Using npm

```
npm run watch
```

### Install Expo on your device using this link

Expo for Android

```
https://play.google.com/store/apps/details?id=host.exp.exponent
```

Expo for IOS

```
https://itunes.com/apps/exponent/
```
### Start the react native bundler to test project on your device

Using yarn

```
yarn start
```

Using expo

```
expo start
```            





