import React, { useEffect } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {TextField, CircularProgress} from '@material-ui/core';
import style from '../../Containers/Vacations/index.module.css';
import { Button } from '@material-ui/core';
import { requestVacation, setSuccess, setError } from '../../Redux/vacation/actions';
import { connect } from 'react-redux';
import { useSnackbar } from "notistack";

const VacationForm = ({ form, setForm, vacations, requestVacation, loading, setCreateForm, setSuccess, success, setError, error }) => {
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
    }, [success, error])

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
            id: vacations.length + 1,
            startDate: `${alz(startDate.getDate())}.${alz(startDate.getMonth() + 1)}.${startDate.getFullYear()}`,
            returnDate: `${alz(returnDate.getDate())}.${alz(returnDate.getMonth() + 1)}.${returnDate.getFullYear()}`,
            description: description,
            daysNumber: daysCount,
            status: 'Pending'
        }
        if(daysCount<='30'){
            requestVacation(payload)
        }else{
            setError("You don't have enough vacation days")
        }
    }

    return (
        <div className={style.form}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={style.pickers}>
                    <KeyboardDatePicker
                        className={style.picker}
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="start-date-picker-inline"
                        label="Start Date"
                        value={form.startDate}
                        onChange={(date) => setForm({ ...form, startDate: date })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        className={style.picker}
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
                        className={style.days}
                        id="outlined-basic"
                        disabled
                        value={daysCount > 0 ? daysCount : '0'}
                        label="Number of days"
                        variant="outlined"
                    />
                </div>
            </MuiPickersUtilsProvider>
            <TextField
                className={style.description}
                id="outlined-multiline-static"
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
                disabled={daysCount < 1 || loading && true}
            >
                Send Request
            </Button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    vacations: state.vacationData.vacations,
    loading: state.vacationData.loading,
    success: state.vacationData.success,
    error: state.vacationData.error,
})
const mapDispatchToProps = (dispatch) => ({
    requestVacation: (payload) => dispatch(requestVacation(payload)),
    setSuccess: (payload) => dispatch(setSuccess(payload)),
    setError: (payload) => dispatch(setError(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VacationForm)
