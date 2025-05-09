const App = () => {
  return (<>
  <Hello name='Ekene'/>
  <Hello name='Ebere'/>
  </>)
}


const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>
}
export default App