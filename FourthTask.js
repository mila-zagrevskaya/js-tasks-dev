/**
 * The function accepts an object.
 * The function must return an independent copy of the object.
 *
 * @param {object} obj
 */

const cloningObject = {
  name: 'sample',
  attributes: {
    type: 'figure',
    color: 'green',
    size: 200,
  },
  position: [250, 250],
};

function clone(obj) {
  const copyOfObject = JSON.parse(JSON.stringify(obj));
  return copyOfObject;
}

const cloneObject = clone(cloningObject);
console.log('4. cloneObject', cloneObject);
