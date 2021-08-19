import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table,
	Button,
} from "@material-ui/core";

import {
	getInventoryList,
	resetInventoryList,
	deleteInventoryItem,
} from "../../store/actions";
import { DeleteConfirm } from "../DeleteConfirm";
import { AddInventory } from "../AddInventory";

import "./Home.scss";

const Home = (props) => {
	const dispatch = useDispatch();
	const [deleteModal, setDeleteModal] = useState(false);
	const [deleteId, setDeleteId] = useState("");
	const [addModal, setAddModal] = useState(false);
	const [inventoryData, setInventoryData] = useState({});

	const items = useSelector(({ inventoryReducer }) => inventoryReducer.data);

	useEffect(() => {
		dispatch(getInventoryList());
		return () => {
			dispatch(resetInventoryList());
		};
	}, [dispatch]);

	const deleteConfirmation = (id) => {
		setDeleteModal(true);
		setDeleteId(id);
	};

	const editOpenModal = (data) => {
		setInventoryData(data);
		setAddModal(true);
	};

	const addOpenMOdal = () => {
		setInventoryData({});
		setAddModal(true);
	};

	return (
		<div className="home-box">
			<AddInventory
				openDialog={addModal}
				onClose={() => setAddModal(false)}
				successCallback={() => {
					dispatch(getInventoryList());
					setAddModal(false);
				}}
				inventoryData={inventoryData}
			/>
			<DeleteConfirm
				openDialog={deleteModal}
				onClose={() => setDeleteModal(false)}
				successCallback={() => {
					dispatch(deleteInventoryItem(deleteId));
					setDeleteModal(false);
				}}
			/>
			<TableContainer>
				<Table
					className="tableContainer"
					stickyHeader
					aria-label="list of teams"
				>
					<TableHead>
						<TableRow>
							<TableCell align="left">
								<b>Id</b>
							</TableCell>
							<TableCell align="left">
								<b>Name</b>
							</TableCell>
							<TableCell align="left">
								<b>Description</b>
							</TableCell>
							<TableCell align="left">
								<b>Price</b>
							</TableCell>
							<TableCell align="right">
								<b>Action</b>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items && items.length > 0 ? (
							items.map((item, index) => (
								<TableRow key={index}>
									<TableCell align="left">{item.id}</TableCell>
									<TableCell align="left">{item.name}</TableCell>
									<TableCell align="left">{item.desc}</TableCell>
									<TableCell align="left">{item.price}</TableCell>
									<TableCell align="right">
										<div className="actions">
											<div onClick={() => editOpenModal(item)}> Edit</div>
											<div onClick={() => deleteConfirmation(item.id)}>
												Delete
											</div>
										</div>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell align="center" colSpan="6" scope="row">
									No Data Available
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<div className="add-btn">
				<Button variant={"contained"} onClick={() => addOpenMOdal()}>
					Add Item
				</Button>
			</div>
		</div>
	);
};

export { Home };
