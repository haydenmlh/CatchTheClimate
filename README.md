<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">WeatherMan</h3>

  <p align="center">
    WeatherMan is a React Native app to search for the weather in any city / postcode in the world using the OpenWeather API. The current weather and a 7 day forecast is displayed for the searched city.
    <br />
  </p>
</div>

## Getting Started

### Prerequisites

1. Refer to [React Native documentation](https://reactnative.dev/docs/environment-setup) for setting up the development environment.


### Installation

#### Android

1. Get a free API key by registering an account at [https://openweathermap.org/api](https://openweathermap.org/api)

2. Clone the repo
  ```sh
  git clone https://github.com/haydenmlh/WeatherMan.git
  ```

3. Install NPM packages
  ```sh
  npm install
  ```

4. Enter your API key in the file `/src/types/env.d.ts` as follows
  ```js
  declare module '@env' {
  export const API_KEY = 'ENTER YOUR API';
  }
  ```


5. Open an Android emulator or connect an Android phone to the development machine with USB debugging enabled.

6. In the root directory of the project, run in a terminal:

  ```
  npx react-native run-android
  ```

## Roadmap

- [x] Search Function
- [x] Display Current Weather and 7-day Forecast
- [ ] Link Welcome splash screen and info display screen
- [ ] Add Offline indicator
- [ ] Add Settings screen for changing units and theme
- [ ] Add multiple cities feature

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD 3-Clause](https://choosealicense.com/licenses/bsd-3-clause/)