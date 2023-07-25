const toggle = document.getElementById("toggle");

const theme = window.localStorage.getItem("theme");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "light") document.body.classList.add("light");

// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
   document.body.classList.toggle("light");
   if (theme === "light") {
     window.localStorage.setItem("theme", "dark");
   } else window.localStorage.setItem("theme", "light");
});


