export const filterInventoryItem = (state, id) => {
	let newState = {};
	let newData = [];
	if (state.data.length > 0) {
		newData = state.data.filter((item) => {
			if (item.id !== id) {
				return true;
			} else return false;
		});
		newState = {
			data: newData,
		};
	} else {
		newState = state;
	}

	return newState;
};

export const updateItem = (state, data) => {
	let newState = {};
	let newData = [];
	if (state.data.length > 0) {
		newData = state.data.map((item) => {
			if (item.id === data.id) {
				return {
					...data,
				};
			} else {
				return {
					...item,
				};
			}
		});
		newState = {
			data: newData,
		};
	} else {
		newState = state;
	}

	return newState;
};
