import * as actionTypes from "../actionType";
import axios from "axios";

const setInventoryList = (data) => ({
	type: actionTypes.SET_INVENTORY_LIST,
	data,
});
export const getInventoryList = () => (dispatch) => {
	axios.get(`https://fakestoreapi.com/products`).then((res) => {
		const resp = res.data;
		dispatch(setInventoryList(resp));
	});
};

export const resetInventoryList = () => ({
	type: actionTypes.RESET_INVENTORY_LIST,
});

export const deleteInventoryItemFromList = (id) => ({
	type: actionTypes.DELETE_INVENTORY_ITEM,
	id,
});

export const deleteInventoryItem = (id) => (dispatch) => {
	axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
		const resp = res.data;
		dispatch(deleteInventoryItemFromList(resp.id));
	});
};

export const addItemToList = (data) => ({
	type: actionTypes.ADD_INVENTORY,
	data,
});

export const addInventory = (data, callback) => (dispatch) => {
	const body = {
		title: data.title,
		price: data.price,
		description: data.description,
		image: "https://i.pravatar.cc",
		category: "",
	};
	axios.post(`https://fakestoreapi.com/products`, body).then((res) => {
		const resp = res.data;
		dispatch(addItemToList(resp));
		if (callback) {
			callback();
		}
	});
};

export const updateItemToList = (data) => ({
	type: actionTypes.UPDATE_INVENTORY,
	data,
});

export const updateInventory = (data, callback) => (dispatch) => {
	const body = {
		title: data.title,
		price: data.price,
		description: data.description,
		image: "https://i.pravatar.cc",
		category: "",
	};
	axios
		.put(`https://fakestoreapi.com/products/${data.id}`, body)
		.then((res) => {
			const resp = res.data;
			dispatch(updateItemToList(data));
			if (callback) {
				callback();
			}
		});
};
