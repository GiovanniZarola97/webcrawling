import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ResultsPage = (props) => {
    const classes = useStyles();
    return (
        <Container >
            <Typography component="h1" variant="h5" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '30px' }}>
                Risultati
            </Typography>
            <div style={{ textAlign: 'right' }}>
                <Button endIcon={<BackupIcon/>} variant="contained" color="primary" style={{ marginLeft: '10px', marginBottom: '10px' }}>Salva sul server</Button>
                <Button endIcon={<GetAppIcon/>} variant="contained" color="primary" style={{ marginLeft: '10px', marginBottom: '10px' }}>Download</Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Parole</TableCell>
                            <TableCell >Geografia</TableCell>
                            <TableCell >Periodo</TableCell>
                            <TableCell >Categoria</TableCell>
                            <TableCell >Tipologia</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*TODO: Aggiungere map con i dati */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ResultsPage;