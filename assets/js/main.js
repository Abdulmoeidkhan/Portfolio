localStorage.getItem("themeChoice") && $("#my-css").attr("href", localStorage.getItem("themeChoice")); $("checkbox");
$("#my-css").attr("href") === "assets/css/style.css" ? $("#checkbox").attr("Checked", true) : $("#checkbox").attr("Checked", false);
    (function ($) {

        $(document).ready(function () {
            $(document).on('click', '.header-area .show-menu', function () {
                $(this).toggleClass('active');
                $(".header-area .navbar").toggleClass('active');
            });
            // $(document).on('click', '.header-area .navbar .close-menu', function() {
            //     $(".header-area .navbar").removeClass('active');
            // });

            AOS.init({
                duration: 1500,
                once: true,
            })
        });

    })(jQuery);


var div = document.createElement("div");
div.id = "preloader",
    div.className = "preloader",
    div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div, document.body.firstChild), window.onload = function () {
        document.getElementById("preloader").classList.add("off")
    };

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    $("#my-css").attr("href", $("#my-css").attr("href") === "assets/css/style.css" ? "assets/css/style-light.css" : "assets/css/style.css");
    localStorage.setItem("themeChoice", `${$("#my-css").attr("href")}`);
})

