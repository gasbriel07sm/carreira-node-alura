// CONDICIONAL COM SWITCH

// verificar se estudante receberá bônusa de nota
// estudantes recebem bonus se a nota for 8 ou acima e se tiverem no máximo 2 faltas

const nome = 'Roberta';
const nota = 8;
const faltas = 3;

const recebeBonus = nota >= 8 && faltas <= 2 
    ? `${nome} recebe bônus` 
    : `${nome} não recebe bônus`;

console.log(recebeBonus);

// criar fluxo que identifica o tipo de usuário e comunica de acordo
/** ex:
 *  usuário free = acesso limitado ao app
 *  usuário premium tem acesso a todas as funções
 *  usuário super premium tem acesso total e bonus especiais
 */

const tipoUsuario = 'premium';

switch (tipoUsuario.toLowerCase()) {
    case 'free':
        console.log('Acesso limitado ao app');
        break;
    case 'premium':
        console.log('Acesso a todas as funções');
        break;
    case 'super premium':
        console.log('Acesso total e bônus especiais');
        break;
    default:
        console.log('Tipo de usuário não registrado');
        break;            
}