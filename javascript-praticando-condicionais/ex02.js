/** Menor que 15: frio
 *  De 15 a 25: agradável
 *  Acima de 25: quente
 */

const temperatura = 30;

if (temperatura < 15 && temperatura > 0) {
    console.log('Frio');
} else if (temperatura >= 15 && temperatura <= 25) {
    console.log('Agradável');
} else {
    console.log('Quente');
}