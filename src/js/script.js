// Sign Up Popup
$(".openPopup").click(function () {
    $(".popupOverlay, .popupContent").addClass("active")
})
$(".closepopup").click(function () {
    $(".popupOverlay, .popupContent").removeClass("active")
})

//Log in Handler
$(".openPopupLogin").click(function () {
    $(".log-in-form").removeClass("hide")
    $(".sign-up-form").addClass("hide")
})
$(".closePopupLogin").click(function () {
    $(".log-in-form").addClass("hide")
    $(".sign-up-form").removeClass("hide")
})
// Json Loader for Products
let products = null;
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

function addDataToHTML() {
    let listProductHTML = document.querySelector('.cardsLoader');

    {
        products.forEach(product => {
            let newProduct = document.createElement('li');
            newProduct.href = './details.html?id=' + product.id;
            newProduct.classList.add('card');
            newProduct.innerHTML =
                `<a href="${newProduct.href}"><img src="${product.image}" alt="None">
       <span>${product.name}</span>
       <span class="price">${product.price} EGP</span></a>`;
            listProductHTML.appendChild(newProduct);

        });
    }
}

//Owl Carousel
$(document).ready(function () {
    let one = $(".carousel");
    owlCarousel({
        items: 1,
        margin: 20,
        dots: false,
        nav: true,
        loop: true,
    })
})