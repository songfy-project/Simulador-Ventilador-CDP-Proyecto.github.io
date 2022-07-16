
//Validar Formulario (En compañia de Bootstrap)

(function () {
 

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

  // Declaraciones
  const textBoxEmail = document.querySelector(".textbox-email").value;
  const btnRegister = document.querySelector("#btn-register");
  const btnLogin = document.querySelector("btn-login");

  const formRegister = document.querySelector(".formulario__register");
  const formLogin = document.querySelector(".formulario__login");
  const text1atras = document.querySelector('.caja__trasera div h3');
  const text2atras = document.querySelector(".caja__trasera div p");
  const contenedoratras = document.querySelector(".caja__trasera-login");
  const formu1 = document.querySelector("form.formulario__login");
  
  



  //Funciones

  
 function loginVisble() {


    formLogin.style.zIndex = "1";
    formRegister.style.zIndex = "0";

   
    
    contenedoratras.innerHTML = `
    

    <h3>¿Ya tienes una cuenta?</h3>
    <p>Puedes iniciar sesión</p>    
    <a href="javascript:registerVisble();" id="btn-login">Iniciar Sesión</a> 
    
    
    `;
    
   

   

  };
  

 function registerVisble() {



    formLogin.style.zIndex = "0";
    formRegister.style.zIndex = "1";

   

    
    contenedoratras.innerHTML = `
    
    <h3>¿Aun no tienes una cuenta?</h3>
    <p>Registrate con nosotros</p>    
    <a href="javascript:loginVisble();" id="btn-login">Registrate</a> 
   
    
   
    
    
    `;
  

  };
  










 