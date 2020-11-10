// QUESTION : To find the sum of all the elements of an array


// Method 1 : Starting with 0 index of Array and summing all the element One by One

function sumArray(){                    //creating a function
    const ar = [4, 9, 3, 1, 0, 2];      //defining a constant array of numbers
    let sum = 0;                        //initializing variable sum
    let i;                              //initializing variable i

    for(i=0; i<ar.length; i++){         //for loop conditioning for sum of array
        sum += ar[i];                   //LOGIC: previous_Sum + next_Element till end of the array
    }
    return sum;                         //returning value of sum from for loop
}
console.log(sumArray());                //output & function calling



// Method 2 : Using Reduce method