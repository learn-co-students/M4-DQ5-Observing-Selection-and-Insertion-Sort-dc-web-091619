function selectionSort(arr) {
  let sortedArray = []
 
 while(arr.length > 0){
 
   for(let i = 0; i < arr.length; i++){
    let lowest = Math.min(...arr)
     if(lowest === arr[i]){
       let lowestNumber = arr.splice(i,1);
       sortedArray.push(lowestNumber)
     }
  }
 
 }
  return sortedArray.join(" ").split(" ");
 }
  
 

