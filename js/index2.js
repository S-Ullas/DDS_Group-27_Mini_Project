let exp = { Q: 0, Q_bar: 0 };
let Clk = 1;
let results=["b","a d e f","d e f h","d e f a b"];

function Exp_JK_Flip_Flop(Clk, J, K) {
    if (Clk == 1) {
        if (J != K) {
            if (J == 0) {
                exp.Q = 0;
                exp.Q_bar = 1;
            }
            else {
                exp.Q = 1;
                exp.Q_bar = 0;
            }
        }
        else if (J == 1 && K == 1) {
            let temp = exp.Q;
            exp.Q = exp.Q_bar;
            exp.Q_bar = temp;
        }
    }
    return exp
}

submitBtn.addEventListener("click", (J,K)=>{
    let exp=Exp_JK_Flip_Flop(Clk, parseInt(J_Value.value), parseInt(K_Value.value))
    if(exp.Q==parseInt(Q_Value.value) && exp.Q_bar==parseInt(Q_bar_Value.value)){
        display("No");
    }else{
        if (parseInt(J_Value.value)==0) {
            if (parseInt(K_Value.value)==0) {
                display("d e f a b");
            }else {
                display("a d e f")
            }
        }else{
            if(parseInt(K_Value.value)==0){
                display("b");
            }else{
                display("d e f h");
            }
        }
    }
})

function display(txt) {
    if(txt=="No"){
        sim2res.innerHTML="No Fault Found";
    }
    else{
        sim2res.innerHTML="Possible Fault SA1 at " + txt;
    }
}
