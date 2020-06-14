import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import Counter from '../Counter/Counter'
import { Typography, makeStyles } from '@material-ui/core'
import './style.css'

const useStyles = makeStyles({
    title:{
        letterSpacing: '1.9px'
    },
    catchWord: {
        color:'#f1f1f1'
    }
})

const RunRaffleBasket = props => {
    const styles = useStyles()

    return (
        <Fragment>
            <section className="col-12 text-center conten-header">
                <div className="col-12 text-center pt-5">
                    <Typography variant="h3" component="h3" color="secondary" className={styles.title}>Welcome winners</Typography>
                    <Typography paragraph={true} className={styles.catchWord}>Now is your best chance to winng like you dreamed!!!</Typography>
                </div>
            </section>
            <div className="col-12 mt-4"> 
                <div className="row justify-content-center">
                    {/* <div className="col-12"></div> */}
                    <div className="col-7 text-center">
                        <Counter />
                    </div>
                </div>
            </div>
        </Fragment> 
    )
}

// RunRaffleBasket.propTypes = {

// }

export default RunRaffleBasket;
