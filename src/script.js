"use strict";

import dayjs from "dayjs";

const duration = require("dayjs/plugin/duration");

dayjs.extend(duration);

const future = document.querySelectorAll(".countdown-heading__span");
const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");

const todayDate = dayjs();
const futureDate = todayDate.add(30, "day");

future.forEach((day) => {
  day.textContent = futureDate.format("DD MMM YYYY");
});

function updateCountdown() {
  const remainingTime = dayjs.duration(futureDate.diff(dayjs()));

  const daysFromDate = Math.floor(remainingTime.asDays());
  const hoursFromDate = remainingTime.hours();
  const minutesFromDate = remainingTime.minutes();
  const secondsFromDate = remainingTime.seconds();

  days.forEach((day) => {
    day.textContent = daysFromDate;
  });

  hours.forEach((hour) => {
    hour.textContent = hoursFromDate;
  });

  minutes.forEach((min) => {
    min.textContent = minutesFromDate;
  });

  seconds.forEach((sec) => {
    sec.textContent = secondsFromDate;
  });
}

setInterval(updateCountdown, 1000);

updateCountdown();
