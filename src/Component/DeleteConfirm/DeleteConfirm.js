import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./Confirmation.scss";

const DeleteConfirm = ({ onClose, openDialog, successCallback, ...rest }) => {
	const handleClose = () => {
		onClose();
	};
	const handleCallback = () => {
		successCallback();
	};

	return (
		<div>
			<Dialog
				open={openDialog}
				onClose={onClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				className=" confirmation-dialog"
			>
				<DialogTitle id="alert-dialog-title">
					<div className="head">Delete Confirmation </div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure want to delete the Item?
					</DialogContentText>
					<div className="actions">
						<Button onClick={handleClose} className="btn-cancel">
							No
						</Button>
						<Button onClick={handleCallback} className="btn-submit" autoFocus>
							Yes
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export { DeleteConfirm };
