import { Toast as ToastBootstrap } from 'react-bootstrap'

interface IProps {
    onClose: () => void
    show: boolean
    message: string
    color?: string
}

export const Toast = (props: IProps) => {
    return (
        <ToastBootstrap
            style={{
                position: 'absolute',
                zIndex: 100,
                right: 0
            }}
            onClose={props.onClose}
            show={props.show}
            delay={3000}
            autohide
            bg={props?.color ? props.color : 'success'}
        >
            <ToastBootstrap.Body
                style={{
                    color: "#FFF"
                }}
            >
                {props.message}
            </ToastBootstrap.Body>

        </ToastBootstrap>
    )
}