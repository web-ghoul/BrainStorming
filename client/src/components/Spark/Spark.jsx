import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import styles from "./Spark.module.css"
import Head from '../Head/Head'
import { AdminPanelSettings, PersonRounded } from '@mui/icons-material'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import FileBox from '../FileBox/FileBox'

const Spark = ({data}) => {
  const mediumSize = useMediaQuery("(max-width:992px)")
  const smallSize = useMediaQuery("(max-width:768px)")
  return (
    <Box className={`grid jcs aic g10 ${styles.spark}`}>
      <Box className={`flex jcfs aic g10 ${styles.user}`}>
        <Box className={`flex jcc aic ${styles.avatar}`}>
          <Image alt="avatar" src={data.avatar}/>
        </Box>
        <Box className={`grid jcfs aic`}>
          <Typography variant='h6' sx={{lineHeight:"20px"}}>{data.username}</Typography>
          <Box className={`flex jcfs aic g5`}>
            <Typography variant='subtitle1'>05 Apr 2023</Typography>
            <AdminPanelSettings/>
          </Box>
        </Box>
      </Box>
      <Box className={`grid jcs aic g10 ${styles.spark_data}`}>
        <Box className={`grid jcfs aic g10`}>
          <Head h={"h5"} align="left" title={data.drop} color={"#333"}/>
          <Typography variant="h6" className={`fw500`}>Spark's Drops @mui/icons-material includes the 2,100+ official Material Icons converted to SvgIcon components. It depends on @mui/material, which requires Emotion packages. Use one of the following commands to install it:</Typography>
        </Box>
        <Box className={`flex jcs aifs g5`}>
          {
            smallSize ? (
              <>
                <Box className={`grid jcs aifs g5 ${styles.spark_images}`}>
                  {
                    data.images && data.images.map((image,i)=>(
                      (i === 0 || i % 2 === 0) && 
                        <Image alt="spark" key={i} src={image} />
                    ))
                  }
                </Box>
                <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                  {
                    data.images && data.images.map((image,i)=>(
                      (i-1 === 0 || (i-1) % 2 === 0) && 
                        <Image alt="spark" key={i} src={image} />
                    ))
                  }
                </Box> 
              </>
            )
            :
            (
              mediumSize ? (
                <>
                  <Box className={`grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i === 0 || i % 3 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box>
                  <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i-1 === 0 || (i-1) % 3 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box> 
                  <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i-2 === 0 || (i-2) % 3 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box> 
                </>
              ):(
                <>
                  <Box className={`grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i === 0 || i % 4 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box>
                  <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i-1 === 0 || (i-1) % 4 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box> 
                  <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i-2 === 0 || (i-2) % 4 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box> 
                  <Box className={` grid jcs aifs g5 ${styles.spark_images}`}>
                    {
                      data.images && data.images.map((image,i)=>(
                        (i-3 === 0 || (i-3) % 4 === 0) && 
                          <Image alt="spark" key={i} src={image} />
                      ))
                    }
                  </Box> 
                </>
              )
            )
          }
        </Box>
        <Box className={`grid jcs aic g5 ${styles.spark_files}`}>
          {
            data.files && data.files.map((file,i)=>(
              <FileBox key={i} title={file}/>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Spark
