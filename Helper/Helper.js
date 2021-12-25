import { useEffect } from "react";


export const setPageHeading = (setCurrentPage, setHeading, heading) =>
{
    useEffect(()=>
    {
      setHeading(heading);
      setCurrentPage(heading==""?"Home":heading);
    }, []);
  
  
    //sets the heading to nothing when component unmounts
    useEffect(() => {    
      return () => {
          setHeading("");
      }
  }, []);

}