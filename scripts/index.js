
let read =(ids)=>{
   return document.getElementById(ids);
}


import navbar from "../components/navbar.js";
read("navbar").innerHTML = navbar();

import {foody,appendData} from "../components/fetch.js";


let search =(e)=>{
  if(e.key==="Enter"){
    let value = read("search").value;
    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    foody(url).then((data)=>{
      console.log(data);
      let container = read("container");
      container.innerHTML = null;
      appendData(data.meals,container);
    })
  }
}

read("search").innerHTML = addEventListener("keydown",search);


