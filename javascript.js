function toggleLayout() {
    var featureSection = document.getElementById("feature");
    featureSection.classList.toggle("grid-layout");
}
const heartButton = document.getElementById("heart-button");
const heartIcon = document.getElementById("heart-icon");
const problem = document.querySelector(".problem");

heartButton.addEventListener("click", () => {
    problem.classList.toggle("open");
});