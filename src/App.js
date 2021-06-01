import React from 'react'
import Chart from './Components/Chart/Chart'
import './App.css';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './api/data'
import image from './resource/image.png'

class App extends React.Component {

  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    //console.log(data)
   
    this.setState({data:fetchedData})
  }
  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country)
    //console.log(country)
  //  console.log(fetchedData)
      this.setState({data:fetchedData,country:country})
  }
  render(){
    const {data , country} = this.state;
  return (
    <div className="App">
   <img src={image}/>
   <Cards  data={data}/>
   <CountryPicker handleCountryChange={this.handleCountryChange}/>
   <Chart data={data} country={country}/>
   
    </div>
  );
}
}
export default App;
