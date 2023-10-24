
function unroll(square) {
    const result = [];
    while (square.length > 0) {
      // Traverse right
      result.push(...square.shift());
      
      // Traverse down
      for (let i = 0; i < square.length - 1; i++) {
        result.push(square[i].pop());
      }
  
      // Traverse left (if there are rows remaining)
      if (square.length > 0) {
        result.push(...square.pop().reverse());
      }
  
      // Traverse up (if there are columns remaining)
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
    return result;
  }
  
  // Example usage:
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  
  console.log(unroll(square)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  console.log(unroll(smallerSquare)); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]

  module.exports = unroll;