document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtener valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var conocimientos = document.querySelectorAll('input[name="conocimientos"]:checked');
    var bio = document.getElementById("bio").value;
  
    // Calcular edad
    var fechaNacimiento = new Date(fecha);
    var edad = calcularEdad(fechaNacimiento);
  
    // Validar los datos
    if (nombre === "" || apellido === "" || dni === "" || fecha === "" || !genero || conocimientos.length === 0 || bio === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Crear resumen
    var resumen = "Resumen:<br><br>";
    resumen += "Nombre: " + nombre + "<br><br>";
    resumen += "Apellido: " + apellido + "<br>";
    resumen += "DNI: " + dni + "<br><br>";
    resumen += "Fecha de nacimiento: " + fecha + "<br><br>";
    resumen += "Género: " + genero.value + "<br><br>";
    resumen += "Conocimientos: " + "<br></br>";
    for (var i = 0; i < conocimientos.length; i++) {
      resumen += conocimientos[i].value + ", ";
    }
    resumen = resumen.slice(0, -2); // Eliminar la última coma
    resumen += "<br>Edad: " + edad + "<br>";
    resumen += "Biografía: " + bio + "<br></br>";
  
    // Almacenar el resumen
    sessionStorage.setItem("resumen", resumen);
  
    // Redireccionar a la página de resumen
    window.location.href = "resumen.html";
  });
  
  function calcularEdad(fecha) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fecha.getFullYear();
    var mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }
    return edad;
  }
  