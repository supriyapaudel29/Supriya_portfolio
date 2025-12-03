



document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = form.querySelector("input");

    if (input.value.trim() === "") {
        alert("Please write something before submitting!");
        return;
    }

    alert("Thank you for your message, Supi!");
    input.value = ""; // clear textbox
});


const profileImg = document.querySelector("#bio img");

profileImg.addEventListener("mouseover", () => {
    console.log("Profile image hovered.");
});

profileImg.addEventListener("mouseout", () => {
    console.log("Profile image un-hovered.");
});
