const dateToString = (date, format) => {
  if (!format) {
    format = 'YYYY/MM/DD'
  }
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, date.getMonth() + 1);
  format = format.replace(/DD/g, date.getDate());

  return format
}

export default dateToString;