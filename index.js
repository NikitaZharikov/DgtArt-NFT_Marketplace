let searchIcon = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6666 19.25C15.8548 19.25 19.25 15.8548 19.25 11.6666C19.25 7.47849 15.8548 4.08331 11.6666 4.08331C7.47849 4.08331 4.08331 7.47849 4.08331 11.6666C4.08331 15.8548 7.47849 19.25 11.6666 19.25ZM11.6666 21C16.8213 21 21 16.8213 21 11.6666C21 6.51199 16.8213 2.33331 11.6666 2.33331C6.51199 2.33331 2.33331 6.51199 2.33331 11.6666C2.33331 16.8213 6.51199 21 11.6666 21Z" fill="#7D7D7D" />
    <path d="M17.2007 18.4381C16.859 18.0964 16.859 17.5424 17.2007 17.2007C17.5424 16.859 18.0964 16.859 18.4381 17.2007L25.0199 23.7825C25.3616 24.1242 25.3616 24.6782 25.0199 25.0199C24.6782 25.3616 24.1242 25.3616 23.7825 25.0199L17.2007 18.4381Z" fill="#7D7D7D" />
</svg>`;

let resetIcon = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" stroke="#7D7D7D" stroke-width="2" />
    <rect x="9.05023" y="10.4645" width="2" height="12" rx="1" transform="rotate(-45 9.05023 10.4645)" fill="#7D7D7D" />
    <rect x="17.5355" y="9.05023" width="2" height="12" rx="1" transform="rotate(45 17.5355 9.05023)" fill="#7D7D7D" />
</svg>`;

document.querySelectorAll(".search-icon").forEach(function (el) {
    el.innerHTML = searchIcon;

    let inp = el.parentElement.querySelector(".top-search");

    el.onclick = function () {
        inp.value = "";
    };
});

document.querySelectorAll(".reset-icon").forEach(function (el) {
    el.innerHTML = resetIcon;

    let inp = el.parentElement.querySelector(".top-search");

    el.onclick = function () {
        inp.value = "";
    };
});