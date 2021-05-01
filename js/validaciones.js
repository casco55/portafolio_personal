$(document).ready(function() {
    $("#form-contacto").validate({
       rules: {
        nombre: {
         required: true
        },
        fono: {
            required: true,
            minlength: 8
           },
        email: {
            required: true,
            email: true
        },
        comentario: {
            required: true
           },
       },
       messages: {
        nombre: "Por favor ingrese su Nombre",
        fono: "Por favor ingrese su fono",
        email: {
            required: "Por favor ingrese su Email",
            email: "Por favor ingrese un Email válido"
        },
        fono: {
         required: "Por favor ingrese un Teléfono",
         minlength: "Debe ser un mínimo de 9 dígitos"
        },
        comentario: "Por favor ingrese un comentario",
       },
       errorElement : 'span',
       submitHandler: function(form, e) {
         e.preventDefault();
         $('#enviar').attr("disabled", true);      
         
         enviarForm();
         //return  false;
       }
    });
   });

   function enviarForm() {
    var parametros = $("#form-contacto").serialize();
    // enviar lead y guardar en bd
     $.ajax({
       data: parametros,
       url: "php/procesar.php",
       type: 'post',
       cache: false,
       success: function(response) {
          console.log('response =' + response);    
          if(response == 1)
            {
             
                document.location.href = "exito.html";
            }
            else 
            {
              alert("Se produjo un error enviando la información. Inténtalo más tarde.");  
              
            }  
       },
    });
   }

   function isNumber(e) {
    k = (document.all) ? e.keyCode : e.which;
    if (k == 8 || k == 0) return true;
    patron = /[0-9]/;
    n = String.fromCharCode(k);
    return patron.test(n);
   }
   
   function alfabetico(e) {
    kc = e.keyCode ? e.keyCode : e.which;
    if (kc < 32) return true;
    kc = String.fromCharCode(kc);
    if (/[^a-zA-ZüÜáéíóúÁÉÍÓÚñÑ ]/.test(kc)) return false;
   }
   
   function ValidaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
   }