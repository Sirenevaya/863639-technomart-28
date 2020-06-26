+function () {

    document.querySelector(".services-controls a").classList.add("active");
    document.querySelector(".services-item").classList.add("active");

    function selectPanel(e) {
        var target = e.target.dataset.target;

        document.querySelectorAll(".services-controls a, .services-item").forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        document.querySelector("." + target).classList.add("active");
    }

    document.querySelectorAll(".services-controls a").forEach(el => {
        el.addEventListener("click", selectPanel);
    });
}();