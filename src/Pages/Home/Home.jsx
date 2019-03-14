import React, {Component} from 'react'
import ChartContainer from '../../Components/ChartContainer'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className='h-main'>
                <ChartContainer/>
            </div>
        )
    }
}
export default Home