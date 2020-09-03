import React, { useState }  from 'react'
import PageWrapper from '../../Components/PageWrapper'
import VacationForm from '../../Components/VacationPage/VacationForm'
import CreateRequest from '../../Components/VacationPage/CreateRequest'
import s from './index.module.css'
import VacationTable from '../../Components/VacationPage/VacationTable'
import Collapse from '@material-ui/core/Collapse';

const Vacations = () => {
  const [createForm, setCreateForm] = useState(false)
  const [form, setForm] = useState({
    startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''
});

  return (
    <PageWrapper>
        <div className={s.vacations}>
          <div className={s.container}>
            <CreateRequest setCreateForm={setCreateForm} createForm={createForm} setForm={setForm} form={form}/>
            <Collapse in={createForm}
            style={{ transformOrigin: '0 0 0' }}
            {...(createForm ? { timeout: 1000 } : {timeout: 1000})}>
              <VacationForm setCreateForm={setCreateForm} form={form} setForm={setForm}/>
            </Collapse>
            <VacationTable/>
          </div>
        </div>
    </PageWrapper>
  )
}

export default Vacations
