import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [top,setTop] = useState([])
  const [trending,setTrending] = useState([])

  useEffect(async()=>{
    const auth = await fetch("http://20.244.56.144/evaluation-service/auth",
      {method:"POST",
        headers: {
          "access-control-allow-origin" : "*",
          "Content-type": "application/json; charset=UTF-8"
        },
        body:{
          "email": "anshul142.b22@chitkara.edu.in",
          "name": "anshul jain",
          "rollNo": "2210990142",
          "accessCode": "PwzufG",
          "clientID": "47aacb62-e2dc-425e-90e8-ab58d5a57304",
          "clientSecret": "CukhKdWjbqfyFkcX"
      }
    })
    console.log(auth)
  })
  return (
    <>
      <h1 className='bg-red-200 text-center'>Top Users</h1>
      <h1 className='bg-red-200 text-center'>Trending Posts</h1>

    </>
  )
}

export default App
