

function solved(){

    let ag = document.querySelector("#age");
    let nam = document.querySelector("#name");
    var go = document.querySelector("#submit");
    
    let week = document.querySelector('.week');
    
    let day = document.querySelector('.day');
    
    let hr = document.querySelector('.hr');
    
    let min = document.querySelector('.min');

    let user = document.querySelector('.user')

   let name = nam.value;

    let second = document.querySelector('.second');
    
    let age = ag.value;
    
    let weeks = age * 48;
    let days = age * 365;
   
    let hours = days * 24;
    
    let mins = hours * 60;

    let seconds = mins * 60;

    week.textContent ="You have live "+weeks+" weeks";
    day.textContent ="You have live "+days+" days";
    hr.textContent ="You have live "+hours+" hours";
    min.textContent ="You have live "+mins+"mins";
    second.textContent ="You have live "+seconds+"s";
    user.textContent ="Hi " + name;
   
    
}


