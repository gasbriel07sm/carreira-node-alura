/** Dias de Semana: 9 - 18
 *  Sabados e domingos abre as 10 as 14
 */

const diaSemana = 2;

switch (diaSemana) {
    case 1:
    case 2:     
    case 3:
    case 4:
    case 5:
        console.log("A loja está aberta no horário normal: 9h às 18h.");
        break;
    case 0, 6:    
        console.log("A loja está aberta em horário especial: 10h às 14h.");
        break;
    default: 
        console.log("Dia não encontrado.");
        break;    
}