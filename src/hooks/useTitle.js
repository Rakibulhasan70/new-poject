import { useEffect } from "react"

const useTitle =title =>{
    useEffect(()=>{
        document.title = `${title} - Softonixt`
    },[title])
}


export default useTitle;