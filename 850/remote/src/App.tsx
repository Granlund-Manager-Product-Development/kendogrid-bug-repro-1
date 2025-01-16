import {Grid, GridColumn} from "@progress/kendo-react-grid"

function App() {

  return (
    <>
      <h2>This is microfrontend</h2>
      <Grid data={[]}>
        <GridColumn field="ProductID" title="ID" />
      </Grid>
    </>
  )
}

export default App
