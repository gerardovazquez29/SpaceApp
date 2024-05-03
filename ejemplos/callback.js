


function uno (dos) {
    console.log("uno")
    setTimeout(dos, 2000)
}

function dos (tres) {
    console.log("dos")
    setTimeout(tres, 2000)
}

function tres (cuatro) {
    console.log("tres")
    setTimeout(cuatro, 2000)
}

function cuatro (cinco) {
    console.log("cuatro")
    setTimeout(cinco, 2000)
}

function cinco () {
    console.log("cinco")
}

setTimeout(() => uno(dos),5000);


//* Callbak hell
setTimeout(() => uno(
    () => dos(
        () => tres (
            () => cuatro(
                () => cinco(),)))),3000);



/* function dos () { */
/*     console.log("dos") */
/* } */
/*  */
/* setTimeout(() =>uno(dos), 5000); */
/*  */
/*   //* funcion vacia */
/* const nombre = function () { */
/*         console.log('nombre'); */
/* }  */
/* nombre(); */
/*  */
/*      //* funcion flecha */
/* const persona = () => console.log('barbara'); */
/* persona(); */
/*  */