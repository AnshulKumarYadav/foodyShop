



let foody = async(url) => {
    try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;

    }catch(e){
        console.log("e: ", e);
    }
}
let appendData = (data,container)=>{
    data.forEach(function(el){
        let name = document.createElement("p");
        name.innerText = `Dish: ${el.strMeal}`;

        let type = document.createElement("p");
        type.innerText=`Category of Dish:${el.strCategory}`;

        let location = document.createElement("p");
        location.innerText = `Famous at ${el.strArea}`;

        let description = document.createElement("p");
        description.innerText = `Instructions to make this:\n${el.strInstructions}`;

        let img = document.createElement("img");
        img.src = el.strMealThumb;


        let ingrediant = document.createElement("div");
        
        let img1 = document.createElement("img");
        img1.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient1}-Small.png`;
        let measure1 = document.createElement("p");
        measure1.innerText = el.strMeasure1;
        let ingrediant1 = document.createElement("div");
        ingrediant1.append(img1,measure1)

        let img2 = document.createElement("img");
        img2.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient2}-Small.png`;
        let measure2 = document.createElement("p");
        measure2.innerText = el.strMeasure2;
        let ingrediant2 = document.createElement("div");
        ingrediant2.append(img2,measure2)

        let img3 = document.createElement("img");
        img3.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient3}-Small.png`;
        let measure3 = document.createElement("p");
        measure3.innerText = el.strMeasure3;
        let ingrediant3 = document.createElement("div");
        ingrediant3.append(img3,measure3)

        let img4 = document.createElement("img");
        img4.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient4}-Small.png`;
        let measure4 = document.createElement("p");
        measure4.innerText = el.strMeasure4;
        let ingrediant4 = document.createElement("div");
        ingrediant4.append(img4,measure4)

        let img5 = document.createElement("img");
        img5.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient5}-Small.png`;
        let measure5 = document.createElement("p");
        measure5.innerText = el.strMeasure5;
        let ingrediant5 = document.createElement("div");
        ingrediant5.append(img5,measure5)

        let img6 = document.createElement("img");
        img6.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient6}-Small.png`;
        let measure6 = document.createElement("p");
        measure6.innerText = el.strMeasure6;
        let ingrediant6 = document.createElement("div");
        ingrediant6.append(img6,measure6)

        let img7 = document.createElement("img");
        img7.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient7}-Small.png`;
        let measure7 = document.createElement("p");
        measure7.innerText = el.strMeasure7;
        let ingrediant7 = document.createElement("div");
        ingrediant7.append(img7,measure7)

        let img8 = document.createElement("img");
        img8.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient8}-Small.png`;
        let measure8 = document.createElement("p");
        measure8.innerText = el.strMeasure8;
        let ingrediant8 = document.createElement("div");
        ingrediant8.append(img8,measure8)

        let img9 = document.createElement("img");
        img9.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient9}-Small.png`;
        let measure9 = document.createElement("p");
        measure9.innerText = el.strMeasure9;
        let ingrediant9 = document.createElement("div");
        ingrediant9.append(img9,measure9)

        let img10 = document.createElement("img");
        img10.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient10}-Small.png`;
        let measure10 = document.createElement("p");
        measure10.innerText = el.strMeasure10;
        let ingrediant10 = document.createElement("div");
        ingrediant10.append(img10,measure10)

        let img11 = document.createElement("img");
        img11.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient11}-Small.png`;
        let measure11 = document.createElement("p");
        measure11.innerText = el.strMeasure11;
        let ingrediant11 = document.createElement("div");
        ingrediant11.append(img11,measure11)

        let img12 = document.createElement("img");
        img12.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient12}-Small.png`;
        let measure12 = document.createElement("p");
        measure12.innerText = el.strMeasure12;
        let ingrediant12 = document.createElement("div");
        ingrediant12.append(img12,measure12)

        let img13 = document.createElement("img");
        img13.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient13}-Small.png`;
        let measure13 = document.createElement("p");
        measure13.innerText = el.strMeasure13;
        let ingrediant13 = document.createElement("div");
        ingrediant13.append(img13,measure13)

        let img14 = document.createElement("img");
        img14.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient14}-Small.png`;
        let measure14 = document.createElement("p");
        measure14.innerText = el.strMeasure14;
        let ingrediant14 = document.createElement("div");
        ingrediant14.append(img14,measure14)

        let img15 = document.createElement("img");
        img15.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient15}-Small.png`;
        let measure15 = document.createElement("p");
        measure15.innerText = el.strMeasure15;
        let ingrediant15 = document.createElement("div");
        ingrediant15.append(img15,measure15)

        let img16= document.createElement("img");
        img16.src = `https://www.themealdb.com/images/ingredients/${el.strIngredient16}-Small.png`;
        let measure16 = document.createElement("p");
        measure16.innerText = el.strMeasure16;
        let ingrediant16 = document.createElement("div");
        ingrediant16.append(img16,measure16)
        ingrediant.setAttribute("id","ingradiants");

        ingrediant.append(
            ingrediant1,ingrediant2,ingrediant3,ingrediant4,ingrediant5,ingrediant6,ingrediant7,ingrediant8,ingrediant9,
            ingrediant10,ingrediant11,ingrediant12,ingrediant13,ingrediant14,ingrediant15,ingrediant16
        )


        let btn = document.createElement("button");
        btn.innerText="Watch on youtube";
        btn.addEventListener("click",function(){
            btnClick(el);
        })

        let innerbox = document.createElement("div");
        innerbox.append(name,type,location,description)

        let box = document.createElement("div");
        box.setAttribute("id","dish");
        box.append(img,innerbox)

        let div = document.createElement("div");
        div.append(box,ingrediant,btn);
        container.append(div);




    });
    
}

function btnClick(el){
    window.location.href=el.strYoutube;
}

export {foody,appendData} ;