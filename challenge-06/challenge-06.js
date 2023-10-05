/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca'
console.log(championship); // Campeonato Carioca



/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Fluminese', 'Vasco da Gama', 'Flamengo','Volta Redonda','Botafogo'];



console.log( teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
... return  'O time que está em '+ position +'º lugar é o '+teams[position - 1]+'.';
... }




/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));  // O time que está em 1º lugar é o Fluminese.
console.log(showTeamPosition(2));  // O time que está em 2º lugar é o Vasco da Gama.
console.log(showTeamPosition(3));  // O time que está em 3º lugar é o Flamengo.
console.log(showTeamPosition(7));  // Não temos a informação do time que está nessa posição.



/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var rep = 20;
while(rep < 30) {
... console.log(rep);
... ++rep;
... }


/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(colors) {
    var hex;
    switch(colors){
        case 'vermelho':
        hex = '#FF0000';
        break;
        case 'amarelo':
        hex = '#FFE400';
        break;
        case 'verde':
        hex = '#36FF00';
        break;
        case 'azul':
        hex = '#003AFF';
        break;
        case 'roxo':
        hex = '#4900FF';
        break;
        default:
        return 'Não temos o equivalente hexadecimal para ' +colors+ '.'
    }
    return 'O hexadecimal para a cor '+colors+' é '+hex+'.'
}


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho')); // O hexadecimal para a cor vermelho é #FF0000.
console.log(convertToHex('azul'));     // O hexadecimal para a cor azul é #003AFF.
console.log(convertToHex('amarelo'));  // O hexadecimal para a cor amarelo é #FFE400 .
console.log(convertToHex('verde'));    // O hexadecimal para a cor verde é #36FF00.
console.log(convertToHex('roxo'));     // O hexadecimal para a cor roxo é #4900FF.
console.log(convertToHex('cinza'));    // Não temos o equivalente hexadecimal para cinza.
console.log(convertToHex('preto'));    // Não temos o equivalente hexadecimal para preto.
console.log(convertToHex('branco'));   // Não temos o equivalente hexadecimal para branco.
