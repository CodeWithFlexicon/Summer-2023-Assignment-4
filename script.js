// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

// Array of predefined poster objects
const posters = [
  {
    image:
      "https://www.toptensthings.com/wp-content/uploads/2011/12/9.-Food.jpg",
    title: "Hungry Hungry Cat",
    quote: "You are not you when you are hungry",
  },
  {
    image:
      "https://i.pinimg.com/originals/b9/7a/be/b97abe7878595d010ef2e1ee75170dda.jpg",
    title: "Persistence",
    quote: "If you keep at it, you will achieve different results",
  },
  {
    image:
      "https://webneel.com/daily/sites/default/files/images/daily/05-2014/5-inspirational-posters.jpg",
    title: "Never Give Up",
    quote: "Failure is just another step towards your success",
  },
  {
    image:
      "https://assets.entrepreneur.com/slideshow/10-motivational-posters-teamwork.jpg?auto=webp&quality=95&&width=675",
    title: "Teamwork",
    quote:
      "Sometimes it's okay to rely on others and become a team towards a common goal",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/61+8tb4lwkL._AC_UF894,1000_QL80_.jpg",
    title: "Determination",
    quote:
      "It might have been difficult but it is always worth it when it's a personal goal",
  },
  {
    image:
      "https://static.displate.com/280x392/displate/2022-03-25/b1133fa9b2b88ddde6f58e195d0ebf5f_54e5856f01a992004af06dd0f15a5709.jpg",
    title: "The Mindset",
    quote: "When you are truly set on becoming better, this is your mindset",
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked

// Function to generate a random poster
function generateRandomPoster() {
  console.log(posters);
  let randomIndex = Math.floor(Math.random() * posters.length);
  let randomPoster = posters[randomIndex];
  console.log(randomPoster);
  // TODO: Generate a random index within the range of the posters array length
  // TODO: Retrieve the random poster object from the posters array
  // TODO: Call the function to update the DOM with the values from the random poster object
  updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);
}

let posterRandomize = document.getElementById("randomize");
console.log(posterRandomize);
posterRandomize.addEventListener("click", (event) => {
  event.preventDefault();
  generateRandomPoster();
});

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();

  // TODO: Retrieve the entered quote and author from the input fields
  const newPosterQuote = document.getElementById("poster-form-quote").value;
  const newPosterTitle = document.getElementById("poster-form-title").value;

  /*   console.log("New Quote: " + newPosterQuote);
  console.log("New Title: " + newPosterTitle); */

  // TODO: Create a custom poster object with the entered values
  let randomIndex = Math.floor(Math.random() * posters.length);
  //let randomImage = posters[randomIndex].image;
  let userImage = document.getElementById("poster-form-imageUrl").value;
  const newPoster = {
    image: userImage,
    title: newPosterTitle,
    quote: newPosterQuote,
  };
  // TODO: Call the function to update the DOM with the values from the custom poster object
  posters.push(newPoster);
  updatePoster(newPoster.image, newPoster.title, newPoster.quote);
}

let submitPoster = document.getElementById("submit");
submitPoster.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    document.getElementById("poster-form-quote").value === "" ||
    document.getElementById("poster-form-title").value === "" ||
    document.getElementById("poster-form-imageUrl").value === ""
  ) {
    alert("Please fill out all required field(s)");
  } else {
    generateCustomPoster(event);
    document.forms[`poster-form`].reset();
  }
});

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
  // TODO: Update the DOM with the values provided for the poster image, title, and quote
  document.getElementById("poster-image").src = imageUrl;
  document.getElementById("poster-title").textContent = title;
  document.getElementById("poster-quote").textContent = quote;
}
