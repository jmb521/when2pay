

var incomearr = [];
var incomerows;
var incomename = document.getElementById("income").value; 
var frequencydate = document.getSelection("frequency").value;
var nextpaydate = document.getElementById("nextpay").value;

var addIncome = function () {

  
    incomearr.push({income1: incomename, 
                frequency: frequencydate, 
                nextPay: nextpaydate});
    for(var i=0; i<incomearr.length; i++) {
   incomerows += "<tr><td>" + incomearr[i].income1 + "</td><td>" + "<td>" + incomearr[i].frequency + "</td><td>" + incomearr[i].nextPay + "</td></tr>";
    }
   
    $("#incometr").append(incomerows);
    
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