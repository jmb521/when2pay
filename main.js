

var incomearr = [];
var billarr = [];
var incomerows, billrows;
var incomename = document.getElementById("income");
var frequencydate = document.getSelection("frequency");
var nextpaydate = document.getElementById("nextpay");
var addIncomeBtn; 
var bill = document.getElementById("bill");
var billfrequency = document.getElementById("billfrequency");
var duedate = document.getElementById("duedate");



var addIncome = function () {

  
    incomearr.push({income1: incomename.value, 
                frequency: frequencydate.value, 
                nextPay: nextpaydate.value});
    for (var i=0; i<incomearr.length; i++) {
   incomerows += "<tr><td>" + incomearr[i].income1 + "</td><td>" + incomearr[i].frequency + "</td><td>" + incomearr[i].nextPay + "</td></tr>";
    }
   
    $("#incometr").append(incomerows);
    
};

addIncomeBtn = document.getElementById("incomebutton");
addIncomeBtn.onclick = addIncome;




var addBills = function () {
    
    billarr.push({
        bill1: bill.value, 
        billfrequency: billfrequency.value, 
        duedate: duedate.value
    }); 
    for(var j=0; j<billarr.length; j++) {
        billrows += "<tr><td>" + billarr[j].bill1 + "</td><td>" + billarr[j].billfrequency + "</td><td>" + billarr[j].duedate + "</td></tr>";
        
    }
    $("#billtr").append(billrows);
};

addBillBtn = document.getElementById('billbutton'); 
addBillBtn.onclick = addBills;