import React from 'react'
import { useEffect, useState } from 'react';
import JobListing from './JobListing'

const JobListings = ({isHome = false}) => {
  // const jobListings = isHome ? jobs.slice(0,3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
        try{
          const res = await fetch('http://localhost:8000/jobs');
          const data = await res.json();
          setJobs(data);
        }
        catch(error){
          console.log('error fetching jobs data', error)
        }
        finally{
          setloading(false);
        }
    }

    fetchJobs();
  }, [])

  return (
    <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-custom-brown mb-6 text-center">
        {isHome ? 'Recent jobs' : 'Browse Jobs'}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading 
        ? (<h2>Loading . . .</h2>
        )
        : (<>
        {jobs.map((job)=>(
            <JobListing key={job.id} job={job}/>
        ))}
        </>
        )
}
    
    </div>
      </div>
    </section>
  )
}

export default JobListings