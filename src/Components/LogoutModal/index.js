import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './index.css';

const LogoutModal = ({open, close, submit}) => {

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
                    Click on Logout again to confirm Logout
                </AlertDialog.Description>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                <AlertDialog.Cancel asChild>
                    <button className="Button mauve" onClick={handleClose}>Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                    <button className="Button red" onClick={handleSubmit}>Logout</button>
                </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default LogoutModal;