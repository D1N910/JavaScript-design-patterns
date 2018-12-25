function getMaxHuiwen(str){
  let resultStr = ''
  if (str == '') {
    return resultStr
  }

  let leftStr = ''
  let rightStr = ''

  let center = (str.length - str.length % 2)/2
  leftStr = str.slice(0, center)
  rightStr = str.slice(center+1)
  console.log('leftStr')
  console.log(leftStr)
  console.log('rightStr')
  console.log(rightStr)

  let thisprocessStr = str[center]

  if (leftStr.length < rightStr.length) {
    for (let i in leftStr) {
      if (leftStr[leftStr.length - i - 1] === rightStr[i]) {
        thisprocessStr = `${leftStr[leftStr.length - i - 1]}${thisprocessStr}${rightStr[i]}`
      } else {
        break
      }
    }
  } else {
    for (let i in rightStr) {
      if (rightStr[leftStr.length - i - 1] === leftStr[i]) {
        thisprocessStr = `${leftStr[i]}${thisprocessStr}${rightStr[rightStr.length - i - 1]}`
      } else {
        break
      }
    }
  }
  if (thisprocessStr.length > resultStr.length) {
    resultStr = thisprocessStr
  }
}

getMaxHuiwen('ijn')
getMaxHuiwen('123456')
getMaxHuiwen('12345')
getMaxHuiwen('c d b d')
