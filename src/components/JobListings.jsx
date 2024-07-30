import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

const JobListings = ({isHome = false}) => {
  const jobListings = isHome ? jobs.slice(0,3) : jobs;

  return (
    <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-custom-brown mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobListings.map((job)=>(
            <JobListing key={job.id} job={job}/>
        ))}

    
    </div>
      </div>
    </section>
  )
}

export default JobListings