const apiVerify = async (api: string) : Promise<number> => {
  // console.log(text);
  // console.log("API Key is: " + apiKey);
  try {
    let url: string;

    url = 'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid='+api;
    console.log(url);
    const response: Response = await fetch(url);

    return response.status;

    // console.log(response.status)
    // console.log(response.statusText)

    // if (response.status == 401) {
    //   console.log("unauthorized");
    //   return 'Unauthorized API Key. Please try again.';

    // } else if (response.status == 200) {
    //   console.log("success");
    //   setApiKey(api);
    //   return "Success!";
    // } else {
    //   console.log('Unknown server error');
    //   return 'Unknown error response from server. ' + response.status + ": " + response.statusText;
    // }
  } catch (error) {
    console.error(error);
    return 101;
  }
};

export default apiVerify;