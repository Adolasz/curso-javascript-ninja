/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// var myvar = [20, 'milionario', true, null, 7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// function array(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// array(myvar)[1]  //  'milionario'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// function array2 (arg, a) {    
    return arg[a];
}                              // array2(myvar,3)  // null

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// var myArray = [1,'bilionario', true,null,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
   array2(myArray,0) // 1
   array2(myArray,1) // 'bilionario'
   array2(myArray,2) // true
   array2(myArray,3) // null
   array2(myArray,4) // undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 
function book (a) {
    var livros  = {
        'vida Do Aduilio': {quantidadePaginas: 60  , autor: 'Aduilio'   , editora: 'Adolasz' } ,
        'romance': {quantidadePaginas: 80  , autor: 'Julia'   , editora: 'Makeup' }  ,
        'familia': {quantidadePaginas: 100  , autor: 'Carlos'   , editora: 'Claudinos' }
    }
return !a ? livros : livros[a]; 
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 
book() // {vida Do Aduilio: {…}, romance: {…}, familia: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// 
'O livro romance tem '+ book('romance').quantidadePaginas + ' páginas!!' // 'O livro romance tem 80 páginas!!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
'O autor do livro familia é '+book('familia').autor+'.' // 'O autor do livro familia é Carlos.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 
'O livro Vida Do Aduilio foi publicado pela editora '+book('vida Do Aduilio').editora+'.' // 'O livro Vida Do Aduilio foi publicado pela editora Adolasz.'

