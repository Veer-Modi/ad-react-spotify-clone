import './mainbody.css'

function MainBody(){
  const favs = ["Discover Mix 1","Discover Weekly","Malayalam","Dance/Electronix Mix","EDM/Popular"]
  const recents = [
    {id:1, title: "Liked Songs", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"},
    {id:2, title: "Neffex Playlist", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"},
    {id:3, title: "K / DA", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"},
    {id:4, title: "Liked Songs", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"},
    {id:6, title: "Dance / Electronic Mix", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"},
    {id:8, title: "Motivation", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"},
  ]

  const recs = [
    {id:1, title:"Weekly Motivation...", writer:"Ben Ina Scott", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true"},
    {id:2, title:"MEDITATION SELF", writer:"Iba Hussain Aleen", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true"},
    {id:3, title:"World beyond act...", writer:"Samual Scott", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true"},
    {id:4, title:"The Alexa Show", writer:"Adrina Tom", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true"},
    {id:5, title:"The Stories of Ma...", writer:"Lexus", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true"},
    {id:6, title:"Movitivation Daily b...", writer:"Georgina Martha", img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true"},
  ]

  const evenId = recents.filter((recent) => recent.id % 2===0);

    return (
        <>
                <section className="main-body">
          <section className="sidebar">
            <div className="logo">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"
                alt=""
              />
            </div>
            <div className="home-option">
              <div className="home">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
                  alt=""
                />
                <p>Home</p>
              </div>
              <div className="home">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
                  alt=""
                />
                <p>Search</p>
              </div>
              <div className="home">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
                  alt=""
                />
                <p>Your Library</p>
              </div>
            </div>
            <div className="my-option">
              <div className="my">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
                  alt=""
                />
                <p>Create Playlist</p>
              </div>
              <div className="my">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true"
                  alt=""
                />
                <p>Liked Songs</p>
              </div>
              <div className="my">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
                  alt=""
                />
                <p>Your Episodes</p>
              </div>
            </div>
            <div className="fav">
              <p>FAV</p>
              {favs.map((fav,index)=>(
                <p key={index}>{fav}</p>
              ))}
            </div>
            <div className="install">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
                alt=""
              />
              <p>Install App</p>
            </div>
          </section>
          <section className="spotify-body">
            <section className="nav">
              <div className="arrow">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
                  alt=""
                />
              </div>
              <div className="profile">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
                  alt=""
                />
              </div>
            </section>
            <section className="recent">
              <h1>Good Morning</h1>
              <div className="recent-container">
                {evenId.map((recent)=> (
                    <div key={recent.id} className="recent-item">
                      <img src={recent.img} alt="" />
                      <p>{recent.title}</p>
                    </div>
                ))}                
              </div>
            </section>
            <section className="rec">
              <h1>Show you might like</h1>
              <div className="rec-container">
                {recs.map((detail)=>(
                  <div key={detail.id} className="rec-item">
                    <img src={detail.img} alt="" />
                    <p>{detail.title}</p>
                    <p>{detail.writer}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </section>
        </>
    )
}

export default MainBody