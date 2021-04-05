var url = "http:www.xxx.net/x/x.html?id=898602B8261890349226"
var params = url.split("?")[1].split("&")
console.log(params)
var obj = {}
// for (i = 0; i < params.length; i++) {
// var param = params[i].split("=");
// obj[param[0]] = param[1]
// }
params.map(v => obj[v.split("=")[0]] = v.split("=")[1])
console.log(obj) //{id: "898602B8261890349226", aa: "123", bb: "456"}

let a = "?a=3"