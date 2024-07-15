// Function to check if the input string is a palindrome
function checkPalindrome() {
    // Get the input value
    const inputString = document.getElementById('inputString').value;
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = inputString.replace(/[\W_]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');
    // Get the result div
    const resultDiv = document.getElementById('result');
    // Get the image element
    const palindromeImage = document.getElementById('palindromeImage');

    // Check if the string is a palindrome
    if (cleanedString === reversedString) {
        // Display palindrome message
        resultDiv.innerHTML = `"${inputString}" is a palindrome!`;
        // Set result text color to green
        resultDiv.style.color = 'green';
        // Set the source of the yes image
        palindromeImage.src = 'yes.jpg';
    } else {
        // Display non-palindrome message
        resultDiv.innerHTML = `"${inputString}" is not a palindrome.`;
        // Set result text color to red
        resultDiv.style.color = 'red';
        // Set the source of the no image
        palindromeImage.src = 'no.jpg';
    }

    // Show the image
    palindromeImage.style.display = 'block';
    // Show the reset button
    document.getElementById('resetButton').style.display = 'inline';
}

// Function to reset the input and result
function resetInput() {
    // Clear the input field
    document.getElementById('inputString').value = '';
    // Clear the result message
    document.getElementById('result').innerHTML = '';
    // Hide the image
    document.getElementById('palindromeImage').style.display = 'none';
    // Hide the reset button
    document.getElementById('resetButton').style.display = 'none';
}




  