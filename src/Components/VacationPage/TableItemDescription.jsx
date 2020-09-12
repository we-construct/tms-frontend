import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const TableItemDescription = ({description}) => {
  return (
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Description
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description || 'No description...'}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default TableItemDescription
