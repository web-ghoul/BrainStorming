"use client"
import React from 'react'
import {Box, Container,useMediaQuery} from "@mui/material"
import Head from '../../components/Head/Head'
import TeamBox from '../../components/TeamBox/TeamBox'
import styles from "./TeamsSection.module.css"
import Image from 'next/image'
import roomsSectionImg1 from "../../../public/images/brain1.jpg"
import { MyBox } from '@/MUIComponents/MyBox/MyBox'

const TeamsSection = () => {
  const data =[
    {
      name:"webGhoul",
      description:"Room ssss sssssss ffffffff aaaaaaaaa for Our Team",
    },
    {
      name:"webGhoul1",
      description:"Roomsss ssssss sssss ssssssss sssss sssssss ssssss sssss sssssfor Our Team",
    },
    {
      name:"webGhoul2",
      description:"Room for Our Team",
    },
    {
      name:"webGhoul3",
      description:"Roomd ffffffff wwwwwwwwww rrrrrr for Our Team",
    },
    {
      name:"webGhoul4",
      description:"Room ssssssss sssssssss sssssss sssssssss ssssssssfor Our Team",
    },
    {
      name:"webGhoul5",
      description:"ssssssssssssssssssssssRoom for Our Team",
    },
  ]
  const mediumSize = useMediaQuery("(max-width:992px)")
  const smallSize = useMediaQuery("(max-width:768px)")
  return (
    <MyBox className={`${styles.rooms_section}`}>
      <Image alt="brain" src={roomsSectionImg1} width={200} height={200} className={`${styles.brain}`}/>
      <Container className={`grid jcs aic g30`}>
        <Head title={"Teams"} align="center" h={"h2"}/>
        <Box className={`grid jcs aifs g20 ${styles.rooms_box}`}>
          {
            smallSize ? (
              <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                {
                  data.map((room,i)=>(
                   <TeamBox key={i} data={room}/>
                  ))
                }
              </Box>
            )
            :
            (
              mediumSize ? (
                <>
                  <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                    {
                      data.map((room,i)=>(
                        (i % 2 === 0) && <TeamBox key={i} data={room}/>
                      ))
                    }
                  </Box>
                  <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                    {
                      data.map((room,i)=>(
                        (i % 2 !== 0) && <TeamBox key={i} data={room}/>
                      ))
                    }
                  </Box>
                </>
              ):(
                <>
                  <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                    {
                      data.map((room,i)=>(
                        (i === 0 || i % 3 === 0) && <TeamBox key={i} data={room}/>
                      ))
                    }
                  </Box>
                  <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                    {
                      data.map((room,i)=>(
                        (i-1 === 0 || (i-1) % 3 === 0) && <TeamBox key={i} data={room}/>
                      ))
                    }
                  </Box>
                  <Box className={`grid jcs aic g20 ${styles.rooms}`}>
                    {
                      data.map((room,i)=>(
                        (i-2 === 0 || (i-2) % 3 === 0) && <TeamBox key={i} data={room}/>
                      ))
                    }
                  </Box>
                </>
              )
            )
          }
        </Box>
      </Container>
    </MyBox>
  )
}

export default TeamsSection
