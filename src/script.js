"use strict";

import dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");
const duration = require("dayjs/plugin/duration");

dayjs.extend(relativeTime);
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

const daysFromDate = futureDate.diff(todayDate, "day");
const hoursFromDate = futureDate.diff(todayDate, "hour");

console.log(daysFromDate);
console.log(hoursFromDate);

days.forEach((day) => {
  day.textContent = daysFromDate;
});

hours.forEach((hour) => {
  hour.textContent = hoursFromDate;
});
