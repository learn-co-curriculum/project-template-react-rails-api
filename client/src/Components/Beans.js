
import Bean from './Bean'

let Beans = ({beans, currentUser}) => {
    console.log(currentUser)
    console.log(beans)
        return (
        <div className="drinks-div-container">
            <h1 className="drink-menu-header">CHOOSE YOUR BEANS</h1>
            <div className="drinks-menu-container">
            {beans.map(bean => (<Bean bean={bean}/>))}
            </div>
        </div>
        )
    }

export default Beans