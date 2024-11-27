// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

console.log("Solución 1: Área de Rectángulo");
console.log(calcularAreaRectangulo(5, 3));
console.log(calcularAreaRectangulo(10, 4));
console.log(calcularAreaRectangulo(7, 6));
console.log("///////////////");

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
  return cadena.trim().split(/\s+/).length;
}

console.log("Solución 2: Contar Palabras");
console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log(contarPalabras("JavaScript es un lenguaje increíble"));
console.log(contarPalabras("   Espacios   extras   "));
console.log("///////////////");

// 3. Invertir una cadena
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log("Solución 3: Invertir Cadena");
console.log(invertirCadena("hola"));
console.log(invertirCadena("javascript"));
console.log(invertirCadena("neuquen"));
console.log("///////////////");

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
  const limpia = cadena.toLowerCase().replace(/[^a-z]/g, "");
  return limpia === limpia.split("").reverse().join("");
}

console.log("Solución 4: Palíndromo");
console.log(esPalindromo("neuquen"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("hola"));
console.log("///////////////");

// 5. Convertir edad de perro a años humanos
function edadCanina(edadHumana) {
  const edadCaninaTraduccional = edadHumana * 7;
  console.log(`Tu perro tiene ${edadCaninaTraduccional} años humanos`);
}

console.log("Solución 5: Edad Canina");
edadCanina(7);
edadCanina(3);
edadCanina(10);
console.log("///////////////");
