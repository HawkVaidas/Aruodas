


 const cardsWrapper = document.getElementById("wrapper");
 const goodBtn = document.getElementById("good-btn");
 const midiumBtn = document.getElementById("midium-btn");
 const badBtn = document.getElementById("bad-btn");
 const allflatsBtn = document.getElementById("allflats-btn");
 

let allflats = [];

const buildCards = (data) => {
    cardsWrapper.innerHTML = "";                             

    flats.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  fetchAllFlats();
  console.log(flats);
   


    data.forEach((d) => {
        const card = document.createElement("a");                
        card.href = `../flat/flat.html?id=${d.id}`;                
        card.setAttribute("class", "card")

        const img = document.createElement("img");
        img.src = d.image;
        const city = document.createElement("h3");
        city.textContent = d.city;
        const price = document.createElement("h2");
        price.textContent = `${d.price}$`;
        const description = document.createElement("p");
        description.textContent = d.description;
        card.append(img, city, description, price);
        cardsWrapper.append(card);
    });
};

const fetchAllFlats = async () => {
    try{
    const response = await fetch("https://666165aa63e6a0189fe99a3f.mockapi.io/flats");
    const flats = await response.json();
    return flats;
    } catch(err) {
    console.log(err);
}
};
const flats = await fetchAllFlats();
buildCards(flats);

goodBtn.addEventListener("click" ,() => {
    const goodFlats = flats.filter((f) => f.condition === "GOOD");
    buildCards(goodFlats);
});

midiumBtn.addEventListener("click" ,() => {
    const midiumFlats = flats.filter((f) => f.condition === "MIDIUM");
    buildCards(midiumFlats);
});

badBtn.addEventListener("click" ,() => {
    const badFlats = flats.filter((f) => f.condition === "BAD");
    buildCards(badFlats);
});

allflatsBtn.addEventListener("click" ,() => {
    buildCards(flats);
});


//===================================================================

const burgerButton = document.getElementById("burger-btn");
const mobileBar = document.getElementById("mobile-bar");
burgerButton.addEventListener("click", () => {
    mobileBar.classList.toggle("active");
});



