import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './index.css';

const AlertDialogDelete = ({open, close, submit, delelte}) => {

    const handleSubmit = () => {
        submit()
        close()
    }

    const handleClose = () => {
        close()
    }


    return  (
        <AlertDialog.Root open={open}>
            <AlertDialog.Portal>
            <AlertDialog.Overlay className="AlertDialogOverlay" />
            <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                    {delelte ? "This action cannot be undone. This will permanently delete your transaction and remove your data from our servers." :
                    "Click on log out to Logout."}
                </AlertDialog.Description>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                <AlertDialog.Cancel asChild>
                    <button className="Button mauve" onClick={handleClose}>Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                    <button className="Button red" onClick={handleSubmit}>{delelte ? "Yes, delete transaction": "Logout"}</button>
                </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default AlertDialogDelete;