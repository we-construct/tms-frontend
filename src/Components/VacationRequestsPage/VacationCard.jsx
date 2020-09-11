import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../../Containers/VacationRequests/index.scss';
import { connect } from 'react-redux';
import { approveVacation, rejectVacation } from '../../Redux/APanel/actions';

const VacationCard = ({request, approveVacation, rejectVacation}) => {
    const {id, userId, firstName, lastName, startDate, returnDate, daysNumber, description} = request
    return (
        <Card className='card'>
            <CardContent>
                <NavLink style={{color: 'black'}} to={'/edit/' + userId}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstName + ' ' + lastName}
                    </Typography>
                </NavLink>
                <div style={{marginBottom: 10}}>
                    <Typography variant='body2'>
                        {startDate + ' - ' + returnDate}
                    </Typography>
                    <Typography variant='body2'>
                        {daysNumber + " days"}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=> approveVacation(id)}>
                    Approve
                </Button>
                <Button size="small" color="primary" onClick={()=> rejectVacation(id)}>
                    Reject
                </Button>
            </CardActions>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => ({
    approveVacation: (id) => dispatch(approveVacation(id)),
    rejectVacation: (id) => dispatch(rejectVacation(id)),
  })
  
export default connect(null, mapDispatchToProps)(VacationCard)
