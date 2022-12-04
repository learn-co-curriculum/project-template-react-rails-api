import React from 'react';
class Landing extends React.Component {


    state = {
        ourRestaurants: [],
        display: false,
        title: '',
        url: ''
    };

    displayList = () => {
        const { display } = this.state;
        this.setState({ display: !display });
    };

    getTitle = (restaurant) => {
        const { title, url } = restaurant;
        this.setState({ title, url, display: false });
    };

    goToRestaurant = () => {

        const { url } = this.state;

        this.props.history.push(`/restaurant/:${url}`)
    }


    render() {
        return (
            <div className='restaurant_select'>
                <div className='restaurant_select_top'>

                    <div onClick={this.displayList}
                        className='restaurant_select_top-header font-effect-outline'>
                        {this.state.title ? this.state.title : 'Choose a restaurant'}
                    </div>

                    <div className='arrow_picker'>
                        <div className='arrow_picker-up'></div>
                        <div className='arrow_picker-down'></div>
                    </div>
                </div>

                {this.state.display ? (<div className='restaurant_select_bottom'>
                    <ul>
                        {this.state.ourRestaurants.map(restaurant => {
                            return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
                        })}
                    </ul>
                </div>) : null}
                {this.state.title && !this.state.dispay ? (<button onClick={this.goToRestaurant}> Go to the restaurant</button>) : null}
            </div>


        );
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/restaurants')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ourRestaurants: data
                })
            })
    }
}
export default Landing;