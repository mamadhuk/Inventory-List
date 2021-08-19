import * as actionTypes from "../actionType";
import { filterInventoryItem, updateItem } from "../helper";

const INITIAL_STATE = {
	data: [],
	size: null,
};

const inventoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SET_INVENTORY_LIST:
			return {
				...state,
				data: [...action.data],
				size: action.data.length,
			};
		case actionTypes.DELETE_INVENTORY_ITEM:
			return {
				...state,
				...filterInventoryItem(state, action.id),
			};
		case actionTypes.RESET_INVENTORY_LIST:
			return {
				...INITIAL_STATE,
			};
		case actionTypes.ADD_INVENTORY:
			return {
				...state,
				data: [...state.data, action.data],
				size: action.data.length + 1,
			};
		case actionTypes.UPDATE_INVENTORY:
			return {
				...state,
				...updateItem(state, action.data),
			};
		default:
			return state;
	}
};

export { inventoryReducer };
