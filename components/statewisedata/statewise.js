import React,{useEffect,useState} from 'react';
import './statewise.css';
const Statewise=()=> {
	const [data,setdata]=useState([]);
	const getCovidData=async()=>{
		const res=await fetch( 'https://data.covid19india.org/data.json');
		const actualdata=await res.json();
		console.log(actualdata.statewise);
		setdata(actualdata.statewise);
	}
	useEffect(()=>
	{
		getCovidData();
	},[]);
	return <>
	<div className="container-fluid m-5">
	<div className="main_heading">
	<h2 className="mb-5 text-center"><span><b>INDIA</b></span> COVID-19 DASHBOARD</h2>
	</div>
	<div className="table-responsive">
	<table className="table table-hover">
	<thead className="table-dark head">
	<tr>
	<th>State</th>
	<th>Confirmed</th>
	<th>Recovered</th>
	<th>Deaths</th>
	<th>Active</th>
	<th>Updated</th>
	</tr>
	</thead>
	<tbody>
	{
		data.map((currElement,index)=>{
			return(
				<tr key={index}>
				<td>{currElement.state}</td>
				<td>{currElement.confirmed}</td>
				<td>{currElement.recovered}</td>
				<td>{currElement.deaths}</td>
				<td>{currElement.active}</td>
				<td>{currElement.lastupdatedtime}</td>
				</tr>
				)
		})
	}
	</tbody>
	</table>
	</div>
	</div>
	</>
}
export default Statewise;