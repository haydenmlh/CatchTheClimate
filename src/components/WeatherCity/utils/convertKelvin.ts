const convertKelvin = (kelvin, unit) => {
  if (unit == 'F') {
    return Math.round( (kelvin - 273.15) * 9/5 + 32 );
  } else {
    return Math.round(kelvin - 273.15);
  }
}

export default convertKelvin;