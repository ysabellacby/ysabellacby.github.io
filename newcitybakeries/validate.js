




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

    /**Validate phone number*/
    if (pn.length < 1 || pn.length > 20) {
        alert("Phone number required");
    } else {
        message = (message + pn + "<br>");
    }
    if (reg2.test(pn) == false) {
        alert("Invalid phone number. Please check the format.")
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

    /**Validate email*/
    if (e.length < 1 || e.length > 30) {
        alert("Email required");
    } else {
        message = (message + e + "<br>");
    }

    if (reg4.test(e) == false) {
        alert("Invalid email. Please check the format.")
    }

    document.getElementById("customerDetails").innerHTML = message;