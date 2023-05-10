const angry = "ಠ╭╮ಠ"
const happy = "(ಥ◡ಥ)"
const sad = "T.T"
const confused = "(@_@)"


const INITIAL_STATE = { mood: "(◔ڼ◔)" }

const changeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "angry":
            return { ...state, mood: angry }
        case "happy":
            return { ...state, mood: happy }
        case "sad":
            return { ...state, mood: sad }
        case "confused":
            return { ...state, mood: confused }
        default:
            return state
    }
}

const store = Redux.createStore(changeReducer)