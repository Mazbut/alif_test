import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import {Container, Radio, Button, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
    
  }
})

export default function Create() {
  const classes = useStyles()
//   const history = useHistory()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [page, setPage] = useState('')
  const [sold, setSold] = useState('')
  const [category, setCategory] = useState('money')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');
 
  const handleSubmit = (e) => {
    // e.preventDefault()
    setLoading(true)   
    if (title && author&& page && sold && category) {
      fetch('http://localhost:8001/books', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, author,page, sold, category }),
      })
      .catch((err)=>{setError(err)}) 
      .finally(()=>{setLoading(false)})        

    } 
  }

  return (
    <Container size="sm" > 
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Add new books
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Title of book" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          
        />
        <TextField className={classes.field}
          onChange={(e) => setAuthor(e.target.value)}
          label="Author of book"
          variant="outlined"
          color="secondary"
          multiline
          fullWidth
          required
        />
          <TextField className={classes.field}
          onChange={(e) => setPage(e.target.value)}
          label="Pages"
          variant="outlined"
          color="secondary"
          multiline
          fullWidth
          required
        />
          <TextField className={classes.field}
          onChange={(e) => setSold(e.target.value)}
          label="Number of sold books"
          variant="outlined"
          color="secondary"
          multiline
          fullWidth
          required
        />
          <TextField className={classes.field}
          onChange={(e) => setCategory(e.target.value)}
          label="Books category"
          variant="outlined"
          color="secondary"
          multiline
          fullWidth
          required
        />
        {title.length===0 || author.length===0 || page.length===0 || sold.length===0 || category.length ===0   ? <p>Fill the required fields </p>: ''}
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"    
          >
          Submit
        </Button>
      </form>

      
    </Container>
  )
}
