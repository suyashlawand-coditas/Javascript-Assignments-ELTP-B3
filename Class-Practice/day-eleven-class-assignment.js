function getLengthOfMissingArray(arrayOfArrays) {
    if(!Array.isArray(arrayOfArrays) || !arrayOfArrays){
       return 0;
     }
     if (arrayOfArrays.some((subArr) => !subArr || subArr.length === 0)) {
       return 0;
     }
     
     const sortedArray = arrayOfArrays.sort((a, b) => a.length - b.length);
   
     for (let index = 0; index < sortedArray.length; index++) {
       if (index + 1 === sortedArray.length) break;
       
       const subArray = sortedArray[index];
       if (subArray.length == sortedArray[index + 1].length - 2) return subArray.length + 1
     }
     return 0;
   }
   