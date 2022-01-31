

//EJERCICIO 1

 /* for (let i = 0  ; i <= 9 ; i++) {   
    if (i==0 || i==9) {
        console.log(`*****************`)
    }else{console.log(`*               *`) }
}  */

//EJERCICIO 2

/*   let cantidad = 20 
 

for (let i = 1; i <= cantidad ; i++) {
    
    
    if (i%15==0) {
        console.log(`TzStrike`)
    }else if (i%3==0) {
        console.log(`Tz`)
    }else if (i%5==0) {
        console.log(`Strike`)
    }else{
        console.log(i)
    }
    
} */  

//EJERCICIO 3

/* let tabla = 5

for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla*i}` )
    
} */

//EJERCICIO AVANZADO

/* let texto = `medium`
let texto_modificado = texto.slice(4)
console.log(texto_modificado) */

 //ciclos anidados

 //ejemplo 1
 
 /* for (i=1;i<10;i++){ 
    console.log(`la tabla del ${i}`) 
    for (j=1;j<10;j++) { 
       console.log(`${i} x ${j} = ${i*j}`)  
    } 
} */

 //ejemplo 2

/* let cantidad_de_cuadros = 5

for (let i = 0; i < cantidad_de_cuadros; i++) {
    console.log(`cuadro numero ${i}`)
    
    for (let j = 0  ; j <= cantidad_de_cuadros; j++) {   
        if (j==0 || j==cantidad_de_cuadros) {
            console.log(`*****************`)
        }else{console.log(`*               *`) }       
    }

    process.stdout.write('\n')
} */