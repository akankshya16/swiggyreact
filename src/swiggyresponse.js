
const swiggyresponse = () => {
  const getData=async()=>{
    const response = await fetch('http://localhost:3000/swiggy')
    const data  = await response.json()
    console.log("object data",data)
    return data
  }
 const responseData= getData()
 return responseData
}

export default swiggyresponse


