

const img = document.getElementById("img");
const price = document.getElementById("price");
const description = document.getElementById("description");
const condition = document.getElementById("condition");
const city = document.getElementById("city");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const flats = {
        city: city.value,
        description: description.value,
        condition: condition.value,
        price: price.value,                       
        image: img.value,
    };
    if (!flats.city || !flats.description || !flats.condition || !flats.price || !flats.image) {
        messageError.textContent = "Please fill in all fields.";
        return;
    }
   console.log(flats);
   

fetch("https://666165aa63e6a0189fe99a3f.mockapi.io/flats", {
    method: "POST",
    headers: {
        Accept:"application/json", "Content-Type": "application/json",
    },
    body: JSON.stringify(flats),
})
    .then((response) => {
    if (!response.ok) {
          throw new Error(`HTTP klaida! statusas: ${response.status}`);
    }
    return response.json();
})
.then((response) => {
    console.log(response);
    message.textContent = "Yuor ad is published!";
    setTimeout(() => {
        window.location.replace("index.html");
    }, 2000);
})
.catch((err) => {
    console.log(err);
    messageError.textContent = "You have entered incorrectly!!!";
});
});