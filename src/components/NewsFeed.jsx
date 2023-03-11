
import { useEffect, useState } from "react";
const NewsFeed = () =>{
      const [newsItem, setNewsItem] = useState([]);
      const GetNewsInfo = async () => {
            try {
                let endpoint = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=e1003effaa9349849a079d1b9652f2b6`;
                let res  = await fetch(endpoint);
                let data = await res.json();
                setNewsItem(data.articles);

               } catch (error) {
                      console.log(error);
               }  
          };

useEffect( () => {
GetNewsInfo();
},[]);

      return (
            <>
            <h1>Top Headlines</h1>
           
                  {newsItem.map((listNews,index) =>{
                       return (
                        <>
                        <div id={index}>
                        <div className="card m-2 p-2">
                        <h6 className="card-title"> {listNews.author}</h6>
                        <div className="card-body">
                        {listNews.title}
                        </div>
                        </div>
                        </div>
                        </>
                       )
                  })
                  }
           
            </>
      );

}

export default NewsFeed;