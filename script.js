//Gebruik een click event en "attach" het click event aan de button
//Wanneer er op de button geklikt wordt, geef een alert: "button clicked" (net zoals je in de video hebt gezien)


document.getElementById("mybutton").addEventListener("click", function() {
  alert("Button clicked!!!");
});

let body = document.querySelector("body");

// document.getElementById("mybutton2").addEventListener("click", function() {
//   body.classList.add("blue-background");
// });


document.getElementById("mybutton2").addEventListener("click", function () {
  body.classList.toggle("red-background");
});
