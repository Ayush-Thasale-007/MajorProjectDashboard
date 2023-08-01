import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import { deleteDepartment } from '../redux/Actions/addDepartment';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function EditEntry() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    let entireData = useSelector(state => state.dept.dept);
    const [post, setPost] = useState({});

    function handleInput(event) {
        setPost({ ...post, [event.target.name]: event.target.value });
    } 

    let dataIndex= -1;
    function handleSubmit(event) {
        event.preventDefault();
        // console.log(post,"post");
        // console.log(location.state.data, "useLocation");
        entireData.forEach((item,  index) => {
            // console.log(item.id +"  "+ location.state.data.id +" "+ index +" editfunction");
           if(location.state.data.id === item.id)
           dataIndex=index;
        })
        //  console.log(dataIndex);
        
        dispatch(deleteDepartment(entireData));
        navigate("/management");
    }

    let newData = entireData.splice(dataIndex, 1, post);
    // console.log(entireData);

    return (
        <>
            <div className="blocktwo">
                <form onSubmit={handleSubmit}>
                    <div className="whitebg">
                        <div className="labelitem">Department Name</div>
                        <TextField
                            type="text"
                            name="firstName"
                            variant='outlined'
                            color='secondary'
                            // label="Enter Department Name"
                            defaultValue={location.state.data.firstName}
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
                                        // label="State"
                                        name="state"
                                        defaultValue={location.state.data.state}
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
                                        // label="City"
                                        name="city"
                                        defaultValue={location.state.data.city}
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
                                        // label="Postal Code"
                                        defaultValue={location.state.data.postal}
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
                                        defaultValue={location.state.data.email}
                                        // label="Enter Email"
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
                                        defaultValue={location.state.data.pass}
                                        // label="********"
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
                            // label="Address"
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
                    >Update Department</Button>
                </form>
            </div>
        </>
    )
}

export default EditEntry

