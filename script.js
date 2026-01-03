// your code here
const btn = document.querySelector("#button")
const name = document.querySelector("#name")
const year = document.querySelector("#year")
const h3 = document.querySelector("#url")
btn.addEventListener("click",(e) => {
e.preventDefault()
	let n = name.value
	let y = year.value
	h3.innerText = `https://localhost:8080/?name=${n}&year=${y}`
})