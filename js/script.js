
function validaciones() {
    let valida;
    valida=validarPassword();
    if (valida==false) {
        return false;
    }
    valida=validarEdad();
    if (valida==false) {
        return false;
    }
    return true;
}

function validarPassword() {
    var pass1=document.getElementById("txtPass1").value;
    var pass2=document.getElementById("txtPass2").value;
    if (pass1==pass2) {
        //alert('OK');
        console.log('OK')
        let largo= pass1.length;
        let largo2=pass2.length;
        if (largo<5) {
            Swal.fire('Largo Pass 1 incorrecto');
            return false;
        }
        if(largo2<5){
            Swal.fire('Largo Pass 2 incorrecto');
            return false;
        }
        return true;
    }else{
        Swal.fire('Pass no son iguales');
        //alert('Pass no son iguales');
        return false;
    }
}
function validarEdad(){
    let mi_fecha= document.getElementById("datFecha").value;
    let fecha_actual=new Date();
    console.log('Mi Fecha:'+mi_fecha);
    console.log('Fecha actual:'+fecha_actual);
    let ano=mi_fecha.slice(0,4);
    let mes=mi_fecha.slice(5,7);
    let dia=mi_fecha.slice(8,10);
    let fecha_comparar=new Date(ano,(mes-1),dia);
    if (fecha_comparar>fecha_actual) {
        alert('fecha ingresada mayor a la actual');
        return false;
    }
    let dia_mili = 1000*60*60*24;
    console.log('Dia en Milisegundos:'+dia_mili);
    let dias_vividos= (fecha_actual.getTime()-fecha_comparar.getTime())/dia_mili;
    console.log('Dias Vividos:'+ Math.trunc( dias_vividos));
    let anos_vividos= Math.trunc( dias_vividos/365);
    console.log('Anos:'+anos_vividos);
    if (anos_vividos<18) {
        alert('eres menos de edad para adoptar una mascotas');
        return false
    }
    return true;
}
function validarRut() {
    let rut=document.getElementById('txtRut').value;
    let largo= rut.trim().length;
    if (largo>10 || largo<10) {
        Swal.fire('largo rut incorrecto');
        return false;
    }
    let num=3;
    let suma=0;
    for (let index = 0; index < 8; index++) {
        let caracter=rut.trim().slice(index,index+1);
        console.log('caracter:'+caracter+" x "+num);
        suma=suma+(caracter*num);
        num=num-1;
        if (num==1) {
            num=7;
        }
    }
    let resto= suma % 11;
    let dv = 11 - resto;
    let el_digito;
    if (dv>9) {
        if (dv==10) {
            el_digito='K';
        } else {
            el_digito=0;
        }
    }else{
        el_digito=dv;
    }
    console.log('DV:'+el_digito);
    let ultimo=rut.trim().slice(9,10);
    console.log('El digito escrito:'+ultimo);
    if (ultimo==el_digito) {
        Swal.fire('correcto');
    }else{
        Swal.fire('dv incorrecto');
    }
}
