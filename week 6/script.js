// Sample data to represent the images object (similar to JSON format)
const images = [
  {
    "name": "mountain.jpg",
    "position": "center",
    "size": "90px 60px"
  },
  {
    "name": "gmail.png",
    "position": "left",
    "size": "90px 90px"
  },
  {
    "name": "insta.png",
    "position": "right",
    "size": "90px 90px"
  }
];

// jQuery document ready function
$(document).ready(function () {
  let currentImageIndex = 0;  // Start from the first image

  // Function to change the image based on the index
  function changeImage(imageIndex) {
    let image = images[imageIndex];
    // Update the image source and other properties based on the selected image
    $("#imageDisplay").attr("src", image.name); // Correctly update the image source
    $("#imageDisplay").css({
      "object-position": image.position,  // Positioning the image
      "width": image.size.split(" ")[0],  // Extract width from size string
      "height": image.size.split(" ")[1]  // Extract height from size string
    });
  }

  // Display the first image initially
  changeImage(currentImageIndex);

  // Button click event to change the image and cycle through
  $("#changeImageButton").click(function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;  // Cycle through images in order
    changeImage(currentImageIndex);  // Update image source and styles
  });
});
