var num1 = 0;
var num2 = 0;
var num3 = 0;

function mais1() {
    num1++;
    tela1();
}
function menos1() {
    num1--;
    tela1();
}
function tela1() {
    const p1 = document.getElementById("com1");
    p1.innerText = num1;
}
tela1();

function reset1() {
    num1 = 0;
    tela1();
}

function mais1i() {
    num2++;
    tela2();
}

function menos1i() {
    if (num2 != 0) {
        num2--;
        tela2();
    } else {
        num2 = 0;
    }
}

function tela2() {
    const p2 = document.getElementById("com2");
    p2.innerText = num2;
}
tela2();

function reset2() {
    num2 = 0;
    tela2();
}

function mais2() {
    num3 += 2;
    tela3();
}
function menos2() {
    num3 -= 2;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function mais5() {
    num3 += 5;
    tela3();
}
function menos5() {
    num3 -= 5;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function mais10() {
    num3 += 10;
    tela3();
}
function menos10() {
    num3 -= 10;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function mais20() {
    num3 += 20;

    tela3();
}
function menos20() {
    num3 -= 20;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function mais50() {
    num3 += 50;
    tela3();
}
function menos50() {
    num3 -= 50;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function mais100() {
    num3 += 100;
    tela3();
}
function menos100() {
    num3 -= 100;
    tela3();
}
function tela3() {
    const p3 = document.getElementById("com3");
    p3.innerText = num3;
}
tela3();

function reset3() {
    num3 = 0;
    tela3();
}
