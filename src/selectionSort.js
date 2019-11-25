function selectionSort(arr) {
    // your code here!
    // arr is an array of unsorted integers (i.e. [3, 5, 1])
    let aLength = arr.length;

    for( let i = 0; i < aLength-1; i++){
        let jMin = i;
        for(let j = i + 1; j < aLength; j++){
            if((arr[j] < arr[jMin])) {
                jMin = j;
            }
        }
        if (jMin != i){
            let tmp = arr[i];
            arr[i] = arr[jMin];
            arr[jMin] = tmp;
        }
    }
    return arr
}
