import React from 'react'
import {useState,useEffect,useRef} from 'react'

export const HookTimer = () => {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
    intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }

    },[])
    return (
        <div>
            Hook Time - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}
