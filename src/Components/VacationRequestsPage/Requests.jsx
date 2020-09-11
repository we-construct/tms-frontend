import React from 'react'
import VacationCard from '../../Components/VacationRequestsPage/VacationCard'
import '../../Containers/VacationRequests/index.scss';

const Requests = ({requests}) => {
  return (
    <div className='vacationRequests'>
        {requests.map(request => <VacationCard key={request.id} request={request} />)}
    </div>
  )
}

export default Requests
