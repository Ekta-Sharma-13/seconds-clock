let clock = document.querySelector(".clock");
let calendar = document.querySelector(".calender");
let weekDayName = document.querySelector(".day");
let nav = document.querySelector(".nav");
let timeFormat = document.querySelector("#toggleBtnTime");

let clockSuffix = document.createElement("span");
clockSuffix.className = "clkSuf";

let todayDate = document.createElement("span");
todayDate.className = "date";

function updateClock() {
  const date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  const day = date.getDate();
  const year = date.getFullYear();

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

  const month = monthSystem[date.getMonth()];
  const weekDay = daySystem[date.getDay()];

  // Add leading zero
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");

  // 24-hour format
  if (timeFormat.checked) {
    hr = String(hr).padStart(2, "0");

    clock.innerHTML = `${hr}:${min}:${sec}`;
  }
  // 12-hour format
  else {
    let period = hr >= 12 ? "PM" : "AM";

    hr = hr % 12;

    if (hr === 0) {
      hr = 12;
    }

    hr = String(hr).padStart(2, "0");

    clock.innerHTML = `${hr}:${min}:${sec} `;

    clockSuffix.innerHTML = period;

    clock.appendChild(clockSuffix);
  }

  weekDayName.innerHTML = `Day${date.getDay() + 1} - ${weekDay}`;

  todayDate.innerHTML = `${day} ${month} ${year}`;

  if (!calendar.contains(todayDate)) {
    calendar.appendChild(todayDate);
  }
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);
