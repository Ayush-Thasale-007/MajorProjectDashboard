import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TableCell } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import '../styles/dashboardManagement.css'
import { Pagination } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { deleteDepartment } from '../redux/Actions/addDepartment';
import { useDispatch } from 'react-redux';

export default function Dashboard() {

  const [query, setQuery] = useState('');
  const [pageno, setPageno] = useState(1);
  const navigate = useNavigate();


  let entiredata = useSelector(state => state.dept.dept);
  const dispatch = useDispatch();
  console.log(entiredata);

  const handleDeleteRow = (dataID) => {
    const newData = entiredata.filter((item) => item.id !== dataID)
    dispatch(deleteDepartment( newData));
  }

  if(query){
    entiredata = entiredata.filter((item, index) => {
       let searchquery = item.firstName+""+item.state+""+item.city+""+item.postal;
        return searchquery.toLowerCase().includes(query.toLowerCase())
    })
  }

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
              6452<br /> <p>Total Department</p>
            </div>
          </div>

          <div className="insideblock2">
            <div className="g1" style={{ backgroundColor: "#F6F3FF", }}>
              <div className="g2">
                <img src="assets/icon2.png" />
              </div>
            </div>
            <div className='blocktext'>
              6452 <br /> <p >Total Domain</p>
            </div>

          </div>
        </div>

      </div>


      <div className="block3">
        <div className="block31">

          <div className='searchdate' style={{ marginRight: "2rem", width: "13rem" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
              <DatePicker className='datepicker' label="Selected date from"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '2.375rem',
                    }
                  }
                }}

              />
            </LocalizationProvider>
          </div>
          <div className='searchdate' style={{ marginRight: "2rem", width: "13rem" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
              <DatePicker className='datepicker' label="Selected date to "
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '2.375rem',
                    }
                  }
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="searchbar" style={{ width: "13rem" }}>
            <TextField id="outlined-basic" type="text" variant="outlined" placeholder="Search.." className='search' onChange={(e) => setQuery(e.target.value)} sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderRadius: '2.375rem',
                }
              }
            }}
            ></TextField>
          </div>

          <div className='additem'>
            <Button onClick={() => navigate("/adddata")}>
              <div style={{ paddingLeft: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 23 23" fill="none">
                  <path d="M6.70825 11.5002H11.4999M11.4999 11.5002H16.2916M11.4999 11.5002V6.7085M11.4999 11.5002V16.2918" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.5 20.125C16.2635 20.125 20.125 16.2635 20.125 11.5C20.125 6.73654 16.2635 2.875 11.5 2.875C6.73654 2.875 2.875 6.73654 2.875 11.5C2.875 16.2635 6.73654 20.125 11.5 20.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span className='textbtn'>Add New Department</span>
            </Button>
          </div>
        </div>

        <div className='table'>

          <TableContainer component={Paper} className='basictable'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className='tablehead' >
                <TableRow style={{
                  background: "rgba(1, 91, 196, 0.10)"
                }} >
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }}>Department Name</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">State</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">City</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">Postal</TableCell>
                  <TableCell style={{ fontSize: '1rem', fontWeight: "500", fontFamily: "Poppins" }} align="left">Action</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {entiredata?.map((data, index) => (
                  <TableRow style={{ backgroundColor: index % 2 ? "#FFF" : "#FBFBFB" }} key={data.id}>
                    <TableCell component="th" scope="row" >{data?.firstName} </TableCell>
                    <TableCell align="left">{data?.state}</TableCell>
                    <TableCell align="left">{data?.city}</TableCell>
                    <TableCell align="left">{data?.postal}</TableCell>
                    <TableCell align="left">
                      <button className='edit' onClick={()=> navigate("/editentry", {state: {data}})} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_722_2981)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7572 4.72793C15.2234 4.26184 15.8555 4 16.5146 4C16.8411 4 17.1642 4.06428 17.4657 4.18918C17.7673 4.31408 18.0412 4.49715 18.2721 4.72793C18.5028 4.95871 18.6859 5.2327 18.8108 5.53423C18.9357 5.83576 19 6.15894 19 6.48531C19 6.81169 18.9357 7.13487 18.8108 7.4364C18.6859 7.73794 18.5028 8.01192 18.2721 8.2427L17.3526 9.1622C17.0271 9.48764 16.4995 9.48764 16.1741 9.1622L13.8377 6.82594C13.5123 6.50051 13.5123 5.97287 13.8377 5.64744L14.7572 4.72793ZM12.6592 8.00445C12.3338 7.67901 11.8062 7.67901 11.4807 8.00445L5.67571 13.8095C5.14171 14.3435 4.76289 15.0125 4.57973 15.7452L4.0249 17.9645C3.95391 18.2484 4.03711 18.5489 4.2441 18.7559C4.45108 18.9629 4.75149 19.046 5.03546 18.975L7.25477 18.4202C7.9874 18.2371 8.65648 17.8583 9.19047 17.3243L14.9955 11.5192C15.321 11.1938 15.321 10.6661 14.9955 10.3407L12.6592 8.00445Z" fill="black" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 18.25C11.5 17.8358 11.8731 17.5 12.3333 17.5H18.1667C18.6269 17.5 19 17.8358 19 18.25C19 18.6642 18.6269 19 18.1667 19H12.3333C11.8731 19 11.5 18.6642 11.5 18.25Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_722_2981">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      </button>
                      
                      <button className='delete'  onClick={() => handleDeleteRow(data.id)} >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft:"1rem"}}>
                        <path d="M6.85714 18.2222C6.85714 19.2 7.62857 20 8.57143 20H15.4286C16.3714 20 17.1429 19.2 17.1429 18.2222V7.55556H6.85714V18.2222ZM18 4.88889H15L14.1429 4H9.85714L9 4.88889H6V6.66667H18V4.88889Z" fill="black" />
                      </svg>

                      </button>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className='block4'>
        {/* <div className='pagination'>
          <a href="/" style={{ backgroundColor: "#C5CDD4" }}> &#706;</a>
          <a href="/">1</a>
          <a href="/">2</a>
          <a href="/">...</a>
          <a href="/">9</a>
          <a href="/">10</a>
          <a href="/"> &#707;</a>
        </div>
        <div className='pageindex'>
          100 &nbsp; &#8964;
        </div> */}
        <Pagination count={10} variant="outlined" shape="rounded" boundaryCount={2} onChange={(e) => {
          setPageno(e.target.value);
        }} />

        <select className='pagelimit' id='ppagelimit'>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

      </div>
    </div>

  );
}