let nmr = 1;
let nmrPsoma = 2;
let texto = "";


while (nmr <= 54 ) {
    nmr = nmr + nmrPsoma;
    nmrPsoma++;
    texto +="O numero é " + nmr + "</br>";
    document.getElementById("texto").innerHTML=texto

    
}