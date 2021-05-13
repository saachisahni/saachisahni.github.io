/* This is written in the programming language JavaScript. It is used for
    behaviors and interactivity. Hovering over the images creates effects,
    clicking on images opens them along with the corresponding descriptions 
    and buttons, and clicking on a button opens a link to an article or an 
    organization's website. */

/* Author: Saachi Sahni
     Date: May 9, 2021 
     Shifting Sands - End of Semester Creative Assignment */

// selecting classes and making constants to loop over 
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img"); // multiple images 
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const button1 = document.querySelector(".button1");
const quote = document.querySelector(".quotes");
const takeaway = document.querySelector(".takeaways");

previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        console.log(originalSrc);
        original.src = `./fulls/${originalSrc}`; //assign variable
        const altText = preview.alt;
        const quoteText = preview.getAttribute("quote");
        const quoteLink = preview.getAttribute("quote-link");
        const quotePar = preview.getAttribute("paragraph1")
        const takeawayPar = preview.getAttribute("paragraph2")
        caption.textContent = altText;
        button1.textContent = quoteText;
        button1.setAttribute("href", quoteLink);
        quote.textContent = quotePar;
        takeaway.textContent = takeawayPar;
        console.log(button.textContent);
    });
});

modal.addEventListener("click", (e) => {
    console.log(e); // can use to track what events are triggered 
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});