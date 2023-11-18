async function query(data,name) {
	const response = await fetch(
		"https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
		{
			headers: { 
				"Accept": "image/png",
				"Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
				"Content-Type": "application/json" 
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	).then(async (response)=>{
		if (!response.ok) {
			throw new Error('Network error');
		}
		await response.blob().then((result)=>{
			document.querySelector(name).src = URL.createObjectURL(result);
		});
	}).catch((error)=>{
		console.log(error);
	})
	
}

const comicForm = document.querySelector('form')

const search = document.getElementById('in1')

let i = 1;

comicForm.addEventListener('submit',(e)=> {
	e.preventDefault()
	var form = e.target;
	var submitButton = document.getElementById('submit');
	submitButton.disabled = true;
		
	// Loop through form elements and log their values
	for (var i = 0; i < form.elements.length; i++) {
		if (form.elements[i].type !== "submit") {
			let name = ".myImage" + (i+1).toString()
			document.querySelector(name).src = '../img/loading.png';
			try{
				query({"inputs": form.elements[i].value},name)
			}catch(e){
				// console.log(e);
			}
		}
	}
})

