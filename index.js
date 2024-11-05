/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("convert-btn")
const input = document.getElementById("input-el")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

btn.addEventListener("click", function() {
    number = Number(input.value)
    console.log(number)
    length.textContent = `${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters`
    volume.textContent = `${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters`
    mass.textContent = `${number} kilos = ${(number * 2.204).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilos`
})