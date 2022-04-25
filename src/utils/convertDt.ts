import Intl from "intl";
import 'intl/locale-data/jsonp/en-US';

const convertDt = (dt:number, format: string) => {
  let date: Date = new Date(dt * 1000);
  if (format == 'dmd') {
    let options: Intl.DateTimeFormatOptions = { weekday: "long", month: "long", day: "numeric"};
    let ret = new Intl.DateTimeFormat('en-US', options).format(date);
    return ret;
  }
}

export default convertDt;