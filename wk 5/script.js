// Array that holds URLs of Creative Commons Licenses images from online
var imageUrls = [
  "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-aoBBthTaDh90hVc3hwaNAG-KovFZUwCZQ&s",
  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyaGVhcnRfbG92ZV9zdW5fNTcwOTYyLWltYWdlLWt5YmRqeW5oLmpwZw.jpg",
  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMjMxNDY4ODE2NTQtaW1hZ2Uta295NWoyeG4uanBn.jpg",
  "https://images.pexels.com/photos/6972905/pexels-photo-6972905.jpeg",
  "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
  "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg"
];


// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Add an event listener to the button for generating a random image
  document.getElementById('generateImageButton').addEventListener('click', function() {

    // Select a random image from the imageUrls array
    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    var selectedImageUrl = imageUrls[randomIndex];

    // Set the 'src' attribute of the image element to the selected image URL
    document.getElementById('imageDisplay').setAttribute("src", selectedImageUrl);
  });
});
