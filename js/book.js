document.getElementById("contact_form").onsubmit = function() {
    name_input
    //khai báo dữ liệu
    var user = document.getElementById("name_input").value;
    var email = document.getElementById("email_input").value;
    var phone = document.getElementById("telephone_input").value;
    var sub = document.getElementById("subject_input").value;
    var message = document.getElementById("message_input").value;
    //Check form
    if (user.value == "") {
        alert("UserName không được bỏ trống");
        return false;
    }
    if (email.value == "") {
        alert("Email không được bỏ trống");
        return false;
    }
    if (phone.value == "") {
        alert("số điện thoại không được bỏ trống");
        return false;
    }
    if (message.value == "") {
        alert("This box không được bỏ trống");
        return false;
    }
    var exp1 = /^\w+@+gmail+\.com$/i;
    var exp2 = /^\w+@+yahoo+\.com$/i;

    if (exp1.test(email) == false && exp2.test(email) == false) {
        alert("Email uncorrect!! Please re-enter your email");
        document.getElementById("email_input").focus();
        return false;
    }

    var a = new Array();
    a.push("Tickets Booking");
    a.push("------------------");
    a.push("Name : " + user);
    a.push("Email : " + email);
    a.push("Phone : " + phone);
    a.push("Subject : " + sub);
    a.push("Tickets : " + message);
    a.push("---------------------------------------------------");
    a.push("Congratulation You have book a tickets successfull");
    //Khai báo chuỗi s là chuỗi a được nối với nhau bằng khoảng trắng
    var s = a.join("\n");
    //Thông báo thông tin đã được đăng ký
    alert(s);
    return false;

};