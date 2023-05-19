//your code here
const div = document.querySelector('div');

div.addEventListener('dragstart', (e)=>{
	// console.log(e.target);
	e.dataTransfer.setData('text/plain', e.target.id)
})

let images = document.querySelectorAll('.image');

images.forEach(image=>{
	image.addEventListener('dragenter', dragEnter);
	image.addEventListener('dragover', dragOver);
	image.addEventListener('dragleave', dragLeave);
	image.addEventListener('drop', drop);
})

function dragEnter(e){
	e.preventDefault();
	e.target.classList.add('selected');
}

function dragOver(e){
	e.preventDefault();
	e.target.classList.add('selected');
}

function dragLeave(e){
	e.target.classList.remove('selected');
	
}

function drop(e){
	e.target.classList.remove('selected');
	let id = e.dataTransfer.getData('text/plain');
	let dragged = document.getElementById(id);
	// console.log(dragged.innerText);
	let inner = dragged.innerText
	dragged.id = e.target.id;
	dragged.innerText = e.target.innerText;
	e.target.id = id;
	e.target.innerText = inner;
}




