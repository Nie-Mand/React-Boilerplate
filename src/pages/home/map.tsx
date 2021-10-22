import { connect } from 'react-redux'
import * as actions from '../../redux/actions/counter.action'

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = {
  increment: actions.increment.run,
  decrement: actions.decrement.run,
}

console.log({ mapDispatchToProps })
export default Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component)
