// console.log(document);
// const heading = document.querySelector("h1");
// console.log(heading);

// const value = document.querySelector(".value");
// console.log(value);

// const button = document.querySelector("button");
// console.log(button);

// const area = document.querySelector(".area");
// console.log(area);

// const desc = document.querySelector(".stat div");
// console.log(desc);

// const hello = document.querySelector(".hello");
// console.log(hello);

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const heading3List = document.querySelectorAll("h3");

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
//   }

//   // Get a list of all `<div>` elements with ratings
// const ratingList = document.querySelectorAll(".rating .value");

// // Iterate over the list and print each one
// for (let element of ratingList.values()) {
//   console.log(element);
// }

// const descriptions = document.querySelectorAll(".description");
// for (let desc of descriptions.values()) {
//   let content = desc.innerText;
//   console.log(content);
// }

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }

//   desc.innerHTML = content;
// }

// const ratings = document.querySelectorAll(".rating .value");
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);
//   if (ratingValue > 4.7) {
//     // rating.style.fontWeight = "bold";
//     // rating.style.fontWeight = "bold";
//     // rating.style.color = "#3ba17c";

//     rating.classList.add("high-rating");
//     rating.classList.remove("value");
//   }
// }

// const parks = document.querySelectorAll(".park");
// const numberParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// const header = document.querySelector("header");
// header.appendChild(newElement);

// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park");

// // Remove that park
// main.removeChild(park);

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event);
//   console.log(event.target);
// });

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rateBtn");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#nameSorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the name sorter");
  const mainElement = document.querySelector("main");
  const parksList = document.querySelectorAll(".park");
  mainElement.innerHTML = "";
  const parksArray = Array.from(parksList);
  
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    mainElement.appendChild(park);
  });
});

// // Select the `ratingSorter` link
// const ratingSorter = document.querySelector("#ratingSorter");

// // Add an event listener
// ratingSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("You clicked the rating sorter");
//   const mainElement = document.querySelector("main");
//   const parksList = document.querySelectorAll(".park");
//   mainElement.innerHTML = "";
//   const parksArray = Array.from(parksList);
  
//   parksArray.sort((parkA, parkB) => {
//     const parkARating = parkA.querySelector(".rating .value").innerText;
//     const parkBRating = parkB.querySelector(".rating .value").innerText;
//     if (parkARating < parkBRating) {
//       return -1;
//     } else if (parkARating > parkBRating) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     mainElement.appendChild(park);
//   });
// });

function nameSorterClickHandler(event)
{
  event.preventDefault();
  console.log("You clicked the name sorter");
  const mainElement = document.querySelector("main");
  const parksList = document.querySelectorAll(".park");
  mainElement.innerHTML = "";
  const parksArray = Array.from(parksList);
  
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    mainElement.appendChild(park);
  });
}

function ratingSorterClickHandler (event) 
{   event.preventDefault();
console.log("You clicked the rating sorter");
const mainElement = document.querySelector("main");
const parksList = document.querySelectorAll(".park");
mainElement.innerHTML = "";
const parksArray = Array.from(parksList);

parksArray.sort((parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating .value").innerText;
  const parkBRating = parkB.querySelector(".rating .value").innerText;
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
});


// 6. Insert each park into the DOM
parksArray.forEach((park) => {
  mainElement.appendChild(park);
});
}
// console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

// The code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#nameSorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#ratingSorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);