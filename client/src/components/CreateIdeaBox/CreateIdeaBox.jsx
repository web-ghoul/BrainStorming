"use client"
import React, { useState } from 'react'
import {Box,TextField,IconButton} from '@mui/material'
import styles from "./CreateIdeaBox.module.css"
import {SentimentSatisfiedRounded,AttachFileRounded,CameraAltRounded,KeyboardVoiceRounded} from '@mui/icons-material';
import { MyButton } from '@/MUIComponents/MyButton/MyButton';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
const CreateIdeaBox = () => {
  const [dropEmojiShow, setDropEmojiShow] = useState(false)
  const [brainWaveEmojiShow, setBrainWaveEmojiShow] = useState(false)
  const [drop, setDrop] = useState("")
  const [brainWave, setBrainWave] = useState("")
  return (
    <Box width={"100%"} className={`grid jcs aic g20 ${styles.create_idea_box}`}>
      <Box className={`grid jcs aic g20`}>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aic g5`}>
            <TextField
              id="drop"
              label="Drop"
              fullWidth
              multiline
              maxRows={4}
              variant="standard"
              value={drop}
              onChange={(e)=>setDrop(e.target.value)}
            />
            <IconButton onClick={()=>setDropEmojiShow(!dropEmojiShow)}>
              <SentimentSatisfiedRounded/>
            </IconButton>
          </Box>
          {
            dropEmojiShow &&
            (
              <Picker onClickOutside={()=>setDropEmojiShow(false)} theme={"light"}  data={data} onEmojiSelect={(e)=>{setDrop(drop+e.native)}} />
            )
          }
        </Box>
        <Box>
          <Box className={`flex jcs aifs g5`}>
            <TextField
              id="brainwave"
              label="Brainwave"
              multiline
              fullWidth
              maxRows={10}
              variant="standard"
              value={brainWave}
              onChange={(e)=>setBrainWave(e.target.value)}
            />
            <IconButton onClick={()=>setBrainWaveEmojiShow(!brainWaveEmojiShow)}>
              <SentimentSatisfiedRounded/>
            </IconButton>
          </Box>
          {
            brainWaveEmojiShow &&
            (
              <Picker onClickOutside={()=>setBrainWaveEmojiShow(false)} theme={"light"} data={data} onEmojiSelect={(e)=>{setBrainWave(brainWave+e.native)}} />
            )
          }
        </Box>
      </Box>

      <Box className={`flex jcfs aic g10 ${styles.icon_buttons}`}>
        <IconButton>
          <CameraAltRounded/>
        </IconButton>
        <IconButton>
          <AttachFileRounded/>
        </IconButton>
        <IconButton>
          <KeyboardVoiceRounded/>
        </IconButton>
      </Box>
          
      <Box>
        <MyButton sx={{width:"100%"}}>Spark</MyButton>
      </Box>
    </Box>
  )
}

export default CreateIdeaBox