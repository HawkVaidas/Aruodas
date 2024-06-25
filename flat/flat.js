
const img = document.getElementById("flat-img");
const city = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");
const condition = document.getElementById("condition");
const indicator = document.getElementById("indicator");
const deleteBtn = document.getElementById("delete-btn");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")

const fetchFlatById = async () => {
    try{
    const response = await fetch(`https://666165aa63e6a0189fe99a3f.mockapi.io/flats/${id}`);

    const flats = await response.json();
    return flats;
    } catch (err) {
    console.log(err);
}
};

const deleteFlat = async (flatId) => {
    try{
        const response = await fetch(`https://666165aa63e6a0189fe99a3f.mockapi.io/flats/${flatId}`,
        {
            method: "DELETE",
        }
        );
         await response.json();
        console.log("Card was removed");
        setTimeout(() => {
            window.location.replace("../flats1/flats.html");
        }, 1000);
        
        } catch(err) {
        console.log(err);
    }
};
deleteBtn.addEventListener("click", () =>deleteFlat(id))

//====================================


const flat = await fetchFlatById();

img.src = flat.image;
city.textContent = flat.city;
price.textContent = `${flat.price}$`;
description.textContent = flat.description;
condition.textContent = flat.condition;
indicator.classList.add(flat.condition);