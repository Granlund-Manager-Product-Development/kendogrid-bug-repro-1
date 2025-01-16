# Setup in remote
cd remote
bun install
bunx kendo-ui-license activate
bun run mfe

# Setup in host (in another console window)
cd host
bun install
bunx kendo-ui-license activate
bun run dev

# End result:
http://localhost:5170 loads, and on redering KendoReactGrid throws in console:

```text
Uncaught TypeError: Cannot read properties of undefined (reading 'validated')
at cloneAndReplaceKey (chunk-UXVLD57N.js?v=bee210a0:384:53)
at mapIntoArray (chunk-UXVLD57N.js?v=bee210a0:497:204)
at mapChildren (chunk-UXVLD57N.js?v=bee210a0:547:9)
at Object.toArray (chunk-UXVLD57N.js?v=bee210a0:761:18)
at H.<anonymous> (__federation_expose_KendoBug-Dx0LA36B.js:22253:53)
at H.u [as childrenToArray] (__federation_expose_KendoBug-Dx0LA36B.js:2181:17)
at H.render (__federation_expose_KendoBug-Dx0LA36B.js:22486:20)
at react-stack-bottom-frame (react-dom_client.js?v=80c61c76:16200:29)
at updateClassComponent (react-dom_client.js?v=80c61c76:6301:25)
at beginWork (react-dom_client.js?v=80c61c76:7057:16)
```