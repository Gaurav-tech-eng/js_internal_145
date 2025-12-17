// Select DOM elements
const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

// Criterion 3: Event Handling (submit event)
form.addEventListener('submit', function(event) {
    
    // Criterion 3: preventDefault() to stop reload
    event.preventDefault(); 

    // Get input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const courseInput = document.getElementById('course');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const courseValue = courseInput.value;

    // Reset error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('courseError').style.display = 'none';

    let isValid = true;

    // --- Criterion 2: JavaScript Validation ---
    
    // 1. Empty Check (Name)
    if (nameValue === "") {
        showError('nameError', "Name cannot be empty.");
        isValid = false;
    }

    // 2. Email Format Validation (Regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailValue)) {
        showError('emailError', "Please enter a valid email.");
        isValid = false;
    }

    // 3. Selection Validation (Course)
    if (courseValue === "") {
        showError('courseError', "Please select a course.");
        isValid = false;
    }

    // If all validations pass, proceed to DOM Manipulation
    if (isValid) {
        addStudentToTable(nameValue, emailValue, courseValue);
        form.reset(); // Clear form after submission
        alert("Student Registered Successfully!");
    }
});

// Helper function to show errors
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

// Criterion 4: DOM Manipulation (Dynamic output without reload)
function addStudentToTable(name, email, course) {
    // Create a new table row
    const newRow = document.createElement('tr');

    // Create cells for Name, Email, and Course
    const nameCell = document.createElement('td');
    nameCell.innerText = name;

    const emailCell = document.createElement('td');
    emailCell.innerText = email;

    const courseCell = document.createElement('td');
    courseCell.innerText = course;

    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(courseCell);

    // Append the row to the table body
    studentList.appendChild(newRow);
}
