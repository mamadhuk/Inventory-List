import * as actionTypes from "../actionType";

let InventoryItemList = [
	{
		id: 1,
		name: "name 1",
		desc: "desc 1",
		price: "1001",
	},
	{
		id: 2,
		name: "name 2",
		desc: "desc 2",
		price: "2002",
	},
	{
		id: 3,
		name: "name 3",
		desc: "desc 3",
		price: "3003",
	},
	{
		id: 4,
		name: "name 4",
		desc: "desc 4",
		price: "4004",
	},
	{
		id: 5,
		name: "name 5",
		desc: "desc 5",
		price: "5005",
	},
	{
		id: 6,
		name: "name 6",
		desc: "desc 6",
		price: "6006",
	},
];

const setInventoryList = (data) => ({
	type: actionTypes.SET_INVENTORY_LIST,
	data,
});
export const getInventoryList = () => (dispatch) => {
	dispatch(setInventoryList(InventoryItemList));
};

export const resetInventoryList = () => ({
	type: actionTypes.SET_INVENTORY_LIST,
});

export const deleteInventoryItemFromList = (id) => ({
	type: actionTypes.DELETE_INVENTORY_ITEM,
	id,
});

export const deleteInventoryItem = (id) => (dispatch) => {
	dispatch(deleteInventoryItemFromList(id));
};

export const addItemToList = (data) => ({
	type: actionTypes.ADD_INVENTORY,
	data,
});

export const addInventory = (data, callback) => (dispatch) => {
	dispatch(addItemToList(data));
	if (callback) {
		callback();
	}
};

export const updateItemToList = (data) => ({
	type: actionTypes.UPDATE_INVENTORY,
	data,
});

export const updateInventory = (data, callback) => (dispatch) => {
	dispatch(updateItemToList(data));
	if (callback) {
		callback();
	}
};
