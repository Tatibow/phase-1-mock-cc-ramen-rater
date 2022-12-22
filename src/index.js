let currentRamen;

const url = "http://localhost:3000/ramens"

const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(ramenData => {
        ramenData.map(ramen => {
            currentRamen = ramen;
            renderMenu(currentRamen);
        })
    })
}

getData();


const ramenMenu = document.querySelector("div#ramen-menu")
function renderMenu(ramen) {
 const ramenImg = document.createElement("img");
 ramenImg.src = ramen.image;
 ramenImg.alt = `${ramen.title} image unavailable`
 ramenImg.id = ramen.id;

 ramenImg.addEventListener("click", () => {
    currentRamen = ramen;
    ramenDetails(currentRamen);
 })

 ramenMenu.append(ramenImg);
}

const detailImg = document.querySelector("img.detail-image");
const ramenName = document.querySelector("h2.name");
const restaurant = document.querySelector("h3.restaurant");
const rating = document.querySelector("span#rating-display");
const comment = document.querySelector("p#comment-display");

function ramenDetails(ramen) {
    detailImg.src = ramen.image;
    detailImg.alt = `${ramen.title} image unavailable`;
    ramenName.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;
}

const form = document.querySelector("form#new-ramen");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    postAddNewRamen();
    form.reset();
})

const inputName = document.querySelector("input#new-name")
const inputRestaurant = document.querySelector("input#new-restaurant")
const inputImage = document.querySelector("input#new-image")
const inputRating = document.querySelector("input#new-rating")
const inputComment = document.querySelector("textarea#new-comment")


const postAddNewRamen = () => {
  const formData = {
    name: inputName.value,
    restaurant: inputRestaurant.value,
    image: inputImage.value,
    rating: inputRating.value,
    comment: inputComment.value
  }
  renderMenu(formData);
}




































// DON'T LOOK DOWN TRY TO DEBUG!! (LAST RESORT)
















// LAST CHANCE!








//const url = "http://localhost:3000/ramens";

// let currentRamen;
// let globalRamen = -1
// const getData = () => {
//     fetch(url)
//         .then(res => res.json())
//         .then(ramenData => {
//             ramenData.map(ramen => {
//                 currentRamen = ramen;
//                 renderRamenMenu(currentRamen);
//             })
//             renderRamenDetails(ramenData[0]);
//             globalRamen = ramenData[0].id
//         })
// }
// getData();

// const ramenMenu = document.querySelector("div#ramen-menu")


// function renderRamenMenu(ramen) {
//     const ramenImg = document.createElement("img");
//     ramenImg.src = ramen.image;
//     ramenImg.alt = `${ramen.name} image not found`
//      ramenImg.id =`id${ramen.id}`

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete Ramen";

//     deleteBtn.addEventListener("click", () => {
//         removeRamen(ramenImg);
//         deleteBtn.remove();
//     })

//     ramenImg.addEventListener("click", () => {
//         currentRamen = ramen;
//         globalRamen = currentRamen.id;
//         renderRamenDetails(currentRamen);
//     })




//     if (ramenMenu !== deleteBtn) {
//         ramenMenu.append(deleteBtn);
//     }
//     ramenMenu.append(ramenImg);
// }


// const detailImg = document.querySelector("img.detail-image")
// const ramenName = document.querySelector("h2.name")
// const restaurant = document.querySelector("h3.restaurant")
// const rating = document.querySelector("span#rating-display")
// const comment = document.querySelector("p#comment-display")

// function renderRamenDetails(ramen) {
//     detailImg.src = ramen.image;
//     detailImg.alt = `${ramen.name} image not found`;
//     ramenName.textContent = ramen.name;
//     restaurant.textContent = ramen.restaurant;
//     rating.textContent = ramen.rating;
//     comment.textContent = ramen.comment;

// }


// const form = document.querySelector("form#new-ramen");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     postAddNewRamen();
//     form.reset();
// })

// const inputName = document.querySelector("input#new-name")
// const inputRestaurant = document.querySelector("input#new-restaurant")
// const inputImage = document.querySelector("input#new-image")
// const inputRating = document.querySelector("input#new-rating")
// const inputComment = document.querySelector("textarea#new-comment")


// const postAddNewRamen = () => {
//     let formData = {
//         name: inputName.value,
//         restaurant: inputRestaurant.value,
//         image: inputImage.value,
//         rating: inputRating.value,
//         comment: inputComment.value
//     }

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(res => res.json())
//         .then(data => renderRamenMenu(data))
// }

// const updateForm = document.querySelector("form#edit-ramen");
// updateForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     patchRamenUpdate(e);
// })

// const patchRamenUpdate = (e) => {
//     const id = e.target.id;
//     currentRamen.rating = e.target["new-rating"].value
//     rating.textContent = currentRamen.rating;

//     currentRamen.comment = e.target["new-comment"].value;
//     comment.textContent = currentRamen.comment;

//     fetch(`${url}/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             rating: currentRamen.rating,
//             comment: currentRamen.comment,
//         })
//     })
//         .then(res => res.json())
//         .catch(error => error.message)
// }


// const removeRamen = () => {

// document.querySelector(`#ramen-menu #id${globalRamen}`).remove()

//     fetch(`${url}/${globalRamen}`, {
//         method: "DELETE",
//     })
//     .then(res => res.json())
//     .then(data => { //use if res.ok for side effect
//         //clear ramen details divs
//         showDetails({
//             image: '',
//             rating: 0,
//             restaurant: '',
//             name: '',
//             comment: ''
//         })
//     })
// }
