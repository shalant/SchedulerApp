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

$(".time-block").each(function(index, timeBlock){
    console.log('---I am the value at index' + index + 'of the timeBlocks ---' )
    console.log(timeBlock.id)
})



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



//if ({div.substringythingy} < 10) {
  
    //timeblock.classList.add('past')
    //we want change it to be green
//    greeting = "Good morning";
//  } else if (time < 20) {
    timeblock.classlist.add('present')
//    greeting = "Good day";
//  } else  {

//    greeting = "Good evening";
//  }



//localstorage...
//localStorage.setItem('CalendarTasks', JSON.stringify(//how to format the text entry so it's an array?))


//how to save the entry in column 2? think of this in terms of local storage, take the object out of LS, use JSON.stringify