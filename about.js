console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
	

const photoCompliment = document.querySelector('img#rubberduck');

photoCompliment.addEventListener('mouseover', (event) => {
alert('You are awesome!');
})
