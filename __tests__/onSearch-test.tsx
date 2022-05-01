/**
 * @format
 */

import 'react-native';
import React from 'react';

import onSearch from '../src/api/onSearch';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let text = "Toronto"
  let weatherData: Map<any, any> = new Map();
  let setWeatherData = (mp: Map<any, any>) => (weatherData = mp);
  let apiKey = "wrong";
  let check = new Map([["status", "unauthorized"]]);
  onSearch(text, setWeatherData, apiKey);
  expect(weatherData).toBe(check);
});
