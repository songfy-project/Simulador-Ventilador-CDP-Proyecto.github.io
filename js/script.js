const CalularDatos = () =>{


    let rpmValue = document.getElementById("txt-rpm").value; 
    let aspaGiratoria = document.getElementById("aspa-giratoria");
    let velocidadAngular = document.getElementById("txtVelocidadAngular");
    let desplazamientoAngular = document.getElementById("txtDesplazamientoAngular");
    let aceleracionAngular = document.getElementById("txtAceleracionAngular");
    let vAngularMedia = document.getElementById("txtVAngularMedia");
    let vTangencial = document.getElementById("txtVelcidadTangencial");
    let aTangencial = document.getElementById("txtAceleracionTangencial");
    let aCentripeta = document.getElementById("txtCentripetaTangencial");
    let energiaCinetica = document.getElementById("txtEnergiaCinetica");


    let torque = document.getElementById("txtTorque");
    let trabajoRotacional = document.getElementById("txtTrabajoRotacional");
    let potencia = document.getElementById("txtPotencia");
    let fuerzaTangencial = document.getElementById("txtFuerzaTangencial");
    let fuerzaRadial = document.getElementById("txtFuerzaRadial");

    let conservacionEnergia = document.getElementById("txtConservacionEnergia");
    let MomentoAngular = document.getElementById("txtMomentoAngular");

    /* Calculos  */ 

    /* Velocidad Angular */
    let f = (rpmValue / 60) * 2 * Math.PI; /* Conversion a Hz*/
    velocidadAngular.value = f.toFixed(3);

    /* Desplazamiento angular */
    let desplazamientoA = f.toFixed(3) * 7;
    desplazamientoAngular.value = desplazamientoA.toFixed(3);

    /* Aceleracion Angular */
    let aceleracionA = (f.toFixed(3) - 0)/7;
    aceleracionAngular.value = aceleracionA.toFixed(3);

    /*Velocidad Angular Media */
    let velocidadAM = 1/2*(f.toFixed(3) + 0);
    vAngularMedia.value = velocidadAM.toFixed(3);

    /* Velociddad Tangencial */
    let vt = f.toFixed(3) * 0.66;
    vTangencial.value = vt.toFixed(3);
                                         
    /* Aceleracion Tangencial */
    let at = aceleracionA.toFixed(3) * 0.66;
    aTangencial.value = at.toFixed(3);
    
    /* Aceleración Centrípeta */
    let ac = Math.pow(f, 2) * 0.66;
    aCentripeta.value = ac.toFixed(3);

    /* Energia cinetica de rotacion */
    let inerciaTotal = 0.126886;

    let energiaCineticaCalculo = 1/2 * inerciaTotal * Math.pow(f,2) ;
    energiaCinetica.value = energiaCineticaCalculo.toFixed(3);


    /* Torque */

    let TorqueCalculo = inerciaTotal * aceleracionA;
    torque.value = TorqueCalculo.toFixed(3);

    /* FuerzaTangencial */
    let fuerzaTangencialCalculo = 8.07 * at;
    fuerzaTangencial.value = fuerzaTangencialCalculo.toFixed(3);


    /* Fuerza Radial */
    let fuerzaRadialCalculo =  8.07 * Math.pow(f,2) * 0.66;
    fuerzaRadial.value = fuerzaRadialCalculo.toFixed(3);



    /* Trabajo Rotacional */



    /* Potencia */




    /* Conservacion Energia */



    /* Momento Angular */

    

    if (rpmValue == 203) {

       
        aspaGiratoria.classList.remove('aspa-medio');
        aspaGiratoria.classList.remove('aspa-baja');
        aspaGiratoria.classList.add('aspa-alta');
        
        
        
    }
    if(rpmValue == 135){

        aspaGiratoria.classList.remove('aspa-alta');
        aspaGiratoria.classList.remove('aspa-bajo');
        aspaGiratoria.classList.add('aspa-medio');
        


    }if (rpmValue == 95) {

        aspaGiratoria.classList.remove('aspa-alta');
        aspaGiratoria.classList.remove('aspa-medio');
        aspaGiratoria.classList.add('aspa-bajo');
        
        
        
    } if(rpmValue == 0) {

        alert("El ventilador esta en reposo!");
        aspaGiratoria.classList.remove('aspa-alta');
        aspaGiratoria.classList.remove('aspa-medio');
        aspaGiratoria.classList.remove('aspa-bajo');
        
        
    }

  }

  const DetenerSimulacion = () => {

    let rpmValue = document.getElementById("txt-rpm").value; 
    let aspaGiratoria = document.getElementById("aspa-giratoria");

    aspaGiratoria.classList.remove('aspa-medio');
    aspaGiratoria.classList.remove('aspa-bajo');
    aspaGiratoria.classList.remove('aspa-alta');

  }

  /* Radio buttons */
  
  function checkRadio(name) {

    let rpmValue = document.getElementById("txt-rpm"); 

    if(name == "alto"){

        document.getElementById("rpmalto").checked = true;
        document.getElementById("rpmmedio").checked = false;
        document.getElementById("rpmbajo").checked = false;

        rpmValue.value = document.getElementById("rpmalto").value;


    } else if (name == "medio"){
    
        document.getElementById("rpmalto").checked = false;
        document.getElementById("rpmmedio").checked = true;
        document.getElementById("rpmbajo").checked = false;

        rpmValue.value = document.getElementById("rpmmedio").value;
    }
    else if (name == "bajo"){
       
        document.getElementById("rpmalto").checked = false;
        document.getElementById("rpmmedio").checked = false;
        document.getElementById("rpmbajo").checked = true;

        rpmValue.value = document.getElementById("rpmbajo").value;
    }
}

const Limpiar = () => {

    let eraser = document.getElementById('eraser');
        eraser.addEventListener('click', _ => {
                location.reload();
    })

}