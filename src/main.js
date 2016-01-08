import $ from 'jquery';
import moment from 'moment';
import _each from 'lodash/collection/each';

const birthdayText = $('.bday').text();
const date = moment(birthdayText);

function permuteMoment(moment) {
  return [moment.format('MMMM DD, YYYY'), moment.format('DD MMMM YYYY')];
}

const moments = permuteMoment(date);

$('body *').contents().filter(function() { // TODO: Polyfill so that `this` works correctly
  return this.nodeType === 3;
}).each(function() {
  const node = this;
  _each(moments, (val) => {
    node.textContent = node.textContent.replace(val, 'REDACTED');
  })
});

// $('._Xbe').text(() => {
//     return 'Redacted';
// });​​​​​

// Hash the date so that it's reproducible
// 1. Get the birthday, and death day (if applicable)
// 2. Calculate age, if death day, and make sure that birthday and death day are separated by at least that much. If no death day, make
// up a current day
// 3. Make a new age, which is a 2-3 letter abbreviation, starting with A or B. If B, dates should go down towards 0. If A, dates
// should go up
// 4. Permute the original age and find all of the places where that exists in the page, then change them (maybe just in overview).
// 5. Also change the age to a new number
// 6. Also need to grab _Xbe on google
