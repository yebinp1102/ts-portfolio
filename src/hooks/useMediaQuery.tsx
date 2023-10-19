import { useState, useEffect } from "react"


const useMediaQuery = (query : string ) => {

  // matches : A boolean value that returns true if the document currently matches the media query list
  const [matches, setMatches] = useState<boolean>(false);


  // everytime when matches and query values change, check if the document currently matches the media query list
  useEffect(() => {
    const media = window.matchMedia(query);
    if(media.matches !== matches){
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    
    return () => window.removeEventListener("resize", listener);
  },[matches, query])

  return matches // return boolean value
}

export default useMediaQuery