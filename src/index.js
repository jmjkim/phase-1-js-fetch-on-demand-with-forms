const init = () => {
  console.log('DOM load completed.');
  
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', event => {
      // Prevent web page to refresh (default behavior) after submitting a form.
      event.preventDefault()
    
      // Getting input value.
      const input = document.querySelector('input#searchByID');
      console.log(event);
      console.log('Input Value: ', input.value);

      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            // Using json.fied data to display on the web page
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title
            summary.innerText = data.summary;
        })
    });
}
document.addEventListener('DOMContentLoaded', init);
