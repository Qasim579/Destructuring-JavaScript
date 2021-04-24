let user = {
    name: "qasim",
    age: 12,
    city: "pwr",
};
// const double = ({ age }) => age * 2;
// console.log(double(user));

// let introduction = ['hello', 'I', 'am', 'Qasim'];
// let [greeting, , , pronoun] = introduction;
// console.log(greeting, pronoun);

// let [greeting, ...intro] = ['hello', 'I', 'am', 'Qasim'];
// console.log(greeting);
// console.log(intro);

// function getArray() {
//     return ['hello', 'I', 'am', 'Qasim'];
// }
// let [greeting, , , pronoun] = getArray();
// console.log(greeting, pronoun);


let { name, age, city } = user;
console.log(name, age, city);