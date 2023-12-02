import React from "react";
import { Box ,Card,  CardContent, CardMedia, Typography} from "@mui/material";
import style from './style.module.css'
export default function Blogs() {
  return (
    <Box>
      <Box className={style.blogHead}>
        <Typography variant="h2" className={style.blogHeading}>Website</Typography>
        <Typography variant="body1" className={style.blogPara}>Tips and tutorials on how to build better website</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" height="70vh">
        <Card style={{ maxWidth: 650, width: "100%"}}>
          <CardMedia className={style.blogImage} component="img" height="230" image="Blogs.jpg" title="green iguana"/>
          <CardContent sx={{backgroundColor:"#fcf0ea", height:"200px"}}>
            <Typography gutterBottom variant="h5" component="h5" className={style.blogCardHeading}>
              The 16 Best CMS System Today & How to Choose
            </Typography>
            <Typography gutterBottom component="p" className={style.blogCardPara}>
              Compare the ease of use, customization and security of these
              CMS platform so that you can find one that suits your site's needs and goals.
            </Typography>
            <Box display="flex" gap="20px" marginTop="20px" className={style.blogCardFpara}>
              <Typography gutterBottom variant="body1" className={style.blogCardFpara}>Anna Fitzgerald</Typography>
              <Typography variant="body1" className={style.blogCardFpara}>8/11/22</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}