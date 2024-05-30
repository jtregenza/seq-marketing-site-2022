const toggle=document.getElementById("toggle"),theme=window.localStorage.getItem("theme");"light"===theme&&document.body.classList.add("light"),toggle.addEventListener("click",()=>{document.body.classList.toggle("light"),"light"===theme?window.localStorage.setItem("theme","dark"):window.localStorage.setItem("theme","light")});


