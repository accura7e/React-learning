
// switch (age){
//     case age < 14:
//         return 'Children'
//     case age < 20:
//         return 'Children'
//     case age < 14:
//         return 'Children'
// }

const students = [
    {
        name: 'Max',
        age: 15
    },
    {
        name: 'Philipp',
        age: 16
    },
    {
        name: 'Sasha',
        age: 17
    },
]

// console.log(students.filter((student) => student.age > 15).map(student => student.name).join(' '))
// console.log(students.push({
//     name: 'Nikita',
//     age: 16
// },))


console.log(students.find(student => student.name === 'Max'))

