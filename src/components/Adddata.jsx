import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addDepartment } from '../redux/Actions/addDepartment';
import { useSelector } from 'react-redux';
import '../styles/adddata.css'

function Adddata() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    
    function handleInput(event) {
        setPost({ ...post, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        //   const res = axios.put("https://dummyjson.com/users/1", {firstName: "XYZ"})
        //   .then(res=> console.log(res))
        //   console.log(post);
        //   axios.post("https://dummyjson.com/users/add", {
        //     firstName: post.firstName })
        //   .then(response=> console.log(response))
        //   .catch(err => console.log(err))     
        //   console.log(post);

        dispatch(addDepartment({ ...post, "id": Date.now()}));
        navigate("/management");
    }

    return (
        <>
            <div className="parentblock">
                <div className='block1'>
                    Department list
                    &nbsp;
                    &#707;
                    &nbsp;

                    View Detail

                </div>

                <div className="blocktwo">

                    <form onSubmit={handleSubmit}>
                        <div className="whitebg">
                            <div className="labelitem">Department Name</div>
                            <TextField
                                type="text"
                                name="firstName"
                                variant='outlined'
                                color='secondary'
                                label="Enter Department Name"
                                fullWidth
                                sx={{ mb: 4 }}
                                onChange={handleInput}
                            />

                            <Stack spacing={2} direction="row"  >
                                <div className='state'>
                                    <div className="labelitem">State</div>
                                    <div>
                                        <TextField
                                            variant='outlined'
                                            color='secondary'
                                            label="State"
                                            name="state"
                                            select
                                            fullWidth
                                            onChange={handleInput}
                                        >
                                            <MenuItem key={1} value="Uttar Pradesh">
                                                Uttar Pradesh
                                            </MenuItem>
                                            <MenuItem key={2} value="Himanchal Pradesh">
                                                Himanchal Pradesh
                                            </MenuItem>
                                        </TextField>
                                    </div>
                                </div>

                                <div className='state'>
                                    <div className="labelitem">
                                        City
                                    </div>
                                    <div>
                                        <TextField
                                            variant='outlined'
                                            color='secondary'
                                            label="City"
                                            name="city"
                                            select
                                            fullWidth
                                            onChange={handleInput}
                                        >
                                            <MenuItem key={1} value="Noida">
                                                Noida
                                            </MenuItem>
                                            <MenuItem key={2} value="Gorakhpur">
                                                Gorakhpur
                                            </MenuItem>
                                        </TextField>
                                    </div>
                                </div>

                                <div className='state'>
                                    <div className="labelitem">
                                        Postal Code
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            name="postal"
                                            color='secondary'
                                            label="Postal Code"
                                            onChange={handleInput}
                                            fullWidth
                                            sx={{ mb: 4 }}
                                        />
                                    </div>
                                </div>
                            </Stack>
                            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>

                                <div className='mail'>
                                    <div className="labelitem">
                                        Email
                                    </div>
                                    <div>
                                        <TextField
                                            type="email"
                                            variant='outlined'
                                            name="email"
                                            color='secondary'
                                            label="Enter Email"
                                            className='deptname'
                                            onChange={handleInput}
                                            fullWidth
                                        />
                                    </div>
                                </div>

                                <div className='mail'>
                                    <div className="labelitem">
                                        Password
                                    </div>
                                    <div>
                                        <TextField
                                            type="password"
                                            name="pass"
                                            variant='outlined'
                                            color='secondary'
                                            label="********"
                                            fullWidth
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>

                            </Stack>
                            <div className="labelitem">Address</div>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Address"
                                name="address"
                                onChange={handleInput}
                                fullWidth
                                sx={{ mb: 4 }}
                                inputProps={{
                                    style: {
                                        height: '5.625rem',
                                        padding: '0 14px',
                                    },
                                }}
                            />
                        </div>
                        <Button variant="outlined" color="primary" type="submit" sx={{
                            borderRadius: "0.625rem",
                            border: '1px solid #015BC4',
                            boxShadow: '0px 6px 26px 0px rgba(35, 80, 139, 0.15)',
                            width: '8rem',
                            height: '3rem',
                            marginLeft: '2.5rem',
                        }}
                            onClick={() => navigate(-1)}
                        >Cancel</Button>
                        <Button variant="contained" color="primary" type="submit" sx={{
                            borderRadius: "0.625rem",
                            width: '12rem',
                            height: '3rem',
                            marginLeft: '2rem'
                        }}
                        >Add Department</Button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Adddata



// <form>
// <div className='namediv'>
//                             <p>Departmant Name</p>
//                             <TextField id="outlined-basic" type="text" variant="outlined" placeholder="Enter Department Name" className='deptname'
//                                 sx={{
//                                     '& .MuiOutlinedInput-root': {
//                                         '& fieldset': {
//                                             width: '66rem',
//                                         }
//                                     }

//                                 }}
//                             ></TextField>
//                         </div>

//                         <div className="select">
//                             <FormControl
//                                 variant="outlined"
//                                 margin={"1"}
//                                 style={{ width: "100%", marginBottom: 32 }}
//                             >
//                                 <p>State</p>
//                                 <InputLabel id="test-select-label">Select State</InputLabel>
//                                 <Select
//                                     style={{ width: "25%" }}
//                                     variant="outlined"
//                                     // value={value}
//                                     // onChange={(e) => setValue(e.target.value)}
//                                     labelId="test-select-label"
//                                 // label={"Label1233333"}
//                                 >
//                                     <MenuItem key={1} value="test">
//                                         Test 1
//                                     </MenuItem>
//                                     <MenuItem key={2} value="test2">
//                                         Test 2
//                                     </MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </div>

//                         <div className="mailpass">
//                             <div className="email">
//                                 <p>Departmant Name</p>
//                                 <TextField id="outlined-basic" type="text" variant="outlined" placeholder="Enter email" className='deptname'
//                                     sx={{
//                                         '& .MuiOutlinedInput-root': {
//                                             '& fieldset': {
//                                                 width: '14.6rem',
//                                             }
//                                         }

//                                     }}
//                                 ></TextField>
//                             </div>
//                             <div className="pass">
//                                 <p>Departmant Name</p>
//                                 <TextField id="outlined-basic" type="text" variant="outlined" placeholder="********" className='deptname'
//                                     sx={{
//                                         '& .MuiOutlinedInput-root': {
//                                             '& fieldset': {
//                                                 width: '14.6rem',
//                                             }
//                                         }

//                                     }}
//                                 ></TextField>
//                             </div>
//                         </div>
//                    </form>