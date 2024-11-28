
// Function to set a cookie that expires in 1 day
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time for 1 day
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  // Function to get a cookie value by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  // Set a cookie named "dailyCookie" with a value and 1-day expiration
  setCookie("dailyCookie", "sampleValue", 1);
  // Function to handle button click
  function handleClick() {
    // Retrieve the current click count from Local Storage, or start at 0
    let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
    clickCount += 1; // Increment the click count
    localStorage.setItem("clickCount", clickCount); // Store the updated count in Local Storage
    document.getElementById("click-count").textContent = clickCount; // Update the displayed count
  }
  // Initialize the click count display from Local Storage
  document.getElementById("click-count").textContent = localStorage.getItem("clickCount") || 0;
