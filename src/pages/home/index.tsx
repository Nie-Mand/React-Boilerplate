import map from './map'

const HomePage = props => {
  console.log({ props })
  return (
    <div>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <h1>{props.count}</h1>
    </div>
  )
}

export default map(HomePage)
