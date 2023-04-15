import React from 'react'
import { FiUser } from 'react-icons/fi'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
export default function Signup() {
    return (
        <main className='flex-row justify-center '>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign Up</h4>
                    <div className='card-body'>
                        <form className='card-body-form'>
                            <TextField id="outlined-basic" className="form-input my-2" label="user Name" variant="outlined" />

                            <TextField id="outlined-basic" className="form-input my-2" label="Your email" variant="outlined" />


                            <TextField id="outlined-basic" className="form-input my-2" label="password" type="password" variant="outlined" />


                            <Button variant="contained" className='text-center' startIcon={<FiUser />}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>)
}
