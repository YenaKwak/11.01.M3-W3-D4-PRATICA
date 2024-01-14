const bookmarkIcons = document.getElementsByClassName("bookmarkIcon");

for (const bookmarkIcon of bookmarkIcons) {
    bookmarkIcon.addEventListener('mouseover', function() {
        bookmarkIcon.classList.remove('fa-regular');
        bookmarkIcon.classList.add('fa-solid');
        bookmarkIcon.style.color = '#5a5d63';
    });

    bookmarkIcon.addEventListener('mouseout', function() {
        bookmarkIcon.classList.remove('fa-solid');
        bookmarkIcon.classList.add('fa-regular');
        bookmarkIcon.style.color = '#a8a3b9'; 
    });
}



const cardBlocks = document.querySelectorAll(".card-block");

cardBlocks.forEach((cardBlock) => {
    const cardInfo = cardBlock.querySelector(".card-info");

    cardBlock.addEventListener("mouseenter", () => {
        cardInfo.classList.add("show");
    });

    cardBlock.addEventListener("mouseleave", () => {
        cardInfo.classList.remove("show");
    });
});

