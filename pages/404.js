
//created a 404 page then 1) back to home page by using Link in react 
//2)baack to home page by button click a)direct function or use of aarooow function
//3) automaticaly going to home scereen by 5 or 3 seconds without any action
//4) if the user enter wrong url and we dont want to create  eror page then simply use useeffcet and pushing the 
//home page in it many companies does the same
import { useEffect } from "react";
import "../styles/404.module.css";

//import Link from "next/link";
import {useRouter} from "next/router";
const Error404 = () => {
  const router=useRouter();
  //const Handleinput=()=>{
    //router.push("/")
  //<a onClick={Handleinput}>
  //back to home page</a>}
  const Handleinput=()=>{
    router.push("/")
};
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/")
    },6000);
  }//automaticaly working 
,[])
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
     
       
        
        </div>
      </div>
    </>
  );
};

export default Error404;
