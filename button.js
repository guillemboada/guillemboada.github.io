document.addEventListener("DOMContentLoaded", function() {
    // Get the button and the paragraph elements
    var button = document.getElementById("changeTextButton");
    var description = document.getElementById("description");

    // Add an event listener to the button
    button.addEventListener("click", function() {
        // Change the text of the paragraph
        description.textContent = "AI Research Engineer";
        // Hide the button
        button.style.display = "none";
    });
});