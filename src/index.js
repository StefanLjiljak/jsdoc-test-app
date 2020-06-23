// @ts-check
const { add, subtract, multiply, divide } = require('./calculator')

/**
 * @file index.js is the root file for this App
 * @author Stefan Ljiljak
 * @see <a target="_blank" href="https://stefan-ljiljak-portfolio.netlify.app/">Stefan Ljiljak Project Portfolio</a>
 */

/**
 * Student Name
 * @type {string}
 */

const studentName = 'Stefan Ljiljak'

/**
 * Aray of grades
 * @type {Array<number>}
 */

const grades = [98, 98.6, 45, 89]

/**
 * Todo object
 * @type {{id:number | string, text:string}}
 */

const todo = {
    id: 1,
    text: 'Hello'
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */

const student = {
    id: 1,
    name: 'Stefan Ljiljak',
    age: 19,
    isActive: true
}

/**
 * Class to create a person object
 */
class Person {
    /**
     * 
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         * @property {number} age Persons age
         */
        this.name = personInfo.name
        this.age = personInfo.age
    }


    /**
     * @property {Function} greet A greeting with name and age
     * @returns {void} void
     */
    greet() {
        console.log(`hello my name is ${this.name} and I am ${this.age}`)
    }
}

/**
 * person 1
 * See {@link Person}
 */
const person1 = new Person({
    name: 'Stefan Ljiljak',
    age: 32
})

console.log(add(20, 30));

