export const addMark = mark => ({
  type: "ADD_MARK",
  payload: mark
})

export const delMark = i => ({
  type: "DEL_MARK",
  payload: i
})

export const toggleMarker = i => ({
  type: "TOGGLE_MARKER",
  payload: i
})

export const swapMarks = (to, from) => ({
  type: "SWAP_MARKS",
  payload:{to, from}
})

export const changeCoords = (coord, id) => ({
  type: "CHANGE_COORDS",
  payload: {coord, id}
})
