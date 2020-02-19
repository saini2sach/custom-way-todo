
function formatDuration(s) {
  // Complete this function
  if (!s) {
    return 'now'
  }
  let yrSecond = 365 * 24 * 60 * 60;
  let daySecond = 24 * 60 * 60;

  let year = Math.floor(s / yrSecond);
  let day = Math.floor((s % yrSecond) / daySecond)
  let hours = Math.floor((s % daySecond) / 3600)
  let minutes = Math.floor((s % 3600) / 60);
  let seconds = s % 60;

  function appendS(val, str) {
    return ` ${str}${val > 1 ? 's' : ''}`
  }

  function pushArr(...args) {
    let arr = [];
    for (let i of args) {
      if (i.length > 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  let yStr = (year > 0) ? year + appendS(year, 'year') : '';
  let dStr = (day > 0) ? day + appendS(day, 'day') : '';
  let hstr = (hours > 0) ? hours + appendS(hours, 'hour') : '';
  let mstr = (minutes > 0 && minutes <= 60) ? minutes + appendS(minutes, 'minute') : '';
  let sstr = (seconds > 0 && seconds <= 60) ? seconds + appendS(seconds, 'second') : '';

  let strArr = pushArr(yStr, dStr, hstr, mstr, sstr);
  let initialArr = strArr.slice(0, strArr.length - 1);

  return (initialArr.length > 0 ? (initialArr.join(', ') + ' and ') : '') + strArr[strArr.length - 1]

}

formatDuration(2342);