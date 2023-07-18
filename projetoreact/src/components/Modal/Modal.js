import ModalBs from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export const Modal = ({ title, children, open, controls = [] }) => {
    return (
        <ModalBs show={open} onHide={() => { }}>
            <ModalBs.Header closeButton>
                <ModalBs.Title>{title}</ModalBs.Title>
            </ModalBs.Header>
            <ModalBs.Body>{children}</ModalBs.Body>
            <ModalBs.Footer>
                {controls.map((control, controlIndex) => (
                    <Button key={controlIndex} variant={control.variant} onClick={control.onClick}>
                        {control.label}
                    </Button>
                ))}

            </ModalBs.Footer>
        </ModalBs>
    );
}