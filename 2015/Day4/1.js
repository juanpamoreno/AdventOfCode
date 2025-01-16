import crypto from 'node:crypto'
const input = 'bgvyzdsv'
let counter = 0
const regexRequirement = /^00000.*$/
while (true) {
  const hash = crypto.createHash('md5').update(`${input}${counter}`, 'utf8').digest("hex")
  if (regexRequirement.test(hash)) break
  counter++
}
console.log(counter)
