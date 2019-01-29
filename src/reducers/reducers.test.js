import { rootReducer } from '.'
import {  initState } from '../constants'
import {
	addMark,
	delMark,
	swapMarks,
	changeCoords,
	toggleMarker
} from '../actions'
import deepFreeze from 'deep-freeze'

describe('reducers test', () => {
	const state = initState
	deepFreeze(state)
	it(("default"), () =>{
		const action = "undefined"
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual(state)
	})

	it(("delete mark"), () => {
		const state = [0,1,2,3,4]
		const action = delMark(1)
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual([0,2,3,4])
	})
 
	it(("swap marks"), () => {
		const state = [0,1,2,3,4]
		const action = swapMarks(1,2)
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual([0,2,1,3,4])
	})

	it(("add marks"), () => {
		const elem =  {
			coord: {
				lat: 55.751244, 
				lng: 37.618423
			}, 
			label: 10, 
			opened: false
		}
		const state = [0,1,2,3,4]
		const action = addMark(10)
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual([0,1,2,3,4, elem])
	})

	it(("toggle marks"), () => {
		const elem =  {
			coord: {
				lat: 55.751244, 
				lng: 37.618423
			}, 
			label: 10, 
			opened: false
		}
		const state = [0,1,elem,3,4]
		const action = toggleMarker(2)
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual([0,1,{...elem, opened:true},3,4])
	})

	it(("change marks"), () => {
		const elem =  {
			coord: {
				lat: 55.751244, 
				lng: 37.618423
			}, 
			label: 10, 
			opened: false
		}
		const coord = {lat:0,lng:0}
		const state = [0,1,elem,3,4]
		const action = changeCoords(coord, 2)
		deepFreeze(action)
		const res = rootReducer(state, action)
		expect(res).toEqual([0,1,{
			coord: coord,
			label: 10, 
			opened: false
		},3,4])
	})

	it(("initial"), () => {
		const res = rootReducer()
	})
})