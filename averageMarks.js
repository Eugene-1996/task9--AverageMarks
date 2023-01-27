function getAverage(marks){
    let sum = 0
    let count = 0
    for(let i =0; i<marks.length; i++){
      sum+= marks[i]
      count++
    }
      let average = Math.floor(sum/count)
      return average
  }
