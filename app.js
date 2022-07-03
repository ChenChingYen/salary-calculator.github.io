const MonthsSelect = document.getElementById("months");
const basicInputField = document.getElementById("basics");
const normalPayInputField = document.getElementById("normal_pay");
const doublePayInputField = document.getElementById("double_pay");
const SaturdayInputField = document.getElementById("saturday");
// console.log(MonthsSelect.value);
const month = document.getElementById("month-display");
const year = document.getElementById("year-display");

const normalDayDisplay = document.getElementById("normal_day");
const basicDisplay = document.querySelectorAll(".basic");
const normalDayTotalDisplay = document.getElementById("normal_day_total");
const afterEPF = document.getElementById("after_epf");
const normalDayTotalAfterEPF = document.getElementById("normal_day_total_after_epf");
const doubleDayDisplay = document.getElementById("double_day");
const doubleBasicDisplay = document.getElementById("double_basic");
const doubleDayTotalDisplay = document.getElementById("double_day_total");
const saturdayDisplay = document.getElementById("saturday_day");
const saturdayTotalDisplay = document.getElementById("saturday_total");
const totalSalaryDisplay = document.querySelectorAll(".total_salary");
const totalWorkingDayDisplay = document.getElementById("total_working_day");

const output = document.querySelector(".output");

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(MonthsSelect.value==""||basicInputField.value==""||normalPayInputField.value==""||doublePayInputField.value==""||SaturdayInputField.value==""){
        alert("Please fill in all details required");
        return;
    }
    // display output
    output.classList.add("show");
    var date = new Date();
    year.innerHTML = date.getFullYear();
    month.innerHTML = MonthsSelect.value;

    var basicInput = parseFloat(basicInputField.value);
    var normalDayInput = parseInt(normalPayInputField.value);
    var doubleDayInput = parseInt(doublePayInputField.value);
    var saturdayInput = parseInt(SaturdayInputField.value);
    // var basicInput = 70;
    // var normalDayInput = 26;
    // var doubleDayInput = 2;
    // var saturdayInput = 2;

    basicDisplay.forEach((basic)=>{
        basic.innerHTML = basicInput.toFixed(2);
    });
    normalDayDisplay.innerHTML = normalDayInput;
    doubleDayDisplay.innerHTML = doubleDayInput;
    saturdayDisplay.innerHTML = saturdayInput;
    doubleBasicDisplay.innerHTML = (basicInput*2).toFixed(2);

    var temp = normalDayInput*basicInput;
    normalDayTotalDisplay.innerHTML = temp.toFixed(2);

    afterEPF.innerHTML = "- "+(temp*0.09).toFixed(2);

    temp *= 0.91;
    normalDayTotalAfterEPF.innerHTML = temp.toFixed(2);

    var doublePayTotal = doubleDayInput*basicInput*2;
    doubleDayTotalDisplay.innerHTML = doublePayTotal.toFixed(2);

    var saturdayTotal = saturdayInput*basicInput;
    saturdayTotalDisplay.innerHTML = saturdayTotal.toFixed(2);

    temp = temp + doublePayTotal + saturdayTotal;
    totalSalaryDisplay.forEach((total)=>{
        total.innerHTML = "RM "+temp.toFixed(2);
    });

    totalWorkingDayDisplay.innerHTML = normalDayInput + doubleDayInput + saturdayInput;

    // console.log(basicInputField.value);
    // console.log(normalPayInputField.value);
    // console.log(doublePayInputField.value);
    // console.log(SaturdayInputField.value);
});
