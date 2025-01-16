let value = '1113222113'.split('')

for (let i = 0; i < 40; i++) {
  let previousChar = ''
  value = value.reduce((acc, currentVal) => {
    let result = ''
    if (currentVal !== previousChar) result = `${acc}1${currentVal}`
    else {
      const accChars = acc.split('')
      accChars.splice(accChars.length - 2, 1, `${Number(accChars[accChars.length - 2]) + 1}`)
      result = accChars.join('')
    }
    previousChar = currentVal
    return result
  }, '').split('')
}

console.log(value.join('').length)