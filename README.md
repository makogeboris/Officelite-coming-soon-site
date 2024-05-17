# Frontend Mentor - Officelite coming soon site solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Screenshot

![](/design/Desktop%20-%20Home.jpg)

### Links

- [Solution URL](https://github.com/mkboris/Officelite-coming-soon-site)
- [Live Site URL](https://officelite-coming-soon-site-brown.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Parcel
- DayJS

### What I learned

- Another opportunity to get to work with the `Date` object, this time I learned how to use the DayJS library to implement the countdown component. I find it really helpful and quite easy to understand and work with as compared with vanilla JavaScript.

- My second project using Sass and I'm getting used to it and improving, also learned how to use an easy function to convert px values to rem

```scss
@use "sass:math";

// Converts px to rem
@function rem($pxValue) {
  @return math.div($pxValue, 16px) * 1rem;
}
```

### Continued development

Working with dates and time can be really tricky, I will continue to get more hands on experience to improve.

### Useful resources

- [How to Use the DayJS Library to work with Date and Time in JS](https://www.freecodecamp.org/news/javascript-date-time-dayjs/)

## Author

- Frontend Mentor - [@mkboris](https://www.frontendmentor.io/profile/mkboris)
