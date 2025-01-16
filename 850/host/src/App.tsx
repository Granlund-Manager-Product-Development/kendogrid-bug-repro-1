import {lazy, Suspense} from "react"

function App() {
  // @ts-ignore
  const LazyKendoBug = lazy(() => import('kendoBugRemote/KendoBug'))
  return (
    <>
      <h1>This is host app. Below is the microfrontend</h1>
      <br/>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyKendoBug/>
      </Suspense>
    </>
  )
}

export default App
