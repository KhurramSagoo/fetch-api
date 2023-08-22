import React, { useState } from 'react'
import axios from 'axios'

const App= ()=>{
  const [image, setImage]=useState([]);

  const getImage= async ()=>{
    try {
      const res=axios.get("https://picsum.photos/v2/list");
      const data=(await res).data;
      setImage(data)
      // console.log(data);
    } catch (error) {
      console.log("something wrong in api")
    }
  }

  return(


<>
  
<button onClick={getImage} style={{
  padding:"15px 25px",
  backgroundColor:"green",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"200px",
  margin:"100px",
  cursor:"pointer"
}}>
  click me
</button>

<br />
{
image.slice(11,30).map((e,id)=>{
  return <>
  <img src={e.download_url
} alt=""  key={id} style={{
  width:"369px", display:"inline-block", padding:"20px"
}}/>
  </>
})
}
</>




  )

}

export default App