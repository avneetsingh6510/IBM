function toggleDetails(button) {
  var details = button.nextElementSibling;
  if (details.style.display === "none") {
    details.style.display = "block";
    button.querySelector("span").textContent = "Hide Details";
  } else {
    details.style.display = "none";
    button.querySelector("span").textContent = "Show Details";
  }
}
