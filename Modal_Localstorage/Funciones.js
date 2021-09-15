function Enviar_Info(){
    
    const Datos_Save = JSON.stringify({
        Nombres: document.getElementById("Nombres").value,
        Apellidos: document.getElementById("Apellidos").value,
        DNI: document.getElementById("DNI").value,
        Edad: document.getElementById("Edad").value,
        Comentarios: document.getElementById("Comentarios").value
    })

    var Obtener = JSON.parse(localStorage.getItem("Datos_Insert"))
    if(Obtener == null){
        var Obtener = []
        }
    Obtener.push(Datos_Save)
    localStorage.setItem("Datos_Insert", JSON.stringify(Obtener))
    window.location.replace("index.html")        
}



function Leer_Infor(){
    var Obtener_Element = JSON.parse(localStorage.getItem("Datos_Insert"))
    if(Obtener_Element == null){
        document.getElementById("Comentario").style.display = ""
    }else{        
        var Imprimir = "";
        if(Obtener_Element.length > 0){                                    
            for(var i = 0; i < Obtener_Element.length; i++){
                var Transformar = JSON.parse(Obtener_Element[i])
                Imprimir += "<tr>"
                Imprimir += "<td class='align-middle'>"+ i +"</td>"
                Imprimir += "<td class='align-middle'>"+ Transformar.Nombres +"</td>"
                Imprimir += "<td class='align-middle'>"+ Transformar.DNI +"</td>"
                Imprimir += "<td class='align-middle'>"+ Transformar.Edad +"</td>"
                Imprimir += "<td>"+ "<button class='Ver_info btn btn-primary mt-2 mb-2' id='"+ i +"'>Ver info</button> <button class='btn btn-success mt-2 mb-2 ms-4 Editar' id='"+ i +"'>Editar</button>" +"</td>"
                Imprimir += "</tr>"
            }            document.getElementById("Tabla_llenar").innerHTML = Imprimir


            document.querySelectorAll("#Tabla_llenar button").forEach(e => {
                if(e.className == "Ver_info btn btn-primary mt-2 mb-2"){
                    e.addEventListener('click', () => {
                        Ver_Elementos(e.id)
                    })
                }
            })


            function Ver_Elementos(indice){

                var Elemento = JSON.parse(Obtener_Element[indice])

                  document.getElementById("Modal_prueba").innerHTML =  `
                    <div class="modal fade" id="Mi_Modal_Vet" tabindex"-1" aria-hidden="true" aria-labelledby="modalTitle">
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content pe-4 ps-4 pt-2">
                        <div class="modal-header">
                        <h3 class="modal-title" id="modalTitle_Mod" style="font-family: 'Josefin Sans', sans-serif; font-weight: 300">Datos de tu medico: ${Elemento.Nombres}</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  
                    <div class="modal-body">
  
  
  
                    <div class="form-row d-flex justify-content-lg-between mb-4 pb-3 pt-3">
                      
                      <div class="form-group col-12 col-lg-5 flex-column">
                        <label for="Estado_Cita" class="mb-2">Estado de la cita:</label>
                        <p></p>
                      </div>
  
                      <div class="form-group col-12 col-lg-5 flex-column">
                        <label for="Est_Salud" class="mb-2">Estado de salud:</label>
                        <p></p>
                      </div>
  
                    </div>
  
  
  
  
                    <div class="form-row d-flex justify-content-lg-between mb-4 pb-3">
                      
                      <div class="form-group col-12 col-lg-5 flex-column">
                        <label class="mb-2">Alta de la mascota:</label>
                        <p></p>
                      </div>
                      <div class="form-group col-12 col-lg-5 flex-column">
                        <label class="mb-2" for="Precio_Adm">Factura medica:</label>
                        <p></p>
                      </div>
  
                    </div>
  
  
                    <div class="form-row mb-4">
                      <div class="form-group col-12 col-lg-12 flex-column">
                        <label for="Descrip_Admin" class="mb-2">Ingrese la cituacion medica:</label>
                        <p></p>
                      </div>  
                    </div>
                    
  
  
                         
                  </div>                
                  </div>
                </div>          
              </div>    
    `

    document.getElementById("Activar_Visor").click()
            }


}






    }
}
