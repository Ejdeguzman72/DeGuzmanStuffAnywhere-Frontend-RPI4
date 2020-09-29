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
    parseJwt = (token: any) => {
        if (!token) {
            return;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    tokenExtracted = this.parseJwt(localStorage.getItem('DeGuzmanStuffAnywhere_Token'));

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
            name: this.tokenExtracted.sub
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
                            type="name" onChange={this.setEnteredName}
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