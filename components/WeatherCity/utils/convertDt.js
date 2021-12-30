const convertDt = (dt, format) => {
  let date = new Date(dt * 1000);
  if (format == 'dmd') {
    let options = { weekday: 'long', month: 'long', day: 'numeric'};
    let ret = new Intl.DateTimeFormat('en-US', options).format(date);
    return ret;
  }
}

export default convertDt;