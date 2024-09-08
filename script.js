const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd276b00170mshc30c698a20af444p199a6djsnfe4f8ebb3eb3',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            // Clear previous definition
            const wordHeading = document.getElementById('wordheading');
            const definitionElement = document.getElementById('definition');
            
            // Display word heading
            wordHeading.innerHTML = response.word;

            // Formatting the definition for better readability
            let definitionText = response.definition
                .replace("2.", "<br><span>2.</span>")
                .replace("3.", "<br><span>3.</span>")
                .replace("4.", "<br><span>4.</span>");
                
            definitionElement.innerHTML = `<p>${definitionText}</p>`;
        })
        .catch(err => console.error(err));
};

document.getElementById('search').addEventListener("click", (e) => {
    e.preventDefault();
    const word = document.getElementById('searchinput').value;
    dictionary(word);
});

function openAuthorContact() {
    window.location.href = 'mailto:atiquebilal050@gmail.com';
}

function openContributionForm() {
    window.open('https://github.com/MuhammadBilalAtique', '_blank');
}
