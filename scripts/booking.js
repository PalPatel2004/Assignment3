/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let selected_day = [document.querySelector("#monday"),document.querySelector("#tuesday"),document.querySelector("#wednesday"),document.querySelector("#thursday"),document.querySelector("#friday")];
let number_of_selected_day = 0;

function clicked() {
    if (this.classList.contains("clicked"))
        alert("Click only time!");
    else
        number_of_selected_day += 1;
        this.className = "clicked";
        calculate_weekly_cost();
}



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
for (let day of selected_day) {
    day.addEventListener("click", clicked);

}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clear_button = document.getElementById("clear-button");
let net_cost = document.getElementById("calculated-cost");

function clear_day(){
    number_of_selected_day = 0;
    let clear_all_day = document.querySelectorAll("#weekday");
    for (let day of clear_all_day){
        day.className = "blue-hover";
    }
    net_cost.innerHTML = 0;
    location.reload();

}

clear_button.addEventListener("click" , clear_day);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let half_button = document.getElementById("half");
let daily_rate = 35;

function half_day(){
    daily_rate = 20;
    half_button.className = "clicked";
    full_day_button.className = "blue-hover";
    calculate_weekly_cost();
}

half_button.addEventListener("click" , half_day);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let full_day_button = document.getElementById("full");

function full_day(){
    daily_rate = 35;
    full_day_button.className = "clicked";
    calculate_weekly_cost();
}

full_day_button.addEventListener("click" , full_day);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate_weekly_cost(){
    let cost = daily_rate * number_of_selected_day;
    net_cost.innerHTML = cost;

    
 }

