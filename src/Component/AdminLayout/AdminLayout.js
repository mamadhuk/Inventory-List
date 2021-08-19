import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const AdminLayout = (props) => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<span variant="h6" className={classes.title}>
							<b>Inventory List</b>
						</span>
					</Toolbar>
				</AppBar>
			</div>
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="md">{props.children}</Container>
			</React.Fragment>
		</>
	);
};
export { AdminLayout };
