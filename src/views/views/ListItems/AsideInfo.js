import React from 'react'
// import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import FormLabel from '@material-ui/core/FormLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    chkRoot: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(0),
      },
}));

const AsideInfo = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Brand</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                <div className={classes.chkRoot}>
                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                        {/* <FormLabel component="legend">Pick two</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                label="Gilad Gray"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                label="Jason Killian"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                label="Antoine Llorca"
                            />
                        </FormGroup>
                        {/* <FormHelperText>You can display an error</FormHelperText> */}
                    </FormControl>
                </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header2"
                >
                    <Typography className={classes.heading}>Brand 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                <div className={classes.chkRoot}>
                    <FormControl required error={error} component="fieldset" className={classes.formControl}>
                        {/* <FormLabel component="legend">Pick two</FormLabel> */}
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad2" />}
                                label="Gilad Gray2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={jason} onChange={handleChange} name="jason2" />}
                                label="Jason Killian2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine2" />}
                                label="Antoine Llorca2"
                            />
                        </FormGroup>
                        {/* <FormHelperText>You can display an error</FormHelperText> */}
                    </FormControl>
                </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

// AsideInfo.propTypes = {

// }

export default AsideInfo
