import produce from 'immer'
import type { Reducer } from 'react'
import type { Action } from '../../types/global.types'
import * as actions from '../actions/counter.action'

type State = {
    count: number
}

const initialState: State = {
    count: 0
}

const reducer: Reducer<State, Action> = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case actions.increment.cte:
            draft.count++
            break;

        case actions.decrement.cte:
                draft.count--
                break;
        default:
            break;
    }
})
export default reducer