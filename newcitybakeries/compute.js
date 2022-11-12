function validateForm() {

    var fn = document.getElementById("first").value;
    var ln = document.getElementById("last").value;
    var add = document.getElementById("address").value;
    var pn = document.getElementById("tel").value;
    var pc = document.getElementById("postalcode").value;
    var e = document.getElementById("email").value;

    var message = "";
    var reg1 = /^[a-zA-Z -]+$/;
    var reg2 = /[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;
    var reg3 = /[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d/;
    var reg4 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    /**Validate firstname*/
    if (fn.length < 1 || fn.length > 20 && reg1.test(fn) == false) {
        alert("Firstname required");
    } else {
        message = (message + fn + " ");
    }
    if (reg1.test(fn) == false) {
        alert("Invalid first name")
    }

    /**Validate lastname*/
    if (ln.length < 1 || ln.length > 20) {
        alert("Lastname required");
    } else {
        message = (message + ln + "<br>") + add + "<br>";
    }
    if (reg1.test(ln) == false) {
        alert("Invalid last name")
    }

    /**Validate postalcode*/
    if (pc.length < 1 || pc.length > 7) {
        alert("Postal code required");
    } else {
        message = (message + pc + "<br>");
    }
    if (reg3.test(pc) == false) {
        alert("Invalid postalcode. Please check the format.")
    }

    /**Validate phone number*/
    if (pn.length < 1 || pn.length > 20) {
        alert("Phone number required");
    } else {
        message = (message + pn + "<br>");
    }
    if (reg2.test(pn) == false) {
        alert("Invalid phone number. Please check the format.")
    }

    /**Validate email*/
    if (e.length < 1 || e.length > 30) {
        alert("Email required");
    } else {
        message = (message + e + "<br>");
    }

    if (reg4.test(e) == false) {
        alert("Invalid email. Please check the format.")
    }

    

    var sheetBase = 18;
    var sheetLength = document.getElementById("slength").value;
    var sheetWidth = document.getElementById("swidth").value;
    var areaSheet = sheetLength * sheetWidth;
    var areaDiff = areaSheet - 900;
    var additional = areaDiff * 0.02;
    var total = sheetBase + additional;
    var amount = parseFloat(amount);
    var toppings = parseFloat(toppings);
    var message2 = "";

    if (document.getElementById("creamcheese").value > 0) {
        toppings = 5 * document.getElementById("creamcheese").value;
        message2 += "<br>" + " Creamcheese Icing $5.00";
    }

    if (document.getElementById("fruit").value > 0) {
        toppings = (7 * document.getElementById("fruit").value);
        message2 += "<br>" + " Fruit and Almond Topping $7.00";
    }

    if (document.getElementById("jam").value > 0) {
        toppings = (4 * document.getElementById("jam").value);
        message2 += "<br>" + " Fruit Jam Filling $4.00";
    }

    if (document.getElementById("creamcheese").value > 0 && document.getElementById("fruit").value > 0) {
        toppings = 5 * document.getElementById("creamcheese").value + (7 * document.getElementById("fruit").value);
    }

    if (document.getElementById("creamcheese").value > 0 && document.getElementById("jam").value > 0) {
        toppings = 5 * document.getElementById("creamcheese").value + (4 * document.getElementById("jam").value);
    }

    if (document.getElementById("fruit").value > 0 && document.getElementById("jam").value > 0) {
        toppings = 7 * document.getElementById("fruit").value + (4 * document.getElementById("jam").value);
    }

    if (document.getElementById("creamcheese").value > 0 && document.getElementById("jam").value > 0 && document.getElementById("fruit").value > 0) {
        toppings = 5 * document.getElementById("creamcheese").value + (4 * document.getElementById("jam").value) + (7 * document.getElementById("fruit").value);
    }

    if (document.getElementById('sheet').checked) {
        if (sheetLength < 30 || sheetLength > 60) {
            alert("Dimension incorrect");
        }

        if (sheetWidth < 30 || sheetWidth > 45) {
            alert("Dimension incorrect");
        }

        if (document.getElementById("1").checked) {
            /*same cake amount */
            amount = total + toppings;
            message = (message + "<br>Your orders: <br>" + "Sheet Cake " + areaSheet.toFixed(2) + "cm " + "with 1 Layer: $" + total.toFixed(2) + message2 + "<br> Total: $" + parseFloat(amount.toFixed(2)));
        }

        if (document.getElementById("2").checked) {
            /*cake + cake/2 */
            amount = total + (total / 2) + toppings;
            message = (message + "<br>Your orders: <br>" + "Sheet Cake " + areaSheet.toFixed(2) + "cm " + "with 2 Layers: $" + (total + (total / 2)).toFixed(2) + message2 + "<br> Total: $" + amount.toFixed(2));
        }

        if (document.getElementById("3").checked) {
            /*cakeprice *2 */
            amount = total * 2 + toppings;
            message = (message + "<br>Your orders: <br>" + "Sheet Cake " + areaSheet.toFixed(2) + "cm " + "with 3 Layers: $" + (total * 2).toFixed(2) + message2 + "<br> Total: $" + amount.toFixed(2));
        }

    }

    var roundBase = 15;
    var roundRadius = document.getElementById("radius").value;
    var areaRound = roundRadius * roundRadius * 3.14;
    var areaRoundDiff = areaRound - 706.5;
    var additionalRound = areaRoundDiff * 0.02;
    var total = roundBase + additionalRound;
    var amount;

    if (document.getElementById('round').checked) {
        if (roundRadius < 15 || sheetLength > 30) {
            alert("Dimension incorrect");
        }

        if (document.getElementById("1").checked) {
            /*same cake amount */
            amount = total + toppings;
            message = (message + "<br>Your orders: <br>" + "Round Cake " + areaRound.toFixed(2) + "cm " + "with 1 Layer: $" + total.toFixed(2) + message2 + "<br> Total: $" + amount.toFixed(2));
        }

        if (document.getElementById("2").checked) {
            /*cake + cake/2 */
            amount = total + (total / 2) + toppings;
            message = (message + "<br>Your orders: <br>" + "Round Cake " + areaRound.toFixed(2) + "cm " + "with 2 Layers: $" + (total + (total / 2)).toFixed(2) + message2 + "<br> Total: $" + amount.toFixed(2));
        }

        if (document.getElementById("3").checked) {
            /*cakeprice *2 */
            amount = total * 2 + toppings;
            message = (message + "<br>Your orders: <br>" + "Round Cake " + areaRound.toFixed(2) + "cm " + "with 3 Layers: $" + (total * 2).toFixed(2) + message2 + "<br> Total: $" + amount.toFixed(2));
        }
    }

    document.getElementById("orderDetails").innerHTML = "<br>Customer Details: <br>" + message;
}