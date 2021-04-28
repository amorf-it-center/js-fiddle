// var a = document.createElement('div');
// a.innerHTML = 'vqe'
// a.style.color = 'red'
// a.style.padding = '15px'
// document.getElementsByTagName('body')[0].append(a)

// setTimeout(() =>{
//     a.innerHTML = 'Tge'
//     a.style.fontSize = '50px'
//     a.style.color = 'green'
//     a.style.padding = '20rem'
// }, 3000)

// setTimeout(() =>{
//     a.innerHTML = 'vzge'
//     a.style.fontSize = '50px'
//     a.style.color = 'green'
//     a.style.padding = '20rem'
// }, 6000)

// let x;
// let y;
// x = 5;
// y = "barev ";


// alert(x + 6 + y);
// debugger;
// let a = 4;
// let b = 5;
// let c = a + b - 5;
// let a1 = 5;
// let c2 = 8;
// alert(c+(a-(b+a1)));

// let name = prompt("what is youre name?");

// let lastname = prompt("what is your last name")

// alert("nice to meet you" + " " + name + " " + lastname);

// let x = 6;
// let y = 10;
// let z = true;
// let u = false; 
// let r = x <= y;
// alert(r);
// let x = prompt("how are you?");
// if(x === "good") {
//     alert("vay inch lava");
// }else{
//     alert("apsos aziz");
// }
// console.log(x);
// if(x == "good");{
// =goodg}

// debugger;
// let points = 0 ;

// let resp0 = prompt("what is the capital of Armenia");
// if(resp0 === "Yerevan"){
//     points = points + 1 ; 
// }

// let resp1 = prompt ("what is the capital of Russia");
// if(resp1 === "Moscow"){
//     points = points + 1 ;
// }

// let resp2 = prompt ("what is the capital of French");
// if(resp2 === "Paris"){
//     points = points + 1 ;
// }
// alert("you received" +points+ "out of 3");



// let x = prompt("what is yor name?");
// let z = prompt("what is your last name?");

// if (x === "hakob") {
//     if (z === "hakobyan") {
//         alert("vay inch lava aziz");
//     } else {
//         alert("ade braxi aziz");
//     }
// } else if (x === "anush") {
//     alert("barev anush");
// } else if (x === "vazgen") {
//     alert("barev vzg")
// } else {
//     alert("lav aziz hech");
// }

// let userResponse = +prompt("how old are you");

// if(userResponse > 18 && userResponse < 60) {
//     alert("yay tru");
// }


window.onload = () => {
	setTimeout(() => {
		document.querySelector('body').classList.add("display");
	},4000 );
}



const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx + 1))
});


document.querySelector(".hamburger-menu").addEventListener('click', () => {
	document.querySelector('.sidebar').classList.toggle("burger");
});

document.querySelector(".scroll-btn").addEventListener
("click",() => {
 document.querySelector("html").style.
 scrollBehavior = "smooth"; 
 setTimeout(() =>{
	 document.querySelector("html").style.scrollBehavior = "unset";
 },1000);
})
