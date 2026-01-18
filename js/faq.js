function toggleFAQ(element) {
    element.classList.toggle("active");
    let icon = element.querySelector(".icon");
    icon.innerHTML = element.classList.contains("active") ? "−" : "+";
}