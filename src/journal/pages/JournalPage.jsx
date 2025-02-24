
//import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothinSelectedView } from '../views';


export const JournalPage = () => {
  return (

    <JournalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolore, mollitia a quam corporis modi omnis repellat esse ad beatae, libero labore in, fuga explicabo error obcaecati molestiae ut ipsam.</Typography>*/}
      { <NothinSelectedView /> }
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalLayout>
  )
}
