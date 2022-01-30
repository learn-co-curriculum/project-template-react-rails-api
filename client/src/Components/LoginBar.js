function LoginBar({ textMess, valueChange, value}){
        return <form style={{marginBottom:"16px"}}>
            <div style={{margin:"auto", width:"90%"}}>
                <label style={{fontWeight:"bold", color:"white", paddingBottom:"16px"}} className="font-bold text-grey-darker block mb-2 font-mono"> {textMess} </label>
                <input 
                style={{width:"100%", borderWidth:"0px", borderRadius:"10px", margin:"auto", boxSizing:"border-box", height:"100%", padding: "15px", fontSize:"20px", marginTop:"10px"}}
                className="font-mono block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder = {`${textMess}...`} 
                value = {value} 
                onChange = {(e)=>valueChange(e.target)}
                />
            </div>
        </form>
}
export default LoginBar;