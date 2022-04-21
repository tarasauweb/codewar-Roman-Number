function solution(number) {
  // convert the number to a roman numeral
  let numString = new String(number)
  let numArr = []
  for (let i = 0; i < numString.length; i++) {
    numArr.push(numString[i]);
  }
  const romaNumArr = {
    units: {
      I: 1,
      II: 2,
      III: 3,
      IV: 4,
      V: 5,
      VI: 6,
      VII: 7,
      VIII: 8,
      IX: 9,
      0: 0
    },
    ten: {
      X: 1,
      XX: 2,
      XXX: 3,
      XL: 4,
      L: 5,
      LX: 6,
      LXX: 7,
      LXXX: 8,
      XC: 9,
      0: 0
    },
    hundred: {
      C: 1,
      CC: 2,
      CCC: 3,
      CD: 4,
      D: 5,
      DC: 6,
      DCC: 7,
      DCCC: 8,
      CM: 9,
      0: 0
    },
    thousand: {
      M: 1,
      MM: 2,
      MMM: 3,
      0: 0
    }
  }

  function returnRomanNum(obj, num) {
    for (let key in obj) {
      if (obj[key] === parseInt(numArr[num])) {
        return numString = key
      }
    }
  }

  if (numArr.length === 1) {
    numString = returnRomanNum(romaNumArr.units, 0)
  }
  else if (numArr.length === 2) {
    numString = returnRomanNum(romaNumArr.ten, 0) + returnRomanNum(romaNumArr.units, 1)

  }
  else if (numArr.length === 3) {
    numString = returnRomanNum(romaNumArr.hundred, 0) + returnRomanNum(romaNumArr.ten, 1) + returnRomanNum(romaNumArr.units, 2)
  }
  else if (numArr.length === 4) {
    numString = returnRomanNum(romaNumArr.thousand, 0) + returnRomanNum(romaNumArr.hundred, 1) + returnRomanNum(romaNumArr.ten, 2) + returnRomanNum(romaNumArr.units, 3)
  }
  if (numString.includes(0)) {
    numString = numString.replace(/0/g, '')
  }

  console.log(numString)
  return numString

}



solution(3500)