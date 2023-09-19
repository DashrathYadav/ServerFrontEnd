// 

function findMinIndex(array) {
    // Get the minimum value in the array.
    const minValue = Math.min(...array);
  
    // Find the index of the minimum value in the array.
    const minIndex = array.indexOf(minValue);
  
    return minIndex;
  }
  
  const array = [10, 0, 3, 2, 1];
  
  const minIndex = findMinIndex(array);
  
  console.log(minIndex); // 0
  