import{React, useEffect, useState} from 'react';

function App() {


  const [serverData, setServerData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      res => res.json()
    ).then(
      data=>{
        setServerData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof serverData.users === 'undefined')?(
        <p> Loading...</p>
      ):(
        serverData.users.map((user, i)=>(
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App