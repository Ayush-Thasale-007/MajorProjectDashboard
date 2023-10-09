import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/dashboard.css';
import { Button, TableCell } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { AdapterLuxon } from '@mui/x-date-pickers-pro/AdapterLuxon';
import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

export default function Dashboard() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://dummyjson.com/users"
        );
        // console.log(response);
        setPost(response.data.users);

      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className='parentblock'>
      <div className='block1'>
        Department list
        &nbsp;
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" margin-top="2px" viewBox="0 0 12 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.91946 0.175421C3.1624 -0.0584297 3.55572 -0.0584297 3.79805 0.175421L8.93599 5.13333C9.42127 5.60162 9.42127 6.36133 8.93599 6.82962L3.76077 11.8244C3.52031 12.0559 3.13196 12.059 2.88839 11.8306C2.63985 11.5974 2.63675 11.2129 2.88156 10.976L7.61811 6.40569C7.86105 6.17125 7.86105 5.7917 7.61811 5.55726L2.91946 1.02327C2.67651 0.789422 2.67651 0.409265 2.91946 0.175421Z" fill="#9B9B9B" />
        </svg> */}
        &#707;
        &nbsp;

        View Detail

      </div>


      <div className="block2">
        <div className='block2_'>
          <div className="insideblock2">
            <div className="g1">
              <div className="g2">
                <img src="assets/icon1.png" />
              </div>

            </div>
            <div className='blocktext'>
              Forest Department<br /> <p>Department Name</p>
            </div>
          </div>

          <div className="insideblock2">
            <div className="g1" style={{ backgroundColor: "#F6F3FF", }}>
              <div className="g2">
                <img src="assets/icon2.png" />
              </div>
            </div>
            <div className='blocktext'>
              XYZ Area, Jammu, 1123 <br /> <p >Department Location</p>
            </div>

          </div>
        </div>
        <div className="blockimg"><img src="assets/icon3.png" /></div>

      </div>


      <div className="block3">
        <div className="space">
           <div className='additem'>
          <div style={{ paddingTop: '5px', paddingLeft: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 23 23" fill="none">
              <path d="M6.70825 11.5002H11.4999M11.4999 11.5002H16.2916M11.4999 11.5002V6.7085M11.4999 11.5002V16.2918" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5 20.125C16.2635 20.125 20.125 16.2635 20.125 11.5C20.125 6.73654 16.2635 2.875 11.5 2.875C6.73654 2.875 2.875 6.73654 2.875 11.5C2.875 16.2635 6.73654 20.125 11.5 20.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
         <div className='textbtn'>Add Domain</div>
        </div>
        </div>
        
  
        <div className='table'>

          <TableContainer component={Paper} className='basictable'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className='tablehead' >
                <TableRow style={{
                  background: "rgba(1, 91, 196, 0.10)"
                }} >
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }}>First Name</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">Last Name</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">Email</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">DOB</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {post.map((post, index) => (
                  (index < 100) ? <TableRow style={{ backgroundColor: index % 2 ? "#FFF" : "#FBFBFB" }} key={post.id}>
                    <TableCell component="th" scope="row">{post.firstName} </TableCell>
                    <TableCell align="left">{post.lastName}</TableCell>
                    <TableCell align="left">{post.email}</TableCell>
                    <TableCell align="left">{post.birthDate}</TableCell>
                  </TableRow> : null
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className='block4'>
        <div className='pagination'>
          <a href="#" style={{ backgroundColor: "#C5CDD4" }}> &#706;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">...</a>
          <a href="#">9</a>
          <a href="#">10</a>
          <a href="#"> &#707;</a>
        </div>
        <div className='pageindex'>
          100 &nbsp; &#8964;
        </div>
      </div>
    </div>

  );
}