import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import '../../Containers/Vacations/index.scss'

const CreateRequest = ({ setCreateForm, createForm, setForm, form, days }) => {
    const onClose = () => {
        setCreateForm(false)
        setForm({...form, startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''})
    }
    return (
        <div className='createRequest'>
            <TextField
                id="outlined-basic"
                disabled
                value={days}
                label="Vacation days available"
                variant="outlined"
                className='requestInput'
            />
            {
                !createForm
                    ? <Button onClick={() => setCreateForm(true)} 
                    variant="contained" 
                    color="primary"
                    disabled={days<=0}
                    className='requestBtn'>
                        {days <= 0 ? `You used all days of vacation` :'Create new vacation request'}
                    </Button>
                    : <Button onClick={onClose} 
                    variant="contained" 
                    className='requestBtn'>
                        Close
                    </Button>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    days: state.userData.profileData.vacationAvailableDays
})

export default connect(mapStateToProps, {})(CreateRequest)
