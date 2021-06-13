function compute()
{
    var principal = document.getElementById("principal").value;

    var noOfYears = document.getElementById("noOfYears").value;

    var rate = document.getElementById("rate").value;

    var result = document.getElementById("result");

    result.innerHTML = "If you deposit " + principal + ", at an interest rate of " + rate + "% You will recieve an amount of " + (principal*noOfYears*rate/100);
    
}