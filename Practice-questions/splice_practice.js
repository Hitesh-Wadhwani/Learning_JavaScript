// Splice Fanda

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// Explanation
// month.splice(index, count, item1, ..... itemX)
// Index -> require the index postion to add remove items. and A negative value count from the end of the array.
// Count -> Optimal. Number of item to be removed.
// Item1 -> Optimal. the new elements to be added. 


const month = ["Jan", "March", "April", "june"];
month.splice(1, 0, "Feb");
// console.log(month)

month.splice(4, 0, "May")

// console.log(month)


const personNames = ["rajesh", "kamlesh", "prem", "naresh", "hitesh", "ajay"];


// console.log(personNames.splice(2,2))

// console.log(personNames)


