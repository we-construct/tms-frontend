import React, { useEffect } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {TextField, CircularProgress} from '@material-ui/core';
import '../../Containers/Vacations/index.scss';
import { Button } from '@material-ui/core';
import { addVacation, setSuccess, setError } from '../../Redux/vacation/actions';
import { connect } from 'react-redux';
import { useSnackbar } from "notistack";

const VacationForm = ({ user, userId, form, setForm, addVacation, loading, setCreateForm, setSuccess, success, setError, error }) => {
    const { enqueueSnackbar } = useSnackbar();
    const colculateDates = form.returnDate.getTime() - form.startDate.getTime()
    const daysCount = Math.round(colculateDates / (1000 * 3600 * 24))

    useEffect(()=> {
        if(success){
            enqueueSnackbar(success, {variant: 'success'})
            setCreateForm(false)
            setForm({...form, startDate: new Date(Date.now()), returnDate: new Date(Date.now()), description: ''})
            setSuccess(null)
        }else if(error){
            enqueueSnackbar(error, {variant: 'error'})
            setError(null)
        }
    }, [success, error, enqueueSnackbar, form, setCreateForm, setError, setForm, setSuccess])

    const appendLeadingZeroes = (n) => {
        if(n <= 9){
          return "0" + n;
        }
        return n
      }
      const alz = appendLeadingZeroes
    const handleSubmit = () => {
        const {startDate, returnDate, description} = form
        const payload = {
            startDate: `${alz(startDate.getDate())}.${alz(startDate.getMonth() + 1)}.${startDate.getFullYear()}`,
            returnDate: `${alz(returnDate.getDate())}.${alz(returnDate.getMonth() + 1)}.${returnDate.getFullYear()}`,
            description: description,
            daysNumber: daysCount.toString(),
            userId,
            firstName: user.firstName,
            lastName: user.lastName
        }
        if(daysCount<='30'){
            addVacation(payload)
        }else{
            setError("You don't have enough vacation days")
        }
    }

    return (
        <div className='form'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className='pickers'>
                    <KeyboardDatePicker
                        className='picker'
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="Start Date"
                        value={form.startDate}
                        onChange={(date) => setForm({ ...form, startDate: date })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        className='picker'
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="return-date-picker-inline"
                        label="Return Date"
                        value={form.returnDate}
                        onChange={(date) => setForm({ ...form, returnDate: date })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <TextField
                        className='days'
                        disabled
                        value={daysCount > 0 ? daysCount : '0'}
                        label="Number of days"
                        variant="outlined"
                    />
                </div>
            </MuiPickersUtilsProvider>
            <TextField
                className='description'
                label="Description"
                multiline
                rows={4}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                value={form.description}
                variant="outlined"
            />
            <Button
                style={{ width: "80%" }}
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                color="primary"
                endIcon={loading && <CircularProgress size={20} style={{color: '#fff'}}/>}
                disabled={daysCount < 1 || loading}
            >
                Send Request
            </Button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    loading: state.vacationData.loading,
    success: state.vacationData.success,
    error: state.vacationData.error,
    userId: state.userData.user.id,
    user: state.userData.profileData,
})
const mapDispatchToProps = (dispatch) => ({
    addVacation: (payload) => dispatch(addVacation(payload)),
    setSuccess: (payload) => dispatch(setSuccess(payload)),
    setError: (payload) => dispatch(setError(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VacationForm)
