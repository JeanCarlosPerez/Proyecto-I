function validarEmail() {  
    let correo = document.getElementById("email");
    let fallo = document.getElementById("error");
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    console.log("Valor del campo de correo:", correo.value);
  
    if (expresion.test(correo.value)) {
      fallo.textContent = "";
    } else {
      fallo.textContent = "Por favor, introduzca un email válido";
    }
  }

  const abrir = document.getElementById("abrir")
  const cerrar = document.getElementById("cerrar")
  const navjeje = document.getElementById("nav")

  abrir.addEventListener("click", () => {
    navjeje.classList.add("visible");
  })

  cerrar.addEventListener("click", () =>{
    navjeje.classList.remove("visible")
  })

const buttonDark = document.querySelector("#bDark")
const body = document.querySelector("body")
const h2 = document.querySelector(".h2")

buttonDark.addEventListener("click", () =>{
  body.classList.toggle("darkMode")
  h2.classList.toggle("DMode")
})