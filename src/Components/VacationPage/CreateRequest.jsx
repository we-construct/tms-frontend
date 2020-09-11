import React from 'react'
import { TextField, Button } from '@material-ui/core'
import '../../Containers/Vacations/index.scss'

const CreateRequest = ({ setCreateForm, createForm, setForm, form }) => {
    const onClose = () => {
        setCreateForm(false)
        setForm({...form, startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''})
    }
    return (
        <div className='createRequest'>
            <TextField
                id="outlined-basic"
                disabled
                value='30'
                label="Vacation days available"
                variant="outlined"
                className='requestInput'
            />
            {
                !createForm
                    ? <Button onClick={() => setCreateForm(true)} 
                    variant="contained" 
                    color="primary" 
                    className='requestBtn'>
                        Create new vacation request
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

export default CreateRequest
