import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBooks from '../addBooks/addBooks'
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'author', headerName: 'Author', width: 130 },
  {
    field: 'page',
    headerName: 'Page',
    type: 'number',
    width: 90,
  },
  {
    field: 'sold',
    headerName: 'Sold',
    type:'number',
    width: 90,
  },
  {
    field:'published',
    headerName:'Published',
    width:130,

  },
  {
    field:'type',
    headerName:'Type',
    width:90,

  },
];

export default function DataTable() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');

  useEffect(() => {       
    // setLoading(true)
     fetch("http://localhost:8001/books")
        .then((response) => response.json())        
        .then(data=>setBooks(data)) 
        .catch((err)=>{setError(err)}) 
        .finally(()=>{setLoading(false)})        

  }, []);

  return (
    <div style={{ height: 400, width: '90%' }}>    
      {error ? <p>Something went wrong!</p>: loading? <CircularProgress />:
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name of the BOOK</TableCell>
            <TableCell align="right">Athor</TableCell>
            <TableCell align="right">Page</TableCell>
            <TableCell align="right">Sold</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.page}</TableCell>
              <TableCell align="right">{book.sold}</TableCell>
              <TableCell align="right">{book.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }
      
   
    </div>
  );
}
