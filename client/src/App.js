// import {useEffect, useState} from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Logout from './components/Logout.js'
import AddYogaVideos from './components/AddYogaVideos'
import YogaVideos from './components/YogaVideos'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
    return (
        <Header/>
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
