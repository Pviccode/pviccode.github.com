function showTimeClock() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDate();
    let month = dateToday.getMonth() + 1;
    let y = dateToday.getFullYear();
    let timeZone = 'AM';

    if (h >= 12) {
      timeZone = 'PM';
    }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  d = (d < 10) ? "0" + d : d;
  month = (month < 10) ? "0" + month : month;

document.querySelector('[data-clock]').innerHTML =  h + ':' + m + ':' + s + timeZone;

document.querySelector('[data-calendar-date]').innerHTML = d + '/' + month + '/' + y;

setTimeout(showTimeClock, 1000);
}

showTimeClock()