const _ = require('lodash')

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades : [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}
const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

console.log(weightedAvg(user) )

console.log(findWeight(15))

console.log(getMails(collections))

/** zad 3 */
function weightedAvg(user) {
    const precision = 2
    let nominator = _.sumBy(user.allGrades, function (o) {
        let sum = 0
        for (let i = 0; i < o.grades.length; i++) {
            sum += o.grades[i] * o.weight
        } return sum
    })
    let denominator = _.sumBy(user.allGrades, function (o) {return o.weight * o.grades.length})

    return 'Weighted AVG: ' + _.round(nominator / denominator, precision);
}

/** zad 4 */
function findWeight(searchWeight) {
    let isFind = false
    _.find(user.allGrades, function (n) {
        if(n.weight === searchWeight){
            isFind = true
        }
    });
    return isFind
}

/** zad 5 */

function getMails(collections) {
    const re = /\S+@\S+\.\S+/;
    let mailsArray = [];
    for(let value of collections) {
        if (re.test(value)) {
            mailsArray.push(value)
        }
    }
    return mailsArray
}