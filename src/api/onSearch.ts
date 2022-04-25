// import { API_KEY } from '@env';

const API_KEY = "wrong"


const onSearch = async (text: string, sendWeatherData) => {
  console.log(text);
  
  let curWeatherMap: number | Map<string, any>;

  if (cityOrZipcode(text)) {
    await getCurrent(callZipURL(text)).then((value) => curWeatherMap = value);
  } else {
    await getCurrent(callCityURL(text)).then((value) => curWeatherMap = value);
  }
  console.log(curWeatherMap);
  
  let weatherInfo: Map<any, any>;

  if (curWeatherMap == 0) {
    // console.log('City/Zipcode not found');
    sendWeatherData(0);
  } else {
    await getWeekly(curWeatherMap).then((value) => weatherInfo = value);
    sendWeatherData(weatherInfo);
  }
  return;  
};


const getWeekly = async (map) => {
  const reqURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='
                  + map.get('lat')
                  + '&lon='
                  + map.get('long')
                  + '&exclude=minutely,hourly'
                  + '&appid='
                  + API_KEY;
  // console.log(reqURL);
  try {
    const response = await fetch(reqURL);
    if (response.status == 404) {
      // console.log("not found");
      return 0;
    } else {
      const json = await response.json();

      map.set('day0', getWeatherStats(json.daily[0]));
      map.set('day1', getWeatherStats(json.daily[1]));
      map.set('day2', getWeatherStats(json.daily[2]));
      map.set('day3', getWeatherStats(json.daily[3]));
      map.set('day4', getWeatherStats(json.daily[4]));
      map.set('day5', getWeatherStats(json.daily[5]));
      map.set('day6', getWeatherStats(json.daily[6]));
      map.set('day7', getWeatherStats(json.daily[7]));

      // console.log(map);

      return map;
    }
  } catch (error) {
    console.error(error);
  }
};


const getWeatherStats = (json) => {
  let weeklyStats = new Map([
    ['dt', json.dt],
    ['weather', json.weather[0].description],
    ['icon', json.weather[0].icon],
    ['tempDay', json.temp.day],
    ['tempMin', json.temp.min],
    ['tempMax', json.temp.max],
    ['windSpeed', json.wind_speed], 
    ['windDeg', json.wind_deg],
    ['humidity', json.humidity],
  ])
  if (typeof json.rain === 'undefined') {
    weeklyStats.set('rain', 0);
  } else {
    weeklyStats.set('rain', json.rain);
  }

  // console.log(weeklyStats);

  return weeklyStats;
}


const callZipURL = (text) => {
  return 'https://api.openweathermap.org/data/2.5/weather?zip='
                + text
                +'&appid='
                + API_KEY;
};


const callCityURL = (text) => {
  return 'https://api.openweathermap.org/data/2.5/weather?q='
              + text
              +'&appid='
              + API_KEY;
};


const cityOrZipcode = (text: string): boolean => {
  let re = /\d+/;
  return re.test(text);
};


const getCurrent = async (text: string) => {
  try {
    const response: Response = await fetch(text);

    console.log(text);
    console.log(response.status)

    if (response.status == 404) {
      console.log("not found");
      return new Map<string, any>();
    } else if (response.status == 200) {
      const json = await response.json();

      console.log(json);
      console.log(response.text());

      let retMap = new Map ([
        ['dt', json.dt],
        ['city', json.name],
        ['long', json.coord.lon],
        ['lat', json.coord.lat],          
        ['weather', json.weather[0].description],
        ['icon', json.weather[0].icon],
        ['tempCur', json.main.temp],
        ['tempMin', json.main.temp_min],
        ['tempMax', json.main.temp_max],
        ['humidity', json.main.humidity],
        ['windSpeed', json.wind.speed],
        ['windDeg', json.wind.deg],
      ]);

      if (typeof json.rain === 'undefined') {
        retMap.set('rain', 0);
      } else {
        retMap.set('rain', json.rain['1h']);
      }

      // console.log(retMap);
      return retMap;
    } else {
      console.log('Unknown error');
      return 1;
    }
  } catch (error) {
    console.error(error);
  }
};

export default onSearch;