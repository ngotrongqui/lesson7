//hw1                                                Operator
    // if-else

function myFunction() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let operator = document.getElementById('operator').value;
    let result = 0;
    if (operator == '+') {
        result = parseInt(n1) + parseInt(n2);
    } else if (operator == '-') {
        result = parseInt(n1) - parseInt(n2);
    } else if (operator == '*') {
        result = parseInt(n1) * parseInt(n2);
    }else{
        result = parseInt(n1) / parseInt(n2);
    }
    document.getElementById('result').value = result;
}

    // switch

function myFunction_1() {
    let n_1 = document.getElementById('n_1').value;
    let n_2 = document.getElementById('n_2').value;
    let operator_1 = document.getElementById('operator_1').value;
    let result_1 = 0;
    switch (operator_1) {
        case '+':
            result_1 = parseInt(n_1) + parseInt(n_2);
            break;
        case '-':
            result_1 = parseInt(n_1) - parseInt(n_2);
            break;
        case '*':
            result_1 = parseInt(n_1) * parseInt(n_2);
            break;
        case '/':
            result_1 = parseInt(n_1) / parseInt(n_2);
            break;
        }
        document.getElementById('result_1').value = result_1;
}