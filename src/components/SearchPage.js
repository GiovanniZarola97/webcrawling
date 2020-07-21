import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert'
import ResultsPage from './ResultsPage';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { resultsView: false, words: undefined, geography: undefined, category: undefined, typology: undefined, startDate: undefined, endDate: undefined, showAlert: false, textAlert: undefined };
    }

    handleWordsChange = (event) => {
        this.setState({ words: event.target.value });
    }

    handleGeographyChange = (event) => {
        this.setState({ geography: event.target.value });
    }

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
    }

    handleTypologyChange = (event) => {
        this.setState({ typology: event.target.value });
    }

    handleStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    }

    handleEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    }

    handleSubmit = () => {
        if ((new Date(this.state.startDate).getTime() > new Date(this.state.endDate).getTime())) {
            this.setState({ showAlert: true, textAlert: 'Data inizio non può essere successiva a data fine.' })
        }
        else {
            this.setState({ resultsView: true })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            this.state.resultsView === false ?
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Effettua la ricerca
                    </Typography>

                        <form className={classes.form} noValidate type='post'>
                            {this.state.showAlert ?
                                <Alert severity="error" style={{ marginBottom: '10px' }}>{this.state.textAlert}</Alert>
                                : null
                            }
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="words"
                                        label="Parole"
                                        name="words"
                                        onChange={this.handleWordsChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="geography"
                                        label="Geografia"
                                        name="geography"
                                        onChange={this.handleGeographyChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="category"
                                        label="Categoria"
                                        name="category"
                                        onChange={this.handleCategoryChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="typology"
                                        label="Tipologia"
                                        name="typology"
                                        onChange={this.handleTypologyChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="start-date"
                                        name="start-date"
                                        type="date"
                                        label="Data inizio"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleStartDateChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="end-date"
                                        name="end-date"
                                        type="date"
                                        label="Data fine"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleEndDateChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                                endIcon={<SearchIcon/>}
                            >
                                CERCA
                     </Button>
                        </form>
                    </div>
                </Container> :
                <div>
                    <IconButton aria-label="indietro" onClick={() => this.setState({resultsView: false, showAlert: false, textAlert: undefined})}>
                         <ArrowBackIcon />
                    </IconButton>
                    <ResultsPage />
                </div>
        );
    }
}

export default withStyles(styles)(SearchPage);