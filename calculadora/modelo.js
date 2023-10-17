//$('#pushButton_Soma').click(function() {$('#lineEdit_Result').val(parseFloat($('#lineEdit_FirstNumber').val()) + parseFloat($('#lineEdit_SecondNumber').val()));});
//$('#pushButton_Subtrai').click(function() {$('#lineEdit_Result').val(parseFloat($('#lineEdit_FirstNumber').val()) - parseFloat($('#lineEdit_SecondNumber').val()));})
//$('#pushButton_Limpa').click(function() {$('#lineEdit_FirstNumber').val(""); $('#lineEdit_SecondNumber').val(""); $('#lineEdit_Result').val("");})
//$('#pushButton_Multiplica').click(function() {$('#lineEdit_Result').val(parseFloat($('#lineEdit_FirstNumber').val()) * parseFloat($('#lineEdit_SecondNumber').val()));})
//$('#pushButton_Dividir').click(function() {$('#lineEdit_Result').val(parseFloat($('#lineEdit_FirstNumber').val()) / parseFloat($('#lineEdit_SecondNumber').val()));})

const lineEdit_FirstNumber = $('#lineEdit_FirstNumber');
const lineEdit_SecondNumber = $('#lineEdit_SecondNumber');
const lineEdit_Result = $('#lineEdit_Result');
const pushButton_Soma = $('#pushButton_Soma');
const pushButton_Subtrai = $('#pushButton_Subtrai');
const pushButton_Multiplica = $('#pushButton_Multiplica');
const pushButton_Dividir = $('#pushButton_Dividir');
const pushButton_Limpa = $('#pushButton_Limpa');

function soma() {
    const number1 = parseFloat(lineEdit_FirstNumber.val());
    const number2 = parseFloat(lineEdit_SecondNumber.val());

    ope = number1 + number2;

    lineEdit_Result.val(ope);

}

function subtrai() {
    const number1 = parseFloat(lineEdit_FirstNumber.val());
    const number2 = parseFloat(lineEdit_SecondNumber.val());

    ope = number1 - number2;

    lineEdit_Result.val(ope);

}

function multiplica() {
    const number1 = parseFloat(lineEdit_FirstNumber.val());
    const number2 = parseFloat(lineEdit_SecondNumber.val());

    ope = number1 * number2;

    lineEdit_Result.val(ope);

}

function dividir() {
    const number1 = parseFloat(lineEdit_FirstNumber.val());
    const number2 = parseFloat(lineEdit_SecondNumber.val());

    ope = number1 / number2;

    lineEdit_Result.val(ope);

}

function limpar() {
    lineEdit_FirstNumber.val("");
    lineEdit_SecondNumber.val("")
    lineEdit_Result.val("")
}

pushButton_Soma.click(soma);
pushButton_Subtrai.click(subtrai);
pushButton_Multiplica.click(multiplica);
pushButton_Dividir.click(dividir);
pushButton_Limpa.click(limpar);
