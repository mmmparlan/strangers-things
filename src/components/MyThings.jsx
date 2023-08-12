import {useEffect,useState} from 'react'
import { fetchMyData } from '../API/api'


export default function MyThings({token,allMyThingsObj,setAllMyThingsObj}){

    

    useEffect(() => {
        if (!token){return;}
        if (allMyThingsObj){return;}
        async function grabMyThings(){

            try {
                const result = await fetchMyData(token)
                setAllMyThingsObj(result)
                console.log(allMyThingsObj)
                console.log('setAllMyThingsObj set to result')
                

                
            } catch (error) {
                console.error(error)
            }

        }
        grabMyThings();
    },[setAllMyThingsObj, allMyThingsObj]);

    return(
        <>
        <div>
            <h3>These Are All Your Things. Feel Free To Post More Things Or Message People About Their Things!</h3>
            <h1></h1>
        </div>
        </>
    )
}