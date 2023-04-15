import React from 'react';
import { TextField } from '@mui/material';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { Button } from '@mui/material';
const RecipeForm = () => {

  return (
    <main className='flex-row justify-center '>
      <div className='col-12 col-md-9'>
        <div className='card'>
          <h4 className='card-header'>Add to the Cookbook</h4>
          <div className='card-body'>
            <form
              className="flex-row justify-center justify-space-between-md align-stretch"
            >
              <TextField
                id="filled-multiline-static"
                label="Multilidsne"
                multiline
                className='w-100'
                rows={10}
                defaultValue=""
                variant="filled"
              />

              <Button variant="contained" className='w-100 text-center' startIcon={<BiMessageSquareAdd />}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeForm;
