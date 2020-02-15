import React, { useState } from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import Main from './Main'
import Description from './Description'

const App = ({history}) => {
	const [jobs, setJobs] = useState([])
	const [page, setPage] = useState(1)
	const [url, setUrl] = useState('')

    const handleSubmit = (e, desc, location) => {
		e.preventDefault()
		fetch(`https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?description=${desc}&location=${location}`)
			.then(res => res.json())
			.then(data => {
				setJobs(data)
				setUrl(`https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?description=${desc}&location=${location}`)
				setPage(1)
			})
			.catch(err => console.log(err))
    }

	const nextPage = () => {
		fetch(`${url}&page=${page+1}`)
		.then(res => res.json())
		.then(data => {
			setJobs(data)
			setPage(prevPage => prevPage + 1)
		})
		.catch(err => console.log(err))
	}

	const prevPage = () => {
		fetch(`${url}&page=${page-1}`)
		.then(res => res.json())
		.then(data => {
			setJobs(data)
			setPage(prevPage => prevPage - 1)
		})
		.catch(err => console.log(err))
	}

	return (
		<div className="App">
			<h1 onClick={() => {history.push('/')}} >GitHub Jobs</h1>
			<Switch>
				<Route exact path='/' render={props => (
					<Main
						{...props}
						jobs={jobs}
						handleSubmit={handleSubmit}
						nextPage={nextPage}
						prevPage={prevPage}
						page={page}
					/>
				)} />
				<Route exact path='/jobs/:id' render={props => (
					<Description {...props} jobs={jobs} />
				)} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
