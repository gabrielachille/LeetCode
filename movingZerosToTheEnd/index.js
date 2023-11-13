// function moveZeros(arr) {
//    let zeros = []
//    let newArr = []
   
//    for(let i = 0; i < arr.length; i++){
//      if(arr[i] == 0){
//        zeros.push (arr[i]);
//      } else {
//        newArr.push (arr[i]);
//      }
//    }
//      return newArr.concat(zeros)
//      }    

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

function moveZeros(arr){
   let zeros = []
   let newArr = []
   
   for(let i = 0; i < arr.length; i++){
      arr[i] === 0 ? zeros.push(arr[i])
         :newArr.push(arr[i])
}
   return newArr.concat(zeros)}