import React,{useState,useEffect} from 'react'
import {Col,Row} from 'react-bootstrap'
import Restaurants from './Restaurants'



function Home() {

    const [hotel,setHotel]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            await fetch('./restaurants.json')
            .then((res)=>res.json())
            .then((data)=>setHotel(data.restaurants))
        }
        fetchData()
    },[])

    console.log("data is....",hotel)

    return (
        <>
         {hotel?(
             
                <Row>
                 {hotel.map(item=>(
                     <Col sm={12} md={8} lg={6} xl={3}>
                        <Restaurants item={item}/>
                     </Col>
                 ))}
                </Row>      
         ):null}  
        </>
    )
}

export default Home