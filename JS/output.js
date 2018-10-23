function addNewRow(iter, zAprox, fX, fPX, initX) {
    var table = document.getElementById("output");
    var newtonEq = table.insertRow();

    prettyPrintEverything(newtonEq, zAprox, fX, fPX, initX, iter);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function latexify(s) {
    var node = math.parse(s);
    return node ? node.toTex({
        parenthesis: parenthesis,
        implicit: implicit
    }) : '';
}

function prettyPrintEverything(nEq, zApr, funcX, funcPrimeX, x1, iterCount) {
    zApr = zApr.toPrecision(3);
    funcX = funcX.toPrecision(3);
    funcPrimeX = funcPrimeX.toPrecision(3);
    x1 = x1.toPrecision(3);

    var table = document.getElementById("output");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = "x<sub>" + (iterCount) + "</sub>";
    cell2.innerHTML = latexify(x1);
    cell3.innerHTML = latexify(funcX);
    cell4.innerHTML = latexify(funcPrimeX);
    cell5.innerHTML = latexify(zApr);
}

function addFinalRow(iter, answer){
    var table = document.getElementById("output");
    var ans = table.insertRow();
    var ans1 = table.insertRow();


    //ans.innerHTML = '<p1>$$' + "Since f(x)= 0, accept root = " + latexify(answer.toPrecision(5)) + '$$</p1>';
    //ans.innerHTML = '<table>$$' + "root=" + latexify(answer.toPrecision(5)) + '$$</table>';
    ans.innerHTML = "<p1>Since |x<sub>n</sub>-x<sub>n</sub>-1| < " + TOLER + ", accept root = " + latexify(answer.toPrecision(5)) + "</p1>";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
