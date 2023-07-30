import React from 'react';
import { DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Dialog } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class NameComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true,
            name: ""
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    save = () => {
        this.setState({
            open: false,
        });

        this.props.setName(this.state.name)
        console.log(this.state.name + "slkdjflksdjf");
    }

    setEnteredName = (event: any) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Chat</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your name
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="name" onChange={this.setEnteredName} value={this.state.name} 
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.save} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }
}