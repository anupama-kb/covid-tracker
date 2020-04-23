import React from 'react'
import {Card, Grid, CardContent, Typography } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import  cx from 'classnames'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
   console.log(confirmed)
   if (!confirmed) {
      return 'Loading .....';
   }
   
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          {/* multiple styles with class name */}
            {/* For mobile device size is xs  md is for medium device*/}
          <Grid item component={Card} xs= {12} md={3} className={cx(styles.card, styles.infected)}>
             <CardContent>
                <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={confirmed.value} duration={2.5} seperator="," />
                </Typography>
                <Typography color = "textSecondary"> { new Date(lastUpdate).toDateString() } </Typography>
                <Typography variant="body2"> Number of active cases of COVID-19 </Typography>
             </CardContent>
          </Grid>
          <Grid item component={Card} xs= {12} md={3} className={cx(styles.card, styles.recovered)}>
             <CardContent>
                <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                <CountUp start={0} end={recovered.value} duration={2.5} seperator="," />
                <Typography color = "textSecondary"> { new Date(lastUpdate).toDateString() } </Typography>
                <Typography variant="body2"> Number of recoveries from  COVID-19 </Typography>
             </CardContent>
          </Grid>
          <Grid item component={Card} xs= {12} md={3} className={cx(styles.card, styles.deaths)}>
             <CardContent>
                <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                <CountUp start={0} end={deaths.value} duration={2.5} seperator="," />
                <Typography color = "textSecondary"> { new Date(lastUpdate).toDateString() } </Typography>
                <Typography variant="body2"> Number of deaths causes COVID-19 </Typography>
             </CardContent>
          </Grid>

        </Grid>
      </div>
    )
}

export default Cards;

