/**
 * The function accepts an object
 * The function must return the product of the property values, where the value is a number
 *
 * @param {object} obj
 */

const product = {
  type: 'breakfast',
  calories: 329,
  type2: 'lunch',
  calories2: 187,
  calories3: 24,
  calories4: 83,
  type3: 'dinner',
  calories5: 212,
  calories6: 37,
};

/**
 *
 *first variant
 */

function numericPropsProduct1(obj) {
  let numericProperty = 0;
  for (currentNumericProp in obj) {
    const currentProp = obj[currentNumericProp];
    if (typeof currentProp === 'number') numericProperty += currentProp;
  }

  return numericProperty;
}

/**
 *
 * second variant
 */

function numericPropsProduct2(obj) {
  const objectValues = Object.values(obj);
  const isNumber = objectValues.filter(value => typeof value === 'number');
  const numericProperty = isNumber.reduce((result, currentValue) => {
    result += currentValue;
    return result;
  }, 0);
  return numericProperty;
}

const numericProps1 = numericPropsProduct1(product);
console.log('3.1 numericProps', numericProps1);

const numericProps2 = numericPropsProduct2(product);
console.log('3.2 numericProps', numericProps2);
