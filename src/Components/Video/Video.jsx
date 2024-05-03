import React, { useRef } from 'react'
import './Video.css'
import videop from '../../assets/clgvideo.mp4'

const Video = ({playstate,setPlay}) => {

    const player=useRef(null)

    const closePlayer =(e)=>{
        if(e.target===player.current){
            setPlay(false)
        }
    }

  return (
    <div className={`videoplayer ${playstate? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={videop} autoPlay muted controls></video>
    </div>
  )
}

export default Video