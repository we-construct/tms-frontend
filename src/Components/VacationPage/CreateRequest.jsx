import React from 'react'
import { TextField, Button } from '@material-ui/core'
import style from '../../Containers/Vacations/index.module.css'

const CreateRequest = ({ setCreateForm, createForm, setForm, form }) => {
    const onClose = () => {
        setCreateForm(false)
        setForm({...form, startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''})
    }
    return (
        <div className={style.createRequest}>
            <TextField
                id="outlined-basic"
                disabled
                value='30'
                label="Vacation days available"
                variant="outlined"
                className={style.requestInput}
            />
            {
                !createForm
                    ? <Button onClick={() => setCreateForm(true)} variant="contained" color="primary" className={style.requestBtn}>
                        Create new vacation request
                    </Button>
                    : <Button onClick={onClose} variant="contained" className={style.requestBtn}>
                        Close
                    </Button>
            }
        </div>
    )
}

export default CreateRequest
