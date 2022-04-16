const importAll = require =>
require.keys().reduce((acc, next, i) => {
  acc[i] = require(next);
  // console.log(acc)
  return acc;
}, []);

export const images = importAll(
    require.context('./', false, /\.(png|jpg)$/)
);


const thing = require.context('./', false, /\.(png|jpg)$/);
console.log(thing);

// console.log(imageModules)


// export const images = imageModules.map( module => module.default);

// console.log(images)