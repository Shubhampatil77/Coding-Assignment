function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[type=checkbox]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if all fields are filled
    if (!firstName || !lastName || !dob || !country || genderElements.length === 0 || !profession || !email || !mobile) {
        alert('Please fill in all the fields.');
        return;
    }

    // Build the popup content
    const popupContent = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${Array.from(genderElements).map(checkbox => checkbox.value).join(', ')}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
    `;

    // Display the popup
    const popup = document.getElementById('popup');
    const popupContentElement = document.getElementById('popup-content');
    popupContentElement.innerHTML = popupContent;
    popup.style.display = 'flex';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
