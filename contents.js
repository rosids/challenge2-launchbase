const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for(let card of cards) {
    card.addEventListener("click", function() {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}



document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove("maximize")
})


// document.querySelector(".fullscreen-modal").addEventListener("click", function () {
//     if (modal.classList.contains("maximize") ){
//         modal.classList.remove("maximize")
//     } else {
//         document.querySelector(".fullscreen-modal").addEventListener("click", function() {
//             modal.classList.add('maximize')
//         })
//     }
// })

document.querySelector(".fullscreen-modal").addEventListener("click", function () {
    modal.classList.toggle("maximize");
 })
