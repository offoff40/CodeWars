function moveZeros(arr) {   
      return arr.filter(z => z !== 0).concat(arr.filter(z => z === 0))    
}