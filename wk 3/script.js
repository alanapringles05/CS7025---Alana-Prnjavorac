for (let i = 1; i <= 20; i++) {
    // Skip numbers divisible by 3 using continue
    if (i % 3 === 0) {
        continue;
    }

    // Stop the loop entirely when reaching 15 using break
    if (i === 15) {
        break;
    }

    // Print the number
    console.log("The number is " + i);
}
