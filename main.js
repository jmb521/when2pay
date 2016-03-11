

var incomearr = [];
var incomerows;
var incomename = document.getElementById("income").value; 
var frequencydate = document.getElementById("frequency").value;
var nextpaydate = document.getElementById("nextpay").value;

var addIncome = function () {

  
    incomearr.push({income1: incomename, 
                frequency: frequencydate, 
                nextPay: nextpaydate});
   incomerows += "<tr><td>" + incomearr[0].income1 + "</td><td>" + "<td>" + incomearr[0].frequency + "</td><td>" + incomearr[0].nextPay + "</td></tr>";
    $(".incometable").append(incomerows);
};

addIncomeBtn = document.getElementById("incomebutton");
addIncomeBtn.onclick = addIncome;


//
//var addBills = function () {
//    
//    
//};
//
//addBillBtn = document.getElementById('billbutton'); 
//addBillBtn.onclick = addBills;