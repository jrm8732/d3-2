import React,{Component} from 'react'
import SelectionTabs from '../SelectionTabs/SelectionsTabs'
import BarChart from '../BarChart/BarChart'
import './ChartContainer.css'
class ChartContainer extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        fetch('https://data.cdc.gov/resource/a3uk-kgrx.json?state=VA&&year=2015')
        .then(res=>res.json())
        .then(json=>this.setState({data:json}))
    }
    render(){
        return(
            <section>
                <header>
                    <SelectionTabs/>
                </header>
                <div className='main-c'>
                    <div className='c-container'>
                        <BarChart data={this.state.data}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default ChartContainer