
const original = { name : 'Mustafizur', education: {college: 'x', age: 22}};

// const shallowCopy = {...original};
// shallowCopy.education.age = 23;
// console.log(original)

const deepCopy = structuredClone(original);
deepCopy.education.age = 24;
console.log(original)