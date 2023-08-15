import CreateIdeaBox from '@/components/CreateIdeaBox/CreateIdeaBox'
import MembersBox from '@/components/MembersBox/MembersBox'
import React from 'react'
import {Box, Container} from '@mui/material'
import styles from "./CreateIdeaSection.module.css"

const CreateIdeaSection = () => {
  return (
    <Container className={`grid flex-wrap jcs aifs g30 ${styles.create_idea_section}`}>
      <MembersBox/>
      <CreateIdeaBox/>
    </Container>
  )
}

export default CreateIdeaSection
