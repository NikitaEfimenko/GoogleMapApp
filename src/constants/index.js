export const moscowCords = {
  lat: 55.751244, 
  lng: 37.618423
}

// export const initState = [] 
// init test

 export const initState = [
{
	label:`Москва`, 
	coord: moscowCords,
	opened: false
},
{
	label:`Волгоград`, 
	coord: moscowCords,
	opened: false
},
{
	label:`Сызрань`, 
	coord: moscowCords,
	opened: false
},
{
	label:`Астрахань`, 
	coord: moscowCords,
	opened: false
}]

export const ADD_MARK = "ADD_MARK"
export const DEL_MARK = "DEL_MARK"
export const SWAP_MARKS = "SWAP_MARKS"
export const TOGGLE_MARKER = "TOGGLE_MARKER"
export const CHANGE_COORDS = "CHANGE_COORDS"

