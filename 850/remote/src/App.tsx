import {Grid, GridColumn} from "@progress/kendo-react-grid"

function App() {

  const data = [
    {itemId: 1, name: "John"},
    {itemId: 2, name: "Doe"},
  ]

  return (
    <>
      <h2>This is microfrontend</h2>
      <Grid data={data}>
        <GridColumn field={"itemId"} />
        <GridColumn field={"name"} />
      </Grid>
    </>
  )
}

export default App
