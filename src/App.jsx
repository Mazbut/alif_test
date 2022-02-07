import './App.css';
import DataTable from './components/table/Table';
import AddBooks from './components/addBooks/addBooks'
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App" style={{marginTop:"6%"}}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <AddBooks/>
            </Grid>
            <Grid item xs={6}>
            <DataTable/>
            </Grid>
         
          </Grid>
    </div>
  );
}

export default App;
