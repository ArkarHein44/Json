// Get UI

const getrandombtn = document.getElementById('randombtn');
const getheader = document.getElementById('header');
const getdisplayone = document.getElementById('displayone');

const getdisplaytwo = document.getElementById('displaytwo');


const getsearchbtn = document.getElementById('searchbtn');

getsearchbtn.addEventListener('click',function(){
    getsearchfood();
})

function getsearchfood() {

    getdisplayone.innerHTML =``;
    getdisplaytwo.innerHTML = ``;
    
    let getinput = document.getElementById('search');
    let getinputval = getinput.value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getinputval}`;
    // console.log(getinputval);

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data);
        const food = data.meals;
        // console.log(food);
        searchfood(food);
        ;
        
        
    }).catch(err=>console.log(err));

    function searchfood(food){
        if(food === null){
            getdisplayone.innerHTML = `
            <div class="alert">
                <p style="color:#fff;text-align:center"> No results for your search "${getinputval}", Try with another keyword.!!!</p>
            </div>    
            `;
        }else{
            for(let i=0;i <= food.length; i++){
                // console.log(food[i]);  
    
                // console.log(i);
                // <img src="${food[i].strMealThumb}" alt="${food[i].strMeal}" />
                
                let div = document.createElement('div');    
    
                if( food[i].strMealThumb){
                    div.innerHTML = `
                        
                        <div class="img" style="background-image:url(${food[i].strMealThumb})">
                            <div class="overlay">
                                <span>${food[i].strMeal}</span>
                            </div>
                           
                        </div>                    
                    `;
                    
                    getdisplaytwo.appendChild(div);
                    getinput.value = ``
                }   
              
            }        
        }     
    }
            
}

getrandombtn.addEventListener('click',getrandomfood);
 
function getrandomfood(){

    // console.log('hay');
    let url = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(url)
    .then(response=>response.json())
    .then(data=>{

        // console.log(data);
        // console.log(typeof data); // object

        const food = data.meals[0];
        foodsettertodom(food);       

    })
    .catch(err=>console.log(err));

    function foodsettertodom(food) {
        // console.log(food);
        // console.log(food.strMeal);
        // console.log(food.strInstructions);
        // console.log(food.strIngredient1);
        // console.log(food.strMealThumb);
        
        
        getdisplaytwo.innerHTML = ``;
        const ingredients = [];

        for(let x = 1; x <= 20; x++){
            // console.log(x);

            // ingredients.push(`${food[`strIngredient${x}`]} = ${food[`strMeasure${x}`]}`);
            // console.log(food[`strIngredient${x}`]);

            if(food[`strIngredient${x}`]){
                ingredients.push(`${food[`strIngredient${x}`]} = ${food[`strMeasure${x}`]}`);
            }

        }
       
        // console.log(ingredients);

        getdisplayone.innerHTML = `
            <h3>${food.strMeal}</h3>
            <img src="${food.strMealThumb}" alt="${food.strMeal}" />
            <ul class="list-group">
                <li>
                    <h3>${food.strArea} ${food.strCategory}</h3>
                </li>
            </ul>
            
            <div>
                <p>${food.strInstructions}</p>
                <h3>Main Ingredients</h3>
                <ol>
                ${ingredients.map(ingredient=>`<li>${ingredient}</li>`).join("")}
                </ol>
            </div>
            
        `;

    }

}

