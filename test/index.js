const arr = [1, 5, 0, 8, 9, 3];

const x = arr.map((number) => number % 2);
const y = x.filter((num) => num % 2 === 0);
console.log('refrence check' , Object.is(arr , x))

const z = arr.findIndex((number) => number === 90);
console.log(z);
Array.prototype.customMap = customMap;
function customMap(fn) {
  const array = [];
  for (item of arr) {
    array.push(fn(item));
  }
  return array;
}
console.log(arr.customMap((x) => x * 2));
function App() {
  name = "hashem";
  var name = "ali";
  console.log(name);
}
App();
