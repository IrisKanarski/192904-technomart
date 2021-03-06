var link = document.querySelector(".link-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var mapOpen = document.querySelector(".maps img");
var mapPopup = document.querySelector(".modal-content-map");
if (mapPopup != null)
    var mapClose = mapPopup.querySelector(".modal-content-close");
var left = document.querySelector(".gallery-left");
var right = document.querySelector(".gallery-right");
var gallery1 = document.querySelector(".gallery-1");
var gallery2 = document.querySelector(".gallery-2");
var sliderleft = document.querySelector(".slider i:nth-child(1)");
var sliderright = document.querySelector(".slider i:nth-child(2)");
var delivery = document.querySelector(".services-delivery");
var warranty = document.querySelector(".warranty");
var credit = document.querySelector(".credit");
var menu1 = document.querySelector(".services-menu a.delivery-link");
var menu2 = document.querySelector(".services-menu a.warranty-link");
var menu3 = document.querySelector(".services-menu a.credit-link");
if (popup != null)
    var form = popup.querySelector("form");
var buy = document.getElementsByClassName("buy");
var cart = document.querySelector(".cart-modal");
var cartclosecontinue = document.querySelector(".cart-modal .continue");
var cartclose = cart.querySelector(".modal-content-close");

if (left != null)
    left.addEventListener("click", function(move) {
        gallery1.classList.toggle("active");
        gallery2.classList.toggle("active");
        sliderleft.classList.toggle("active");
        sliderright.classList.toggle("active");
    });
if (right != null)
    right.addEventListener("click", function(move) {
        gallery1.classList.toggle("active");
        gallery2.classList.toggle("active");
        sliderleft.classList.toggle("active");
        sliderright.classList.toggle("active");
    });
if (sliderleft != null)
    sliderleft.addEventListener("click", function(move) {
        gallery1.classList.toggle("active");
        gallery2.classList.toggle("active");
        sliderleft.classList.toggle("active");  
        sliderright.classList.toggle("active");
    });
if (sliderright != null)
    sliderright.addEventListener("click", function(move) {
        gallery1.classList.toggle("active");
        gallery2.classList.toggle("active");
        sliderleft.classList.toggle("active");
        sliderright.classList.toggle("active");
    });    
if (link != null)
    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
    });
if (close != null)
    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
    });
if (mapOpen != null)
    mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
    });
if (mapClose != null)
    mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
    });
if (buy != null)
    for (var i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function(event) {
            event.preventDefault();
            cart.classList.add("modal-content-show");
        });
    }
if (close != null)
    close.addEventListener("click", function(event) {
        event.preventDefault();
        cart.classList.remove("modal-content-show");
    });
if (cartclosecontinue != null)
    cartclosecontinue.addEventListener("click", function(event) {
        event.preventDefault();
        cart.classList.remove("modal-content-show");
    });
if (cartclose != null)
    cartclose.addEventListener("click", function(event) {
        event.preventDefault();
        cart.classList.remove("modal-content-show");
    });
if (menu1 != null)
    menu1.addEventListener("click", function(event){
        event.preventDefault();
        Array.from(document.querySelectorAll(".services .active")).forEach(function(item, i, arr){ item.classList.remove("active");});
        menu1.classList.add("active");
        delivery.classList.add("active");
    });
if (menu2 != null)
    menu2.addEventListener("click", function(event){
        event.preventDefault();
        Array.from(document.querySelectorAll(".services .active")).forEach(function(item, i, arr){ item.classList.remove("active");});
        menu2.classList.add("active");
        warranty.classList.add("active");
    });
if (menu3 != null)
    menu3.addEventListener("click", function(event){
        event.preventDefault();
        Array.from(document.querySelectorAll(".services .active")).forEach(function(item, i, arr){ item.classList.remove("active");});
        menu3.classList.add("active");
        credit.classList.add("active");
    });
if (form != null)
    form.addEventListener("submit", function(event) {
        var name = popup.querySelector("[name=name]");
        var email = popup.querySelector("[name=email]");
        if (!name.value || !email.value) {
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }
    });
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
            mapPopup.classList.remove("modal-error");
        }
        if (cart.classList.contains("modal-content-show")) {
            cart.classList.remove("modal-content-show");
            cart.classList.remove("modal-error");
        }
    }
});