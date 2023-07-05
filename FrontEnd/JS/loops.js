// iterations (loops)

// exercise 1
let number = 100;
while (number <= 200) {
    console.log(number);
    number++;
}

//exercise 2
let number2 = 100;
while (number2 <= 200) {
    if (number2 % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    number2++;
}

//exercise 3
for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(b);
    }
  }

// exercise 4
for (a = 100; a <= 200; a++) {
    console.log(a);
}

for (a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("-")
    } else {
        console.log("*")
    }
}

//exercise 5
let day = "Friday";
switch (day) {
    case "Monday":
        console.log(`It's Monday`);
    case "Monday":
        console.log(`It's Tuesday`);
    case "Wednesday":
        console.log("It's Wednesday");
    case "Thursday":
        console.log("It's Thursday");
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("That's not correct!")
        break;
}
