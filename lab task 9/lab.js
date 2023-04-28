// Handle form submission
document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let searchQuery = document.getElementById("search-query").value;
  fetchSearchResults(searchQuery);
});

// Send AJAX request to fetch search results
function fetchSearchResults(query) {
  fetch(/search?q=${query})
    .then(response => response.json())
    .then(data => displaySearchResults(data))
    .catch(error => console.error(error));
}

// Display search results
function displaySearchResults(results) {
  let searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = "";
  results.forEach(result => {
    let resultDiv = document.createElement("div");
    resultDiv.innerText = result.title;
    searchResultsDiv.appendChild(resultDiv);
  });
}

// Handle AJAX request for search
app.get("/search", function(req, res) {
  let query = req.query.q;
  let results = searchDatabase(query);
  res.json(results);
});