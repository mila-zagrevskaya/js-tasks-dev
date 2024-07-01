// 1.
/**
 * The function takes an object and returns a copy of it, in which the keys
 * became values, and values ​​became keys.
 * @param {object} object
 * 
 */
const figure = {
  num: 'first',
  type: 'circle',
  color: {
    1: 'green',
    2: 'yellow',
    3: 'orange',
    radius: {
      small: 50,
      medium: 75,
      large: 100,
    },
  },
};

function objectInverse(object) {
  const keys = Object.keys(object);

  const newObject = Object.values(object).reduce((result, currentValue, index) => {
    let currentKey = keys[index];
    if (typeof currentValue !== 'object') {
      result[currentValue] = currentKey;
    } else {
      result[currentKey] = objectInverse(currentValue);
    }
    return result;
  }, {});

  return newObject;
}

const copyOfObect = objectInverse(figure);

console.log('1. copyOfObect', copyOfObect);
