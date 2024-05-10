/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function(win,doc) {
    'use strict';


    var $input = doc.querySelector('[data-js="calcu"]');
    var $nu = doc.querySelectorAll('[data-js="button-numbers"]');
    var $bClear = doc.querySelector('[data-js="button-clear"]');
    var $bOpe = doc.querySelectorAll('[data-js="button-operations"]')
    var $bIgual = doc.querySelector('[data-js="button-result"]')


    Array.prototype.forEach.call($nu, function(button) {
        button.addEventListener('click', randomClick, false);
    });

    Array.prototype.forEach.call($bOpe, function(button) {
        button.addEventListener('click', oper, false);
    })

    $bIgual.addEventListener('click', result, false);

    $bClear.addEventListener('click', limp, false)


    function randomClick() {
        isOperation($input.value);
        $input.value += this.value;
    }

    function oper() {
        $input.value = removeLastItemIf($input.value);  
        $input.value += this.value;
    }

    function limp() {
        $input.value = '0'
    }

    function isOperation(number) {
        var operation = ['+', '-', 'x', '÷'];
        var lastItem = number.split('').pop();
        return operation.some(function(operador) {
            return operador === lastItem;

        });
    }

    function removeLastItemIf(number) {
        if(isOperation(number)) {
            return number.slice(0, -1);
        }
        return number;
    }

    function result() {
        $input.value = removeLastItemIf($input.value);
        var allValues = $input.value.match(/\d+[+-x÷]?/g); // isso separou os numeros dos operadores
        $input.value = allValues.reduce(function(accumulated, actual) {
            var firstValue = accumulated.slice(0, -1);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastItemIf(actual);
            var lastOperator = isOperation(actual) ? actual.split('').pop() : ''
            switch(operator) {
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator ;
                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator ;
                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator ;
                case '÷':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator ;

            }
    
        })
    }



 //refactory: e eu pegar um codigo e melhoralo





})(window,document);
