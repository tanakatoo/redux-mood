const happyBtn = document.querySelector("#happy")
const sadBtn = document.querySelector("#sad")
const confusedBtn = document.querySelector("#confused")
const angryBtn = document.querySelector("#angry")
const div = document.querySelector("#face")

happyBtn.addEventListener("click", () => {
    store.dispatch({ type: "happy" })
    const state = store.getState()
    // console.log(state)
    div.innerText = state.mood
})
sadBtn.addEventListener("click", () => {
    store.dispatch({ type: "sad" })
    const state = store.getState()
    // console.log(state)
    div.innerText = state.mood
})
confusedBtn.addEventListener("click", () => {
    store.dispatch({ type: "confused" })
    const state = store.getState()
    // console.log(state)
    div.innerText = state.mood
})
angryBtn.addEventListener("click", () => {
    store.dispatch({ type: "angry" })
    const state = store.getState()
    // console.log(state)
    div.innerText = state.mood
})