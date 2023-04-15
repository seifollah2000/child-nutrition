import React from 'react'
import { Button } from '@mui/material'
import { BiLogIn } from 'react-icons/bi'
import { TextField } from '@mui/material'
export default function Login() {
    return (
        <main className="flex-row justify-center">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Login</h4>
                    <div className="card-body">
                        <form className='card-body-form'>
                            <TextField id="outlined-basic" className="form-input my-2" label="Your email" variant="outlined" />


                            <TextField id="outlined-basic" className="form-input my-2" label="password" type="password" variant="outlined" />


                            <Button variant="contained" className='text-center' startIcon={<BiLogIn />}>
                                Submit
                            </Button>
                        </form>


                    </div>
                </div>
            </div>
        </main>
    )
}
