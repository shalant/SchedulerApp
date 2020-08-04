var ls = window.localStorage

ls.setItem('test', 'testing123')

console.log('locstor--->', ls)

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//update the time every 2nd (holy shit i did this with my own google-fu)
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

//this grabs the time-block number and displays it in the console log
$(".time-block").each(function(index, timeBlock){
    console.log(timeBlock.id.slice(5))
})

//this grabs the time-block number for use later...
var intager = $(".time-block").each(function(index, timeBlock){})

//sets up the ability to change styles...
var element = document.getElementById("hour-09");
  element.classList.add("past");

//attempt to display time in a single number
//var today = new Date();
//var hour = today.getHours();

var currentHour = moment().hours();
console.log (currentHour);

//some function to list all the divs with id "hour-n"
//getElementById
//var res = str.substring(6);

//this displays the present time in a big number, and i can compare it to present time...
//TODO: must update time every second
//it would be elegant to somehow simplify and associate this with lines 3-8
//console.log(Date.now());
//setTimeout(function(){
//    console.log(Date.now())
//}, 3000)

//this was found on W3...how to convert each time block to a number
//(FROM FRANK)moment js to take Date.now and format it so that it returns the h (hour)


//if (currentHour < intager) {
  //  timeblock.classlist.add()
//}

if (intager < currentHour) {
  $(this).addClass("past");
} 
else if (intager === currentHour) {
  $(this).removeClass("past");
  $(this).addClass("present");
} 
else {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
}


//if (intager < currentHour) {
  //timeblock.classlist.add("past")}
//}
    //timeblock.classList.add('past')
    //we want change it to be green
//    greeting = "Good morning";
//  } else if (time < 20) {
 //   timeblock.classlist.add('present')
//    greeting = "Good day";
//  } else  {

//    greeting = "Good evening";
//  }



//localstorage...
//localStorage.setItem('CalendarTasks', JSON.stringify(//how to format the text entry so it's an array?))
//localStorage.setItem('col-md-10 description', description.innerHTML);

//how to save the entry in column 2? think of this in terms of local storage, take the object out of LS, use JSON.stringify