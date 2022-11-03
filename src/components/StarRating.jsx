import React from 'react'

const StarRating = ({rating,handleRating}) => {
    console.log(rating)
    const stars = (n) => {
     let st = [];
     for (let i = 1; i <= 5; i++) {
       if(i<=n){
        st.push(
            <span onClick={()=>handleRating(i)}  style={{color:'gold',fontSize:'20px',cursor:'pointer'}} >★</span>
        )
       }else st.push(
        <span onClick={()=>handleRating(i)} style={{color:'black',fontSize:'20px',cursor:'pointer'}} >★</span>
       )
        
     }
     return st
    }
  return (
    <div>
        {stars(rating)}
    </div>
  )
}

StarRating.defaultProps = {
  handleRating:()=>{}
}


export default StarRating