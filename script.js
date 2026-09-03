let clock = document.body.querySelector(".clock");
let calender = document.body.querySelector(".calender");
let weekDayName = document.body.querySelector(".day");
let nav = document.body.querySelector(".nav");
let timeFormat = document.body.querySelector("#toggleBtnTime");

let clockSuffix = document.createElement("span");
clockSuffix.setAttribute("class", "clkSuf");

let todayDate = document.createElement("span");
todayDate.setAttribute("class", "date");

setInterval((hr, min, sec, day, month, year, weekDay) => {
  function formatZero() {
    if (hr < 10) {
      hr = `0${hr}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (sec < 10) {
      sec = `0${sec}`;
    }
  }

  const date = new Date();
  const monthSystem = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daySystem = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  day = date.getDate();
  month = monthSystem[date.getMonth()];
  year = date.getFullYear();

  weekDay = daySystem[date.getDay()];
  weekDayName.innerHTML = `Day${date.getDay() + 1} - ${weekDay}`;
  nav.appendChild(weekDayName);

  if (timeFormat.checked == true) {
    if (hr > 12) {
      formatZero();
      clockSuffix.innerHTML = "PM";
      clock.innerHTML = `${hr}:${min}:${sec} `;
      clock.appendChild(clockSuffix);
    } else if (hr == 0 || hr < 12) {
      formatZero();
      clockSuffix.innerHTML = "AM";
      clock.innerHTML = `${hr}:${min}:${sec}`;
      clock.appendChild(clockSuffix);
    }
  } else {
    if (hr > 12) {
      hr -= 12;
      formatZero();
      clockSuffix.innerHTML = "PM";
      clock.innerHTML = `${hr}:${min}:${sec} `;
      clock.appendChild(clockSuffix);
    } else if (hr == 0 || hr < 12) {
      hr = 12;
      formatZero();
      clockSuffix.innerHTML = "AM";
      clock.innerHTML = `${hr}:${min}:${sec}`;
      clock.appendChild(clockSuffix);
    }
  }
  todayDate.innerHTML = `${day} ${month} ${year}`;

  calender.appendChild(todayDate);
}, 1000);
