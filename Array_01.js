//Find the Largest integer from the given array

let arr = [1, 3, 4, 5, 2, 1]

let largestValue = arr[0]

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largestValue) {
        largestValue = arr[i]
    }
}

console.log("largestValue is :", largestValue)

// Find the Second Largest from the given array

const newArr = [2, 1, 3, 4, 6, 7, 7]

let largest = newArr[0];

for (let i = 0; i < newArr.length; i++) {

    if (largest < newArr[i]) {
        largest = newArr[i]
    }
}

/* We will take Slargest as -1 assuming all the int in the given array is positive
In case the array contains a negative number , take Slargest = Int_Min */

let SLargest = -1;

for (let i = 0 ; i < newArr.length ; i++) {
    if (newArr[i] > SLargest && newArr[i] < largest ) {
        SLargest = newArr[i]
    }   
}

console.log( "Second Largest Value is : ",SLargest);