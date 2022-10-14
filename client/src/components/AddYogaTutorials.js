import React,{useState} from 'react';
import "../App.css"

function  AddYogaTutorials () {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/yoga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          url
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
         alert('Video added successfully');
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  

    return (
        
        <div id='' style={{margin:"auto",padding:"20px",width:"80%"}}>
            <h5 className='text-center text-primary rounded-0'>Add Yoga Tutorials</h5>
<hr></hr>
        <form onSubmit={handleSubmit}  method='post'>
            <div className='form-group'>
            <label>Title</label>
            <input  onChange={(e) => setName(e.target.value)} type="text" id='name' value={name} required className='form-control'/> 
            </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} type="text" id='description' value={description} required className='form-control'></textarea>
            </div>
            <div className='form-group'>
            <label>Video Link</label>
            <input  required onChange={(e) => setUrl(e.target.value)} value={url} type="text" id='url'  className='form-control' />
            </div>
          
           <div className='form-group mt-4 justify-content-right'>
           <button type='submit' className='save-button'>{isLoading ? "Loading..." : "SAVE"}</button>
            </div> 
            <div>
            {errors.map((err) => (
            <div className='alert alert-danger'key={err}>{err}</div>
            ))}
            </div>
        </form>
        </div>

    );
}
export default AddYogaTutorials;
