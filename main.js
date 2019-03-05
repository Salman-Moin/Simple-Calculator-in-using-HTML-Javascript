    var a, firstNo, secondNo, result;  

    function subtract() {

       a = frmCal.txtDisplay.value;
       firstNo = parseFloat(a.slice(0, a.indexOf("-")) );
    }

    function add() {

       a = frmCal.txtDisplay.value;
       firstNo = parseFloat(a.slice(0, a.indexOf("+")) );
    }

    function multiply() {

       a = frmCal.txtDisplay.value;
       firstNo = parseFloat(a.slice(0, a.indexOf("*")) );
    }

    function divide() {

       a = frmCal.txtDisplay.value;
       firstNo = parseFloat(a.slice(0, a.indexOf("/")) );
    }


    function displayResult() {

       a = frmCal.txtDisplay.value;

       if (a.indexOf("-") !== -1) {
         secondNo = parseFloat(a.slice(a.indexOf("-")+1, a.length) );
         result = firstNo - secondNo;
         frmCal.txtDisplay.value = '';
         frmCal.txtDisplay.value = result;
       }

       else if (a.indexOf("+") !== -1) {
         secondNo = parseFloat(a.slice(a.indexOf("+")+1, a.length) );
         result = firstNo + secondNo;
         frmCal.txtDisplay.value = '';
         frmCal.txtDisplay.value = result;
       }

       else if (a.indexOf("/") !== -1) {
         secondNo = parseFloat(a.slice(a.indexOf("/")+1, a.length) );
         result = firstNo / secondNo;
         frmCal.txtDisplay.value = '';
         frmCal.txtDisplay.value = result;
       }

       else if (a.indexOf("*") !== -1) {
         secondNo = parseFloat(a.slice(a.indexOf("*")+1, a.length) );
         result = firstNo * secondNo;
         frmCal.txtDisplay.value = '';
         frmCal.txtDisplay.value = result;
       }

    } 