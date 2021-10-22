
export const createAction = type => ({
    cte: type,
    run: (payload = null) => ({ type, payload })
})