import './App.css';
import DataTable from './components/table/Table';
import AddBooks from './components/addBooks/addBooks'
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App" style={{marginTop:"6%"}}>
          <Grid container spacing={2}>
            <AddBooks/>
            <DataTable/>         
          </Grid>
    </div>
  );
}

export default App;
