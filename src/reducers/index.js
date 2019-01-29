import { initState, moscowCords } from '../constants'

import {
	ADD_MARK,
	DEL_MARK,
	SWAP_MARKS,
	TOGGLE_MARKER,
	CHANGE_COORDS
} from '../constants'

import { swapArrayElement, immutableChangeValue, get } from '../helpers'

const rootReducer = (state = initState, action = {}) => {
	switch (action.type) {
		case ADD_MARK:{
			return [
				...state, 
				{ 
					label: action.payload,
					coord: moscowCords,
					opened: false
				}

			]
		}
		case DEL_MARK:{
			return state.filter((mark, i) => i !== action.payload)
		}
		case SWAP_MARKS:{
			return swapArrayElement(state, action.payload.from,action.payload.to)
		}
		case TOGGLE_MARKER:{
			const path = `[${action.payload}].opened`
			return immutableChangeValue(state, path, !get(state,path))
		}	
		case CHANGE_COORDS:{
			const {coord, id} = action.payload
			const path = `[${id}].coord`
			return immutableChangeValue(state, path, coord)
		}
		default:{
			return state;
		}
	}
}

export {
	rootReducer
}