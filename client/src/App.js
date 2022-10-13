// import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route,Routes,Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Logout from './components/Logout.js'
import AddYogaVideos from './components/AddYogaVideos'
import YogaVideos from './components/YogaVideos'
import Signup from './components/Signup'
import Login from './components/Login'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const App = () => {
    return (
        <>

        <Header/>
        <div className='container' style={{background:"#dede"}}>
            
        <div >
      <Breadcrumb style={{textDecoration:"none", display: 'block',background:"#f5f7fc",margin:"50px 10 0 0",
                  width:"100%", padding: 8 }}>
        <Breadcrumb.Item href="#">
           Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Dashboard
        </Breadcrumb.Item>
       
      </Breadcrumb>
    </div>
            <div className='row'>
               <div className="col-md-3">
        <YogaVideos/>

              </div>
              <div className="col-md-3">
        <YogaVideos/>

              </div>    <div className="col-md-3">
        <YogaVideos/>

              </div> 
              <div className="col-md-3">
        <YogaVideos/>

              </div>
              <div className="col-md-3">
        <YogaVideos/>

              </div>
              </div>
        
        </div>
        <Router>
            <Routes>
                    <Route exact path="/" 
                        component={Reviews} />
  
                    <Route exact path="/courses" 
                        component={AddYogaVideos} />
                        </Routes>
                </Router>
        </>
        // <Router>
        //     <div className='container'>
        //         <Signup 
        //          // onAdd={() => setShowAddBudget(!showAddBudget)}
        //          // showAdd={showAddBudget} 
        //           />
        //         <Route
        //             path='/'
        //             exact
        //             render={(props) => ( 
        //             <Header/>

        //                 // <>
        //                 //     {/* {showAddBudget && <AddBudget onAdd={addBudget}/>}
        //                 //     {budgets.length > 0 ? (
        //                 //         <Budgets
        //                 //             budgets={budgets}
        //                 //             onToggle={toggleReminder}
        //                 //             onDelete={deleteBudget}

        //                 //         />
        //                 //     ) : (
        //                 //         'No petty cash records found '
        //                 //     )} */}
        //                 // </>
        //             )}
        //         />
        //         <Route path='/reviews' component={Reviews}/>
        //         <Route path='/logout' component={Logout}/>
        //         <Route path='/add-yoga-videos' component={AddYogaVideos}/>
        //         <Route path='/' component={YogaVideos}/>

        //         <Footer/>
        //     </div>
        // </Router>
    );
}
export default App
