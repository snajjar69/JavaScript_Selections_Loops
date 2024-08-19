//console.log("Hello World!\n==========\n");

// Exercise 
 //   for (let i = 0; i < 100; i++) {
   //     if (i % 2 == 0) {
   //         continue;
  //        } else {
  //          console.log(i);
       // }
//}
// Exercise 2
 //   for (let i = 1; i < 100; i++) {
   //     if (i % 3 == 0 && i % 5 == 0) {
   //         console.log(i, "FIZZBUZZ");

  // } else {
  //   if (i % 3 == 0) {
  //      console.log(i, "FIZZ");

  //  } else if (i % 5 == 0) {
  //      console.log(i, "BUZZ");
  //  } else {
  //      console.log(i);

   // }
     //   }
   // }


// Exercise 4

//let foundValue;

//    for (let i = 1; i <= n && !foundValue; i++) {
//        foundValue = (i == numberToFind);
//        }

//    if (foundValue) {
 //     console.log(`Found ${numberToFind}!`);
 //   } else {
 //     console.log(`Did not find ${numberToFimd} within 1-${n}..`);
//}

//Exercise 5
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
    let start = Math.round(Math.random() * (10 - 1) + 1); 
    let end = Math.round(Math.random() * (1000 - 1) + 1);

    //console.log(start, end);

for (let i = start; i <= end; i++) {
    let output = "";
    // console.log(i);

    if (i % buzzDivisor == 0) {
        output += "FIZZ";
    }
    if (i % buzzDivisor == 0) {
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);