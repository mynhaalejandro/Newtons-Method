// function addHeaderRow(iter){
//     var table = document.getElementById("output");
//     var header = table.createTHead();
//     var row = header.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//
//     cell1.innerHTML = "n";
//     cell2.innerHTML = "x_n";
//     cell3.innerHTML = "f(x_n)";
//     cell4.innerHTML = "f'(x_n)";
//     cell5.innerHTML = "x";
//
//     prettyPrintEverything(cell1, cell2, cell3, cell4, cell5, iter);
//     MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
// }

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

    //nEq.innerHTML = '<p1>$$' + "x_{"+ (iterCount) + "}=" +  latexify(x1) + " - (" + latexify(funcX) + ")/(" + latexify(funcPrimeX) + ')=' + latexify(zApr) + '$$</p1>';
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

    ans.innerHTML = '<table>$$' + "root=" + latexify(answer.toPrecision(5)) + '$$</table>';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
