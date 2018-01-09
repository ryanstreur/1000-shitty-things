const data = require('../things.json');
const _ = require('lodash');

export const getProgress = () => {
  console.log(data);
  var out = _.countBy(data, 'date');
  let cumulative = 0;
  let arrayOut = [];
  for (let key in out) {
    out[key] += cumulative;
    cumulative = out[key];
    arrayOut.push({
      t: new Date(key),
      y: out[key]
    });
  }
  console.log(arrayOut);
  return arrayOut;
}
