"use strict";

// Add mouseover and mouseleave event listeners to titles
const titles = document.querySelectorAll(".collection-text");
titles.forEach(titleElement => {
    const prevState = titleElement.innerHTML;
    titleElement.addEventListener("mouseover", () => {
        titleElement.innerHTML = `${prevState} --->`;
    });
    titleElement.addEventListener("mouseleave", () => {
        titleElement.innerHTML = prevState;
    });
});

const products = [
    {
        price: "$138' 00",
        imageSrc: "img/product1.png",
        title: "Brianna Wrap Maxi Dress"
    },
    {
        price: "$138' 00",
        imageSrc: "img/product2.png",
        title: "Brianna Wrap Maxi Dress"
    } 
    ,
    {
        price: "$138' 00",
        imageSrc: "img/product3.png",
        title: "Brianna Wrap Maxi Dress"
    } 
    ,
    {
      price: "$138' 00",
      imageSrc: "img/product4.png",
      title: "Brianna Wrap Maxi Dress"
  } ,
   
];

// const latestArrivals = document.getElementById("product0");
// latestArrivals.innerHTML = products.map(({ price, imageSrc, title }, index) => {
//     return `
//         <div class="product">
//             <img src="${imageSrc}" alt="${title}" />
//             <div class="star">
//                 <p>${title}</p>
//                 <span>${price}</span>
//                 <img src="img/star2.png" alt="Star" />
//             </div>
//             <button class="CHOOSE-OPTIONS">CHOOSE OPTIONS</button>
//         </div>
//     `;
// }).join('');

document.addEventListener('DOMContentLoaded', () => {
    let navBtns = document.querySelectorAll('#x-id, #open-nav'); // Combined selectors
    let navMenuMobile = document.querySelector('#menu');
    navBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (document.querySelector("#menu").hasAttribute('open')) {
                document.querySelector("#menu").removeAttribute('open')
            } else {
                document.querySelector("#menu").setAttribute('open')
            }
        });
    });
});

// x icon??/
//  function onClickMenu(){
//      document.getElementById("menu").classList.toggle("x-icon")
//      document.getElementById("x-id").classList.toggle("change")
//  }       