var city = ['pune', 'mumbai', 'delhi', 'kolkatta', 'chennai'];
document.write(city);
document.write("<br>");
/*****************************length*******************************/

document.write(city.length);
document.write("<br>");

/*****************************pop*******************************/
document.write(city.pop());
document.write("<br>");

/*****************************push*******************************/

document.write(city.push());
document.write("<br>");

/*****************************shift*******************************/

document.write(city.shift());
document.write("<br>");

/*****************************unshift*******************************/

document.write(city.unshift());
document.write("<br>");

/*****************************change******************************/
//ans = city[2].change('nagpur');
//document.write(ans);
/*****************************delete******************************/

ans = delete(city[4]);
document.write(city);
document.write("<br>");

/*****************************splice******************************/

document.write(city.splice(5, 1));
document.write(city);
document.write("<br>");

/*****************************reverse*****************************/
document.write(city.reverse());
document.write("<br>");

/*****************************IndexOf******************************/

document.write(city.indexOf('kolkatta'));
document.write("<br>");

/*****************************LastIndexOf******************************/

document.write(city.lastIndexOf('chennai'));
document.write("<br>");

/*****************************includes******************************/

document.write(city.includes('Nagpur'));
document.write("<br>");

/*****************************tostring******************************/

document.write(city.toString());
document.write("<br>");

/*****************************concat******************************/
var city2 = ['MH', 'GJ', 'RJ', 'HR', 'JK'];
ans = city.concat(city2);
document.write(ans);
document.write("<br>");

/*****************************sort******************************/
document.write(city.sort());
document.write("<br>");

var city4 = [48, 78, 40, 38, 90, 21];
document.write(city4.sort());

/***********************************************************/