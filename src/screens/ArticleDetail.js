import { Grid,Card,CardContent,CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useLocation, useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const [rData,setRData]=useState()
  const location=useLocation();

  let rcvData= location.state;

  let getData = async () => {
   
    let resp = await axios
      .get(
        // https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=
        // `https://newsapi.org/v2/everything?q=${id}&sortBy=popularity&apiKey=b928528e019f440d94e64387f97cd2c1`
  //  , {
  //   params: {
    

  //     // data:'0'
  //   }
  //  } 
   
   )

      .then(function (response) {
        console.log('i am in')
        console.log(response);
        // setNewsArr(response.data.articles);
        // [mainArr]=response.data
        // console.log("mainArr")
        // console.log(newsArr)
      })
      .catch(function (error) {
        console.error(error);
      });

      console.log("resp")
      console.log(resp)
  };

  useEffect(() => {
    getData();
  }, []);
 
  // const {id}=useParams();

    // console.log("location.state");
    // console.log("id")
    // console.log(id)
  return (
    <>
    {/* <div>ArticleDetail</div> */}
  
    {
      
      // console.log()
      
    }
 <Grid container
      sx={{justifyContent:'space-around'}}
      >
          
             
        <Grid item  sx={{border:2}} >


          {/* <Link to={`/ArticleDetail/${e.source.id}`}> */}
            <Card
              sx={{
                width: { md: "800px", xs: "100%" },
                boxShadow: "none",
                borderRadius: 0,
                marginX: 2,
                marginY:1,
                justifyContent:'center'
              }}
              // onClick={()=>{gotoArticleDetail(e)}}
              >
                

              <CardContent
                sx={{
                  backgroundColor: "#545151",
                  height: "250px",
                  
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="#FFF">
                  {rcvData.title }
                </Typography>
                <Typography color="Black" variant="subtitle2" fontWeight="bold">
                  {rcvData.author }
                </Typography>

                <Typography color="gray" variant="body" fontWeight="bold">
                  {rcvData.description }
                </Typography>
                {/* <Typography color="gray" variant="caption" fontWeight="bold">
                  {rcvData.content }
                </Typography> */}
              </CardContent>
              <CardMedia
          image={rcvData.urlToImage}
           
          sx={{ width: 650, height: 180, margin:'auto',marginY:1}}
          />
            </Card>
          {/* </Link> */}
        </Grid>
      </Grid>



    </>
  )
}

export default ArticleDetail