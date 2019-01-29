import { set, get, map } from 'lodash'

export const swapArrayElement = (arr, a, b) => {
	let _arr = [...arr]
	let tmp = arr[a];
	_arr[a] = _arr[b];
	_arr[b] = tmp
	return _arr
}

// i know about immutable.js, but y not =)

export const immutableChangeValue = (arr, path, val) => {
	let _arr = [...arr]
	set(_arr, path, val)
	return _arr
}

export { get, set, map }





