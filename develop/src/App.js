import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 30,
    paddingTop: 20,
  },
  cards: {
    marginTop: 40,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 25,
  },
  cardtitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardtotal: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardrevenue: {
    maxWidth: 260,
    width: '100%',
    borderTop: '1px solid black',
    borderRight: '1px solid black',
  },
  cardexpenses: {
    maxWidth: 260,
    width: '100%',
    borderTop: '1px solid black',
  },
  textcard: {
    fontSize: 24,
  },
  sumrevenue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
  sumexpenses: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato',
  },
  revenuelist: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '10px solid darkgreen',
    borderRight: '10px solid darkgreen',
    borderRadius: 10,
    color: '333',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    margin: '10px 0',
    lineHeight: 25,
    listStyle: 'none',
    marginTop: 20,
  },
  revenuereason: {
    maxWidth: 150,
  },
  revenuenumber: { 
    maxWidth: 70,
    paddingRight: 30,
  },
  expenseslist: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '10px solid tomato',
    borderRight: '10px solid tomato',
    borderRadius: 10,
    color: '333',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    margin: '10px 0',
    lineHeight: 25,
    marginTop: 20,
  },
  expensesreason: {
    maxWidth: 150,
  },
  expensesnumber: { 
    maxWidth: 70,
    paddingRight: 30,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.title}>Калькулятор расходов</Typography>
        <Container maxWidth="sm">
          <Card className={classes.cards}>
            <CardContent>
              <div className={classes.cardtitle}>
                <Typography className={classes.textcard}>Баланс</Typography>
                <Typography className={classes.textcard}>0 ₽</Typography>
              </div>
              <div className={classes.cardtotal}>
                <div className={classes.cardrevenue}>
                <Typography className={classes.textcard}>Доходы</Typography>
                <Typography className={classes.sumrevenue}>+0 ₽</Typography>
              </div>
              <div className={classes.cardexpenses}>
                <Typography className={classes.textcard}>Расходы</Typography>
                <Typography className={classes.sumexpenses}>-0 ₽</Typography>
              </div>
              </div>
            </CardContent>
          </Card>
          </Container>
    </div>
  );
}

export default App;
