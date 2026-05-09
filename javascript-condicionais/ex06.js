/** laranja, abacaxi, se não for laranja ou abacaxi deve gerar uma mensagem de erro de que a fruta nao é compatível */

const fruta = "laranja";

switch (fruta) {
    case "laranja":
    case "abacaxi":
        console.log("Fruta compatível para a receita");
        break;
    default:
        console.log("Fruta incompatível para a receita");
        break;        
}