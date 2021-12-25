// Initially Q=0 and Q_bar=0
let res = { Q: 0, Q_bar: 0 };
let exp = { Q: 0, Q_bar: 0 };
let Clk = 1;
let fault;
const tableBody = document.getElementById("table-body");

// call the function when submit button is clicked
submitBtn.addEventListener("click", () => {
    console.log("ds", parseInt(J_Value.value), parseInt(K_Value.value))
    res = JK_Flip_Flop(Clk, parseInt(J_Value.value), parseInt(K_Value.value), fault);
    exp = Exp_JK_Flip_Flop(Clk, parseInt(J_Value.value), parseInt(K_Value.value));
    createRow(parseInt(J_Value.value), parseInt(K_Value.value), fault, exp.Q, exp.Q_bar, res);
})

function JK_Flip_Flop(Clk, J, K, fault) {
    if (Clk == 1) {
        switch (fault) {
            case "a":
                J = 1;
                break;

            case "b":
                K = 1;
                break;

            case "c":
                K = 0;
                break;

            case "d":
            case "e":
            case "f":
                return { Q: 1, Q_bar: 0 };

            case "g":
                if (J == 1 && K == 0) {
                    K = 1;
                }
                else if (J == 0 && K == 0) {
                    J = 1;
                }
                break;

            case "h":
                if (J == 1 && K == 1) {
                    K = 0;
                }
                break;

            default:
                break;
        }

        console.log("J=", J, "K=", K)

        if (J != K) {
            if (J == 0) {
                res.Q = 0;
                res.Q_bar = 1;
            }
            else {
                res.Q = 1;
                res.Q_bar = 0;
            }
        }
        else if (J == 1 && K == 1) {
            let temp = res.Q;
            res.Q = res.Q_bar;
            res.Q_bar = temp;
        }
    }
    return res
}

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

// ===== Create a td tag =====
const createTd = (value) => {
    const td = document.createElement("td");
    td.innerText = value;
    td.classList.add("border");
    td.classList.add("border-gray-400");
    return td;
};

// ===== Creating a row =====
const createRow = (J, K, fault, exp_q, exp_q_bar, res) => {
    console.log(res);
    const tr = document.createElement("tr");
    const td1 = createTd(`${J} ${K}`);
    tr.appendChild(td1);
    const td2 = createTd(`${fault}`);
    tr.appendChild(td2);
    const td3 = createTd(exp_q);
    tr.appendChild(td3);
    const td4 = createTd(exp_q_bar);
    tr.appendChild(td4);
    const td5 = createTd(res.Q);
    tr.appendChild(td5);
    const td6 = createTd(res.Q_bar);
    tr.appendChild(td6);
    tableBody.appendChild(tr);
};