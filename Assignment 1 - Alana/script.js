document.addEventListener("DOMContentLoaded", () => {
    // Back to Top Button (Global for all pages)
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // Detect the current page by its title or another unique identifier
    const pageTitle = document.title;

    // Features specific to the Projects Page
    //scroll bar
    if (document.title === "My Projects") {
      class ScrollProgressBar {
          constructor(sections, progressBarSelector) {
              // Map section IDs to DOM elements
              this.sections = sections.map(id => document.getElementById(id));
              this.progressBar = document.querySelector(progressBarSelector);
              this.links = this.progressBar.querySelectorAll("a");

              this.init();
          }

          init() {
              // Update active section on scroll
              window.addEventListener("scroll", () => this.updateActiveSection());

              // Add click event listeners to links
              this.links.forEach(link =>
                  link.addEventListener("click", event => this.scrollToSection(event))
              );
          }

          updateActiveSection() {
              const scrollPosition = window.scrollY;
              let activeIndex = 0;

              // Find the active section based on scroll position
              this.sections.forEach((section, index) => {
                  if (!section) return; // Skip if the section is null
                  const sectionTop = section.offsetTop;
                  const sectionHeight = section.offsetHeight;

                  if (
                      scrollPosition >= sectionTop - 50 &&
                      scrollPosition < sectionTop + sectionHeight - 50
                  ) {
                      activeIndex = index;
                  }
              });

              // Update the active class for the links
              this.links.forEach((link, index) => {
                  if (index === activeIndex) {
                      link.classList.add("active");
                  } else {
                      link.classList.remove("active");
                  }
              });
          }

          scrollToSection(event) {
              event.preventDefault();
              const targetId = event.target.getAttribute("href").slice(1);
              const targetSection = document.getElementById(targetId);

              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop - 10,
                      behavior: "smooth",
                  });
              }
          }
      }

      // Array of section IDs for the Projects page
      const sections = [
          "soundProduction",
          "videoProduction",
          "uxui",
          "coding",
          "photography",
          "design",
      ];

      // Initialize the scroll progress bar
      const progressBar = document.querySelector("#progressBarSections");
      if (progressBar) {
          new ScrollProgressBar(sections, "#progressBarSections");
      }
  }

//carousel
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Attach click handlers for navigation
  document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
  document.querySelector('.next').addEventListener('click', () => plusSlides(1));
});


const pageTitle = document.title;
// Features specific to the Contact page
if (pageTitle === "Contact Me") {
    // Character Counter
    const textarea = document.getElementById("message");
    const charCountDisplay = document.getElementById("charCount");
    const maxChars = 500;

    if (textarea && charCountDisplay) {
        // Function to update the character count
        function updateCharacterCount() {
            const currentLength = textarea.value.length;

            // Update the displayed character count
            charCountDisplay.textContent = `${currentLength} / ${maxChars}`;

            // Change text color if the character limit is reached
            if (currentLength >= maxChars) {
                charCountDisplay.style.color = "red";
            } else {
                charCountDisplay.style.color = "black";
            }
        }

        // Event listener for the textarea input
        textarea.addEventListener("input", updateCharacterCount);
    }

    // Form Validation and Local Storage
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        // Function to validate the form and save to Local Storage
        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form inputs
            const formData = {
                fname: document.getElementById("fname").value.trim(),
                lname: document.getElementById("lname").value.trim(),
                email: document.getElementById("email").value.trim(),
                subject: document.getElementById("subject").value.trim(),
                message: document.getElementById("message").value.trim(),
            };

            // Validate form fields
            const isValid = Object.values(formData).every(value => value);

            // Show success/error message
            if (isValid) {
                // Save to Local Storage
                localStorage.setItem("contactFormData", JSON.stringify(formData));
                formMessage.textContent = "Form submitted successfully!";
                formMessage.style.color = "green";

                // Optional: Clear form fields
                form.reset();
                updateCharacterCount(); // Reset character counter
            } else {
                formMessage.textContent = "Please fill in all the fields!";
                formMessage.style.color = "red";
            }
        }

        // Event Listener
        form.addEventListener("submit", handleFormSubmit);
    }
}
