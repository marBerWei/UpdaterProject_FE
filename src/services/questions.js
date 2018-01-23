export function changeToDate(string){
  let parts = string.slice(0,10).split('-');
  var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
  return mydate.toString().slice(0,15)
}