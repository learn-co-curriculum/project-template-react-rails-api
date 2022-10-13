import React from 'react';
import "../App.css"

function  AddYogaTutorials () {
    return (
        
        <div id='' style={{margin:"auto",padding:"20px",width:"80%"}}>
            <h5 className='text-center text-primary rounded-0'>Add Yoga Tutorials</h5>
<hr></hr>
        <form method='post'>
        <div className='form-group'>
            <label>Trainer Id </label>
            <input type="text" name='name' required className='form-control' />
            </div>
            <div className='form-group'>
            <label>Title</label>
            <input type="text" name='title' required className='form-control'/> 
            </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea type="text" name='description' required className='form-control'></textarea>
            </div>
            <div className='form-group'>
            <label>Video Link</label>
            <input type="text" required name='link' className='form-control' />
            </div>
          
           <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='save-button'>Save</button>
            </div> 
        </form>

        </div>

    );
}
export default AddYogaTutorials;
