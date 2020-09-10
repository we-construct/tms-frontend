import React, { useState, useEffect }  from 'react'
import PageWrapper from '../../Components/PageWrapper'
import VacationForm from '../../Components/VacationPage/VacationForm'
import CreateRequest from '../../Components/VacationPage/CreateRequest'
import'./index.scss'
import VacationTable from '../../Components/VacationPage/VacationTable'
import Collapse from '@material-ui/core/Collapse';
import { requestVacations } from '../../Redux/vacation/actions'
import { connect } from 'react-redux'

const Vacations = ({userId, requestVacations, page}) => {
  const [createForm, setCreateForm] = useState(false)
  const [form, setForm] = useState({
    startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''
});
useEffect(()=>{
  requestVacations(userId, page)
}, [requestVacations, userId, page])

const handleChangePage = (event, value) => {
  requestVacations(userId, value)
}

  return (
    <PageWrapper>
        <div className='vacations'>
          <div className='container'>
            <CreateRequest setCreateForm={setCreateForm} createForm={createForm} setForm={setForm} form={form}/>
            <Collapse in={createForm}
            style={{ transformOrigin: '0 0 0' }}
            {...(createForm ? { timeout: 1000 } : {timeout: 1000})}>
              <VacationForm setCreateForm={setCreateForm} form={form} setForm={setForm}/>
            </Collapse>
            <VacationTable handleChangePage={handleChangePage}/>
          </div>
        </div>
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  userId: state.userData.user.id,
  page: state.vacationData.page,
})
const mapDispatchToProps = (dispatch) => ({
  requestVacations: (userId,page) => dispatch(requestVacations(userId, page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Vacations)
