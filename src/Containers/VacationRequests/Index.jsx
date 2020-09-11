import React from 'react'
import PageWrapper from '../../Components/PageWrapper'
import { connect } from 'react-redux'
import './index.scss'
import { useEffect } from 'react'
import { getVacationRequests, setSuccess, setError } from '../../Redux/APanel/actions'
import { useSnackbar } from "notistack";
import Requests from '../../Components/VacationRequestsPage/Requests'

const VacationRequests = ({ requests, getVacationRequests, success, error, setSuccess, setError }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getVacationRequests()
  }, [getVacationRequests])

  useEffect(() => {
    if (success) {
      enqueueSnackbar(success, { variant: 'success' })
      getVacationRequests()
      setSuccess(null)
    } else if (error) {
      enqueueSnackbar(error, { variant: 'error' })
      setError(null)
    }
  }, [success, error, enqueueSnackbar, getVacationRequests, setError, setSuccess])

  return (
    <PageWrapper>
      {requests.length
        ? <Requests requests={requests}/>
        : <div className='noRequests'>
            <h4>No requests yet...</h4>
          </div>
      }
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  requests: state.adminData.vacationRequests,
  success: state.adminData.success,
  error: state.adminData.error,
})
const mapDispatchToProps = (dispatch) => ({
  getVacationRequests: () => dispatch(getVacationRequests()),
  setSuccess: (payload) => dispatch(setSuccess(payload)),
  setError: (payload) => dispatch(setError(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VacationRequests)
