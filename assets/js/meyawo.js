/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

var moreInfoBtns = document.querySelectorAll(".more-info-button");

moreInfoBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var card = this.parentNode;
    var content = card.querySelector(".card-content");
    const downArrow = card.querySelector("#down-arrow");
    const upArrow = card.querySelector("#up-arrow");
    content.style.display = "block";
    content.classList.toggle("expanded");
    if (content.classList.contains("expanded")) {
      downArrow.style.display = "none";
      upArrow.style.display = "block";
    } else {
      content.style.display = "none";
      downArrow.style.display = "block";
      upArrow.style.display = "none";
    }
  });
});

const moreInfoCardBtns = document.querySelectorAll(".about-more-info");
moreInfoCardBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const card = this.parentNode.parentNode;
    console.log(card);
    const content = card.querySelector(".about-card-content");
    const downArrow = card.querySelector("#arrow-down-btn");
    const upArrow = card.querySelector("#arrow-up-btn");

    content.style.display = "block";
    content.classList.toggle("expanded");
    if (content.classList.contains("expanded")) {
      downArrow.style.display = "none";
      upArrow.style.display = "block";
    } else {
      content.style.display = "none";
      downArrow.style.display = "block";
      upArrow.style.display = "none";
    }
  });
});
