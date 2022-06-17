import s from "./Footer.module.css";
import { BottomNavigation } from '@mui/material';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";


 export const Footer=()=>{
   return (
         <div className={s.main}>
                 <footer>
                     <p>2022 All rights reserved</p>
                 </footer>
         </div>
     )
 }
