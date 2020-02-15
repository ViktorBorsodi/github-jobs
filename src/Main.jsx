import React from 'react';
import SearchForm from './SearchForm'
import Jobs from './Jobs'
import Prev from './Prev'
import Next from './Next'
import './Main.css';

const apiMaxReturn = 50

const Main = ({jobs, handleSubmit, nextPage, prevPage, page}) => {
    return (
        <div className='Main' >
            <SearchForm handleSubmit={handleSubmit} />
			{jobs.length > 0 &&
				<div>
					<div className='arrows' >
						<Prev prevPage={prevPage} enabled={page > 1} />
						<Next nextPage={nextPage} enabled={jobs.length === apiMaxReturn} />
					</div>
					<Jobs jobs={jobs} />
					<div className='arrows' >
						<Prev prevPage={prevPage} enabled={page > 1} />
						<Next nextPage={nextPage} enabled={jobs.length === apiMaxReturn} />
					</div>
				</div>
			}
        </div>
    );
}

export default Main;