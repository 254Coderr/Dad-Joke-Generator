// Get references to the button, joke display and laoding spinner elements in the HTML
const btnElement = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const loadingSpinner = document.getElementById("loadingSpinner");
 // Define the API key for the dad jokes API (assuming it's a placeholder for a real key)
 const apiKey = "YVguAG6KmqXoRqPZhaOMRQ==KQIqDVyCj3wTYZx5";
 // Define the options for the API request, included the API key in the headers
const options = {
    method: "GET",
    headers: {
        "X-Api-key":"YVguAG6KmqXoRqPZhaOMRQ==KQIqDVyCj3wTYZx5",
    },
};

// Define the URL of the dad jokes API
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

// Define an asynchronous function to fetch and display a dad joke
async function getJoke() {
    try {
        // Show the loading spinner
        loadingSpinner.style.display = "block";
        // Update the joke display with a loading message
        jokeEl.innerText = "Updating...";
        // Disable the button during the request
        btnElement.disabled = true;
        btnElement.innerText = "Loading...";

        // Fetch a dad joke from the API using the specified options
        const response = await fetch(apiUrl, options);

        if (response.ok) {
            // If the response is successful, parse the JSON data
            const data = await response.json();

            // Enable the button and update the joke display with the retrieved joke
            btnElement.disabled = false;
            btnElement.innerText = "Tell me a joke";
            jokeEl.innerText = data[0].joke;
        } else {
            // If the response is not successful, throw an error
            throw new Error("Response not OK");
        }
        // Handle any errors that come during the fetch operation
    } catch (error) {
        
        // Update the joke display with an error message
        jokeEl.innerText = "An error happened, try again later!";
    } finally {
        // Hide the loading spinner regardless of success or failure
        loadingSpinner.style.display = "none";
        // Enable the button again
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
    }
}

// Add a click event listener to the button element to activate the getJoke function
btnElement.addEventListener("click", getJoke);