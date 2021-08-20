import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { addInventory, updateInventory } from "../../store/actions";

import "./AddInventory.scss";

const AddInventory = ({ onClose, openDialog, successCallback, ...rest }) => {
	const dispatch = useDispatch();
	const getInitialValues = () => {
		if (rest.inventoryData && Object.keys(rest.inventoryData).length) {
			return {
				id: rest.inventoryData.id,
				title: rest.inventoryData.title,
				description: rest.inventoryData.description,
				price: rest.inventoryData.price,
			};
		}

		return {
			id: generateRandonId(),
			title: "",
			description: "",
			price: "",
		};
	};

	const generateRandonId = () => {
		let timeStamp = new Date().getTime();
		let r = Math.random() * 16;
		let randomStr = String(Math.floor(timeStamp * r));
		return randomStr;
	};

	const handleSubmit = (values) => {
		if (rest.inventoryData && Object.keys(rest.inventoryData).length) {
			dispatch(updateInventory(values, successCallback()));
		} else {
			dispatch(addInventory(values, successCallback()));
		}
	};

	return (
		<>
			<div className="add-inventory-box">
				<Dialog
					open={openDialog}
					onClose={onClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					className="add-dialog"
				>
					<Formik
						initialValues={getInitialValues()}
						onSubmit={(values, { setSubmitting }) => {
							handleSubmit(values);
							setSubmitting(false);
						}}
					>
						{({
							setFieldValue,
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) => (
							<form
								className="addInventoryForm"
								autoComplete="off"
								onSubmit={handleSubmit}
							>
								<DialogTitle className="addInventory-wrap">
									<div className="addInventory-heading">
										{rest.inventoryData &&
										Object.keys(rest.inventoryData).length
											? "Edit Inventory"
											: "Add Inventory"}
									</div>
								</DialogTitle>
								<DialogContent className="addInventory-body">
									<div className="add-formWrapper">
										<div className="formItem">
											<label htmlFor="title" className="formLabel">
												Name
											</label>
											<input
												required
												id="title"
												name="title"
												value={values.title}
												onChange={handleChange}
												onBlur={handleBlur}
												type="text"
												className="textField"
											/>
										</div>
										<div className="formItem">
											<label htmlFor="description" className="formLabel">
												Description
											</label>
											<input
												required
												id="description"
												name="description"
												value={values.description}
												onChange={handleChange}
												onBlur={handleBlur}
												type="text"
												className="textField"
											/>
											{errors.name && touched.name ? (
												<div className="error">{errors.message}</div>
											) : null}
										</div>
										<div className="formItem">
											<label htmlFor="price" className="formLabel">
												Price
											</label>
											<input
												required
												id="price"
												name="price"
												value={values.price}
												onChange={handleChange}
												onBlur={handleBlur}
												type="number"
												className="textField"
											/>
										</div>
									</div>
								</DialogContent>
								<DialogActions>
									<Button onClick={() => onClose()} color="primary">
										Cancel
									</Button>
									<Button type="submit" color="primary" autoFocus>
										{rest.inventoryData &&
										Object.keys(rest.inventoryData).length
											? "Update"
											: "Add"}
									</Button>
								</DialogActions>
							</form>
						)}
					</Formik>
				</Dialog>
			</div>
		</>
	);
};

export { AddInventory };
