let read =(id)=>{
   return document.getElementById(id);
}

import navbar from "../components/navbar.js";
read("navbar").innerHTML = navbar();


const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

import { foody,appendData } from "..//components/fetch.js";

foody(url).then((data)=>{
   let container = read("container");
      container.innerHTML = null;
      appendData(data.meals,container);
})