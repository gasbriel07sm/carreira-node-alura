// pendente - Pagamento pendente
// aprovado - Pagamento aprovado
// recusado - Pagamento recusado

const status = "aprovado";

switch (status){
    case "aprovado":
        console.log("Pagamento aprovado");
        break;
    case "recusado":
        console.log("Pagamento recusado");
        break;
    case "pendente":
        console.log("Pagamento pendente");
        break;
    default:
        console.log("Pagamento não registrado");
        break;            
}