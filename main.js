

var incomearr = [];
var billarr = [];
var incomerows, billrows;
var incomename = document.getElementById("income");
var frequencydate = document.getElementById("frequency");
var nextpaydate = document.getElementById("nextpay");
var addIncomeBtn; 
var bill = document.getElementById("bill");
var billfrequency = document.getElementById("billfrequency");
var duedate = document.getElementById("duedate");



var addIncome = function () {
    
    $(".incometablerow").empty();    
    
    
    incomearr.push({income1: incomename.value, 
                frequency: frequencydate.value,
                nextPay: nextpaydate.value});
    for (var i=0; i<incomearr.length; i++) {
      if(incomearr.length >1){
          
          i=incomearr.length-1;
      } 
     incomerows += "<tr class='incometablerow'><td>" + incomearr[i].income1 + "</td><td>" + incomearr[i].frequency + "</td><td>" + incomearr[i].nextPay + "</td><td></td></tr>";
    }
   
    $("#incometr").append(incomerows);
    
    
};


addIncomeBtn = document.getElementById("incomebutton");
addIncomeBtn.onclick = addIncome;




var addBills = function () {
    $(".billtablerow").empty();
    billarr.push({
        bill1: bill.value, 
        billfrequency: billfrequency.value, 
        duedate: duedate.value
    }); 
    for(var j=0; j<billarr.length; j++) {
    if(billarr.length >1) {
        j=billarr.length-1;
    }
        billrows += "<tr class='billtablerow'><td>" + billarr[j].bill1 + "</td><td>" + billarr[j].billfrequency + "</td><td>" + billarr[j].duedate + "</td></tr>";
        
    }
    $("#billtr").append(billrows);
};

addBillBtn = document.getElementById('billbutton'); 
addBillBtn.onclick = addBills;