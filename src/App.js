import './App.css';
import React, { useEffect, useState } from "react"

function App() {
const [searchInput, setSearchInput] = useState("")
const [searchResults, setSearchResults] = useState({})
const [followers, setFollowers] = useState([])
const [pageCount, setPageCount] = useState(1)

let confObj = 
{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'escohen115',
      'Authorization': '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'
  }
}

useEffect(()=>{
  setFollowers([])
  if (Object.keys(searchResults).length > 2){
    getFollowers()
  }
},[searchResults])  
    

function handleSubmit(e){
    e.preventDefault()
    setPageCount(1)
    fetch(`https://api.github.com/users/${searchInput}`, confObj)
    .then(res=>res.json())
    .then(data=>{
      setSearchResults(data) 
    })
}

function getFollowers(){
  fetch(`${searchResults.followers_url}?page=${pageCount}&per_page=32`, confObj)
  .then(res=>res.json())
  .then(data=>{
    setFollowers(data)
  })
  setPageCount(pageCount+1)
}

function reset () {
  setSearchInput('')
  setPageCount(1)
  setFollowers([])
  setSearchResults({})
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={()=>reset()}>GitHub User Search</h1>  
        <form id="user-search"onSubmit={handleSubmit}>
          <input 
            id="search-input"
            type="text" 
            value={searchInput}
            onChange={e=>setSearchInput(e.target.value)}>
          </input>
          <input className="button"type="submit" value="Search"></input>
        </form>
      </header>

        <div className="user-info">
          <h3>{Object.keys(searchResults).includes('message') ? `User not found` : null} </h3>

          <div id="profile-card">
            { Object.keys(searchResults).includes('avatar_url') ? 
              <img id="profile-image" src={ searchResults.avatar_url} alt="avatar"/>  
            : null
            }
          </div>

            {Object.keys(searchResults).includes('login') ?
                <h3> 
                  <a href={searchResults.html_url}> {searchResults.login}  </a> 
                  {searchResults.followers} {followers > 0 ? "followers": "follower"}
                </h3>
            : null }

          <div className={followers.length > 0 ? "follower-list" : "none"}>
            {searchResults.followers ?
                (followers.map(follower=>{
                  return (
                      <div key={Math.random()}>
                        <a href={follower.html_url}> 
                          <img className="follower-image"src={follower.avatar_url} alt={follower.login}/> 
                          </a>
                      </div>   
                    )
                  })
                )
              : null
            }
          </div> 
            {
              Object.keys(searchResults).length > 0 && followers.length === 32 ?
                (<button className="button"onClick={()=>getFollowers()}> Load More</button>)
              : null
            }
        </div>
    </div>
  );
}
export default App;
