// const API_KEY: string = "wrong"


const onSearch = async (text: string, setWeatherData, apiKey: string) : Promise<void> => {
  let curWeatherMap: Map<string, any>;
  let url: string;
    
  console.log(text);
  console.log("API Key is: " + apiKey);

  if (cityOrZipcode(text)) {
    url = callZipURL(text, apiKey)
    
  } else {
    url = callCityURL(text, apiKey);
  }
  await getCurrent(url).then((value) => curWeatherMap = value);
  console.log(curWeatherMap);
  
  let weatherInfo: Map<any, any>;

  if (curWeatherMap.get('status') == "success") {
    await getWeekly(curWeatherMap, apiKey).then((value) => weatherInfo = value);
    let store = JSON.stringify([...weatherInfo]);
    console.log(store);
    setWeatherData(store);
  } else {
    setWeatherData(JSON.stringify([...curWeatherMap]));
  }
};

const callZipURL = (text: string, apiKey) => {
  return 'https://api.openweathermap.org/data/2.5/weather?zip='
                + text
                +'&appid='
                + apiKey;
};


const callCityURL = (text: string, apiKey) => {
  return 'https://api.openweathermap.org/data/2.5/weather?q='
              + text
              +'&appid='
              + apiKey;
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
      return new Map([['status', 'not found']]);

    } else if (response.status == 401) {
      console.log("unauthorized");
      return new Map([['status', 'unauthorized']]);

    } else if (response.status == 200) {
      const json = await response.json();

      console.log(json);

      let retMap = new Map ([
        ['status', "success"],
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
      return new Map([['status', 'unknown error']]);
    }
  } catch (error) {
    console.error(error);
  }
};

const getWeekly = async (map: Map<any, any>, apiKey) => {
  const reqURL: string = 'https://api.openweathermap.org/data/2.5/onecall?lat='
                  + map.get('lat')
                  + '&lon='
                  + map.get('long')
                  + '&exclude=minutely,hourly'
                  + '&appid='
                  + apiKey;
  // console.log(reqURL);
  try {
    const response = await fetch(reqURL);
    if (response.status == 404) {
      return new Map([['status', 'not found']]);
    } else {
      const json = await response.json();

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
  let ret = JSON.stringify([...weeklyStats]);
  return ret;
}


export default onSearch;