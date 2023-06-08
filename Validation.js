function validate() {

    /********************************* Validation for Name ******************/
    var x = document.forms['myForm']['sname'].value;
    if (x == null || x == "") {
        alert('Name must be filled');
        document.myForm.sname.focus();
        return false;
    }

    if (!/^[a-z A-z]*$/g.test(document.myForm.sname.value)) {
        alert("Invalid Characters");
        document.myForm.sname.focus();
        document.getElementById('sname').value = '';
        return false;
    }

    /********************************* Validation for Roll No ******************/


    var x = document.forms['myForm']['roll'].value;
    if (x == null || x == "") {
        alert("roll no must be filled out");
        document.myForm.roll.focus();
        return false;
    }

    if (!/^[0-9]*$/g.test(document.myForm.roll.value)) {
        alert("only numbers");
        document.myForm.roll.focus();
        document.getElementById('roll').value = '';
        return false;
    }

    /********************************* Validation for Address ******************/


    var x = document.forms['myForm']['address'].value;
    if (x == null || x == "") {
        alert("Address must be filled out");
        document.myForm.address.focus();
        return false;
    }
    if (!/[/w/d]*$/g.test(document.myForm.address.value)) {
        alert("only numbers");
        document.myForm.address.focus();
        document.getElementById('address').value = '';
        return false;
    }


    /********************************* Validation for Phone ******************/

    var x = document.forms['myForm']['phone'].value;
    if (x == null || x == "") {
        alert("phone  no must be filled out");
        document.myForm.phone.focus();
        return false;
    }

    if (!/^[0-9]*$/g.test(document.myForm.phone.value)) {
        alert("only numbers");
        document.myForm.phone.focus();
        document.getElementById('phone').value = '';
        return false;
    }

    /********************************* Validation for Email ******************/


    var x = document.forms['myForm']['email'].value;
    if (x == null || x == "") {
        alert("email must be filled out");
        document.myForm.email.focus();
        return false;
    }

    /********************************* Validation for Checkbox ******************/


    if (term == false) {
        alert("please check the box to continue");
        return true;
    }
}