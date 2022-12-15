/* let obj = {
    name: 'peter'
};
let user = obj;
user.name = "ami";
console.log(obj); */



/* 
//Shallow copy using Object.assign()
let obj = {
    name: 'peter'
};
let user = Object.assign({}, obj);
user.name = "ami";
console.log(obj);
console.log(user); */


/* 
//Shallow copy using destructuring
let obj = {
    name: 'peter'
};
let user = {...obj}
user.name = "ami";
console.log(obj);
console.log(user); */



/* 
//Deep Copy
let obj = {
    name: 'peter',
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    }
};
let user = JSON.parse(JSON.stringify(obj));
user.address.city = "ami";
console.log(obj);
console.log(user);
 */




/* 
let obj = {
    name: 'peter',
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    },
    getData: function(){
        return "all data";
    }

};
let user = _.cloneDeep(obj);                            //copy lodash npm or lodash cdn path
user.address.city = "ami";
console.log(obj);
console.log(user); 
 */




/* 
//Date and Time:

// let now = new Date();
// console.log(now)

// let d1 = new Date(0);           //gives us the reference date thats jan 
// console.log(d1)

// let newDate = new Date("2022-4-18")
// console.log(newDate)

//let newDate = new Date(year, month, date, hours, minutes, seconds, miliseconds);

let newDate = new Date(2022, 4, 26, 20,34,43,5);
console.log(newDate)
let yr = newDate.getFullYear();
console.log("the year is " + yr)
let dt = newDate.getDate();
console.log("the date is " + dt)
let mt = newDate.getMonth();
console.log("the month is " + mt)
let hr = newDate.getHours();
console.log("the hour is " + hr)
let min = newDate.getMinutes();
console.log("the minute is " + min)
let mil = newDate.getMilliseconds();
console.log("the miliseconds is " + mil)
let day = newDate.getDay();
console.log("the day is " + day)
newDate.setDate(15);                //setting the date to 15
console.log(newDate)
//Date.now()
console.log(Date.now())
 */

//------------------------------------

//Class 9/12/2022:

/* const date = new Date();
console.log(date);
console.log(date.toLocaleTimeString());
console.log(date.toISOString());
console.log(
  date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Calcutta',
  })
);
console.log(
  date.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Singapore',
  })
);
 */
//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

/* 
const now = new Date();
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getFullYear()); 
console.log(now);
now.setFullYear(2023);
now.setDate(13);
now.setHours(23);
now.setMinutes(30);
now.setSeconds(10);
console.log(now);
*/


//---------------------------------------------------
//HW: pick any 3 timezones &  print the current time after every 1 second


//console.log(now);
//console.log(now.toLocaleTimeString());

// console.log(
//     now.toLocaleTimeString('en-US', {
//       timeZone: 'Asia/Singapore',  
//     })
// );
// console.log(
//     now.toLocaleTimeString('en-US', {
//       timeZone: 'Africa/Nairobi', 
//     })
// );
// console.log(
//     now.toLocaleTimeString('en-US', {
//       timeZone: 'America/Bogota', 
//     })
// );
/* 
const handle = setInterval(function () { 
  const now = new Date();                   
    console.log('----------After every 1 second-------------');
    console.log('Asia/Singapore current time:');
    console.log(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Singapore',  
        })
    );
    console.log('Africa/Nairobi current time:');
    console.log(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Nairobi', 
        })
    );
    console.log('America/Bogota current time:')
    console.log(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Bogota', 
        })
    );
}, 1000);
 
setTimeout(function () {
    clearInterval(handle);
  }, 5000); 
 */

//---------------------------------------------------
//HW: Calculate the current age of person born at 15th Aug 1947 as of today

function age(dob) {
    // console.log(new Date(dob));
    var birth_date = new Date(dob).getDate()
    var birth_month = new Date(dob).getMonth() +1
    var birth_year = new Date(dob).getFullYear()
  
    var date = new Date();
  
    var today_date = date.getDate();
    var today_month = 1 + date.getMonth();
    var today_year = date.getFullYear();
  
    var monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (birth_date > today_date) {
      today_date = today_date + monthArr[today_month - 1];
      today_month = today_month - 1;
    }
    if (birth_month > today_month) {
      today_month = today_month + 12;
      today_year = today_year - 1;
    }
    var date = today_date - birth_date;
    var month = today_month - birth_month;
    var year = today_year - birth_year;
  
    console.log(year, "years", month, "months", date, "days")
  }
  age("1947/08/15");
   