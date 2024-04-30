let mes1 = prompt("Enter message", "mes1"),
mes2 = prompt("Enter message", "mes2"),
mes3 = prompt("Enter message", "mes3");
alert(`${mes1} ${mes2} ${mes3}`);


let num = prompt("Enter number", "12345");
pow = num.length - 1;
num = +num;
let text_num = "";
while(pow >= 0)
{
    text_num += Math.floor(num / 10**pow) % 10 + " ";
    pow--;
}
alert(`${text_num}`);

