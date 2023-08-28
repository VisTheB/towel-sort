
// You should implement your task here.

module.exports = function towelSort (matrix) {
  // let newString = matrix.join(',')
  // let newArr = newString.split(',') 
  // newArr = newArr.map(el => +el)
  // return newArr.sort((a, b) => a - b)
  if (matrix == undefined) {
    return []
  } else if (matrix.length == 0) {
    return []
  } else {
    let ans = []
    for(let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        ans.push(matrix[i])
      } else {
        ans.push(matrix[i].reverse())
      }
    }
    return ans.join(',').split(',').map(el => +el)
  }
}
