/** Menos de 12 anos - infantil
 *  12 anos ou mais e menor que 18 - juvenil
 *  18 anos ou mais - adulto
 */

const idade = 20;

if (idade < 12) {
    console.log('Infantil');
} else if (idade >= 12 && idade < 18) {
    console.log('Juvenil');
} else {
    console.log('Adulto');
}