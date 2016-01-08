import $ from 'jquery';
import moment from 'moment';
import _each from 'lodash/collection/each';

function textElements(selector) {
  return $(selector).contents().filter((_, element) => {
    return element.nodeType === 3;
  });
}

// Find a birthday:
let birthdayText = '';
if (document.URL.indexOf('wikipedia') !== -1) {
  birthdayText = $('.bday').text();
} else {
  birthdayText = $('._Xbe').text();
}

if (!birthdayText) {
  // Find something that looks like it might be a birthday:
  const regex = /born (.*)\)/;
  textElements($('body *')).each((_, element) => {
    const match = regex.exec(element.textContent);
    if (match) {
      birthdayText = match[1];
      return false; // Found one, so exit early.
    }
  });
}

// Still no birthday text, so move on.
// Otherwise:
// 1. Get the birthday, and death day (if applicable)
// 2. Calculate age, if death day, and make sure that birthday and death day are separated by at least that much. If no death day, make
// up a current day
// 3. Make a new age, which is a 2-3 letter abbreviation, starting with A or B. If B, dates should go down towards 0. If A, dates
// should go up
// 4. Permute the original age and find all of the places where that exists in the page, then change them (maybe just in overview).
// 5. Also change the age to a new number
// Hash the date so that it's reproducible
if (birthdayText) {
  const date = moment(birthdayText);
  console.log(date);
  const permutedDates = [date.format('MMMM D, YYYY'), date.format('D MMMM YYYY')];
  console.log(permutedDates[0] + ' ' + permutedDates[1]);

  textElements($('body *')).each((_, element) => {
    // Use each permuted date to redact.
    _each(permutedDates, (val) => {
      //console.log(val + ', ' + element.textContent);
      element.textContent = element.textContent.replace(val, 'REDACTED');
    });
  });
}
