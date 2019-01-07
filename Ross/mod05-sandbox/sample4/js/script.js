let btn = document.querySelector('#btn');
btn.addEventListener("click", getInput);


function getInput() {
	let input1 = document.querySelector("#input1").value;

	if(input1 == String) {
		if(input1>10){
			console.log("Input is greater than 10")
		}else if(input1==10){
			console.log("Input is equal to 10")
		}else {
			console.log("Input is lesser than 10")
		}
	}else{
		console.log("ERROR!!")
	}
}	

