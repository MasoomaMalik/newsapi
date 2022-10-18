import React from "react";
import { Link, useLocation, useNavigate ,Routes,Route} from "react-router-dom";
import DrawerAppBar from "../components/DrawerAppBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardMedia, Card, CardContent, Grid, Typography } from "@mui/material";
import ArticleDetail from "./ArticleDetail";

const Products = () => {
  const navigate=useNavigate();
  const location=useLocation();
  let gotoArticleDetail=(e)=>{

navigate('/ArticleDetail',{state:e})

  }
  const [newsArr, setNewsArr] = useState([]);
  let getData = async () => {
   
    let resp = await axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-10-18&sortBy=popularity&apiKey=b928528e019f440d94e64387f97cd2c1"
      )

      .then(function (response) {
        console.log(response.data.articles);
        setNewsArr(response.data.articles);
        // [mainArr]=response.data
        // console.log("mainArr")
        // console.log(newsArr)
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <DrawerAppBar />

      <div>Products</div>
      {console.log("newsArr")}
      {console.log(newsArr)}

      <Grid container
      sx={{justifyContent:'space-around'}}
      >
          {newsArr.map((e, i) => (
             
        <Grid item  sx={{ }} >


          {/* <Link to={`/ArticleDetail/${e.source.id}`}> */}
            <Card
              sx={{
                width: { md: "350px", xs: "100%" },
                boxShadow: "none",
                borderRadius: 0,
                marginX: 2,
                marginY:1,
                height:'auto'
              }}
              key={i}
              onClick={()=>{gotoArticleDetail(e)}}
              >
                <CardMedia
          image={e.urlToImage}
           
          sx={{ width: 358, height: 180 }}
          />

              <CardContent
                sx={{
                  backgroundColor: "#545151",
                  height: "auto",
                }}
              >
                <Typography variant="button" fontWeight="bold" color="#FFF">
                  {e.title }
                </Typography>
                <Typography color="gray" variant="subtitle2" fontWeight="bold">
                  {e.author }
                </Typography>


              </CardContent>
            </Card>
          {/* </Link> */}
        </Grid>
          ))}
      </Grid>

<Routes>

</Routes>
      {/* <div>
    <Link to='/'>Home</Link>
    <Link to='/Pricing'>Pricing</Link>
    <Link to='/Blog'>Blog</Link>
    <Link to='/Products'>Products</Link>
*/}
    </>
  );
};

export default Products;
