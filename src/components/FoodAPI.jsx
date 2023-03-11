
import { useEffect, useState } from "react";
const FoodAPI = () =>{
      const [foodItem, setFoodItem] = useState([]);
      const GetFoodInfo = async () => {
            try {
                let endpoint = `https://api.edamam.com/api/food-database/v2/parser?app_id=92816daa&app_key=73ff9b376241d4d0a773da6fde256cb8&nutrition-type=cooking`;
                let res  = await fetch(endpoint);
                let data = await res.json();
              
                setFoodItem(data.hints);

               } catch (error) {
                      console.log(error);
               }  
          };

useEffect( () => {
      GetFoodInfo();
},[]);

      return (
            <>
            <h1>Food Items</h1>
            <div className="row">
                 
                  {foodItem.map((listFood,index) =>{
                       return (
                        <>
                        <div className="col-md-3">
                        <div id={index} className="card m-2 p-2">
                             <div className="card-img mb-2">
                              <img src={listFood.food.image} className="w-25 rounded" />
                              </div> 
                        <h6 className="card-title"> {listFood.food.label}</h6>
                        <div className="card-body">
                        <p>Category: {listFood.food.category}<br/>
                        Nutrients ENERGY: {listFood.food.nutrients.ENERC_KCAL}<br/>
                        Nutrients FAT: {listFood.food.nutrients.FAT}</p>
                        <ul>
                              {listFood.measures.map((measure,index) => {
                                    return (
                                          <>
                                          <li id={index}>
                                          {measure.label} : {measure.weight}
                                          </li>
                                          </>
                                    );
                              })}

                        </ul>
                        </div>
                        </div>
                        </div>
                        </>
                       )
                  })
                  }
                
            </div>
         
           
            </>
      );

}

export default FoodAPI;