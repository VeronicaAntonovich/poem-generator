function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2ff7dtfa19c19dd1af4e21073fb09o3c";
  let context =
    "You are a chief and love to cook. You mission is to generate a short recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning. Do not show html at the beginning. Use <strong> element for Ingredients and Instractions. Include the title of the recipe.";
  let prompt = `User instructions: Generate recipe with ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a recipe including ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
