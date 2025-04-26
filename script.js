// Change text content dynamically
document.getElementById('change-text').addEventListener('click', function() {
    document.getElementById('text-content').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('change-style').addEventListener('click', function() {
    document.getElementById('text-content').style.color = 'blue';
    document.getElementById('text-content').style.fontSize = '20px';
});

// Add an element when a button is clicked
document.getElementById('add-element').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.id = 'new-element';
    newElement.textContent = "This is a new element!";
    document.body.appendChild(newElement);
});

// Remove an element when a button is clicked
document.getElementById('remove-element').addEventListener('click', function() {
    const element = document.getElementById('new-element');
    if (element) {
        element.remove();
    }
});
