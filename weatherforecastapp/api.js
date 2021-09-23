export const fetchData =async()=>{
try{
  
const response =await fetch("https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=6c4ea69a045e93d4a51fdf9130a7a8c5");
console.log("AAA",response);
const data= await response.json();
console.log(data);
return data;
}
catch(e){
console.log(e);

}
}