import './playcontrol.css'

function PlayControl(){
    return (
        <>
            <section className="player">
          <div className="audio-player">
            <div className="song-profile">
              <div className="song-logo">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true"
                  alt=""
                />
              </div>
              <div className="song-title">
                <p className="title">Dreaming On</p>
                <p className="writter">NEFFEX</p>
              </div>
              <div className="like-button">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true"
                  alt=""
                />
              </div>
            </div>
            <div className="song-play">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true"
                alt=""
              />
            </div>
            <div className="other-option">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true"
                alt=""
              />
            </div>
          </div>
          <div className="device-player">
            <p>Listening on ASUS-ROG-G531GT</p>
          </div>
        </section>
        </>
    )
}

export default PlayControl