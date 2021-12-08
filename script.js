function clean() 
{
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
}

function calculate() 
{
    var x = parseInt(document.getElementById("txt1").value);
    var y = parseInt(document.getElementById("txt2").value);
    var z = parseInt(document.getElementById("txt3").value);

    let total = x + y + z;
    let avg = total / 3;
    let per = (total * 100) / 300;
    grade = "";

    if (total > 250) {
        grade = "A Grade";
    }
    else if (total <= 250 && total > 150) {
        grade = "B Grade";
    }
    else if (total <= 150 && total > 99) {
        grade = "C grade";
    }
    else {
        grade = "FAIL";
    }

    /*
     document.write("<h1><br>total:"+total+"<br>Avarage:"+avg+"<br>Percentage:"+per+"<br>Grade:"+grade+"</h1>"); 
    */

    out = `<tr>
            <td>${x}</td>
            <td>${y}</td>
            <td>${z}</td>
            <td>${total}</td>
            <td>${avg}</td>
            <td>${per}</td>
            <td>${grade}</td>
            </tr>`
    document.getElementById("output").innerHTML += out;
}
