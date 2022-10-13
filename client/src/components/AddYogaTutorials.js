import React from 'react';

function  AddYogaTutorials () {
    return (
        <form method='post'>
        <div className='form-group'>
            <label>Trainer Id </label>
            <input type="text" name='name' required className='form-control' />
            </div>
          <div className='form-group'>
            <label>Description</label>
            <input type="text" name='name' required className='form-control' />
            </div>
            <div className='form-group'>
            <label>Video Link</label>
            <input type="text" required name='address' className='form-control' />
            </div>
          
           <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='btn btn-md  btn-block '>Save</button>
            </div> 
        </form> 
    );
}
export default AddYogaTutorials;
