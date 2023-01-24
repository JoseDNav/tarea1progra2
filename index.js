const { sqrt } = require('mathjs')
const { derivative } = require('mathjs')



console.log(sqrt(-4).toString()) //resultado 2i


console.log(derivative('x^2 + x', 'x').toString()) //resultado 2 * x + 1