/*******************************IndexOf*************************************/
var day = 'have a nice day';
document.write(day.indexOf('a'));
document.write("<br>");

/*******************************LastIndexOf*************************************/

document.write(day.lastIndexOf('a'));
document.write("<br>");

/*******************************Length*************************************/

document.write(day.length);
document.write("<br>");

/*******************************slice*************************************/
document.write(day.slice(5, 8));
document.write("<br>");

/*******************************substring*************************************/

document.write(day.substring(5, 15));
document.write("<br>");

/*******************************substr*************************************/

document.write(day.substr(-5, 12));
document.write("<br>");

/*******************************replace*************************************/

document.write(day.replace('nice', 'good'));
document.write("<br>");

/*******************************toUpperCase*************************************/

document.write(day.toUpperCase());
document.write("<br>");

/*******************************toLowerCase*************************************/

var day2 = "HAVE A NICE DAY";
document.write(day.toLowerCase());
document.write("<br>");

/*******************************includes*************************************/
document.write(day.includes('day'));
document.write("<br>");

/*******************************match*************************************/

document.write(day.match('ave'));
document.write("<br>");

/*******************************repeat*************************************/
document.write(day.repeat(5));
document.write("<br>");

/*******************************trim*************************************/
var day3 = 'My name is            Vaishali';
document.write(day3.trim(" "));
document.write("<br>")

/*******************************charAt*************************************/
document.write(day.charAt(1));
document.write("<br>");

/*******************************charCodeAt*************************************/
document.write(day.charCodeAt(2));
document.write("<br>");

/*******************************concat*************************************/

document.write(day.concat(day3));
document.write("<br>");

/*******************************Search*************************************/

document.write(day.search('nice'));
document.write("<br>");

/*******************************Split*************************************/

document.write(day.split(" "));
document.write("<br>");

ans = day.split(" ");
document.write(ans[2]);
document.write("<br>");

/*******************************bold*************************************/
document.write(day.bold());
document.write("<br>");

/*******************************big*************************************/
document.write(day.big());
document.write("<br>");

/*******************************Fontcolor*************************************/
document.write(day.fontcolor('purple'));
document.write("<br>");

/*******************************small*************************************/
document.write(day.small());
document.write("<br>");

/*******************************link*************************************/
day5 = 'Facebook';
document.write(day5.link('https://www.facebook.com'));
document.write("<br>");

/*******************************blink************************************/

var day6 = "Vaishali";
document.write(day6.blink());

document.getElementById('b').innerHTML = a;
document.write("<br>");


/*******************************Anchor*************************************/
var day8 = "Facebook";
document.write(day8.anchor('https://www.facebook.com'));