import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/dashboard.css'
import { TableCell } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Axiostrial() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
        setPost(response.data);
        
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);


  return (
     <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow style={{
                  background: "rgba(1, 91, 196, 0.10)",
                }} >
                  <TableCell>Domain Name</TableCell>
                  <TableCell align="left">Domain</TableCell>
                  <TableCell align="left">Contact deatils</TableCell>
                  <TableCell align="left">Action</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {post.map((post, index) => (
                  (index<10)?  <TableRow style={{ backgroundColor: index % 2 ? "#FFF" : "#FBFBFB" }} key={post.id}>
                  <TableCell component="th" scope="row">{post.id} </TableCell>
                  <TableCell align="left">{post.id}</TableCell>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="left">{post.body}</TableCell>
                </TableRow> : null
                   
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default Axiostrial