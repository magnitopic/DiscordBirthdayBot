var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), 05, 11, 41, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.86400000
}
setTimeout(function(){console.log("It's 10am!")}, millisTill10);