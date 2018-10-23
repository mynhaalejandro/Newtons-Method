function newtonMethod(){
    for (var i = 0; i < MAXITS; i++){
        var y0 = math.eval(f, scope = {x: x0});
        var yp = math.derivative(f, 'x').eval({x: x0});

        zeroApprox0 = x0 - y0 / yp;

        zeroApprox = x0 - zeroApprox0;


        zeroApproxPoints.push(zeroApprox0);

        console.log("guess = " + x0 + "\nf(x) = " + y0 + "\nf'(x) = " + yp + "\napprox0 = " + zeroApprox); //debugging

        var data = [];
        data.push(i+1);
        //data.push(zeroApprox0);
        data.push(zeroApprox);
        data.push(y0);
        data.push(yp);
        data.push(x0);

        outputData.push(data);
//        console.log(data);

        if (math.abs(math.eval(f, scope = {x: zeroApprox0,})) < TOLER){
            return;
        }
        else{
            x0 = zeroApprox0;
        }

    }
}
