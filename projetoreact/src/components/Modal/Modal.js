import ModalBs from 'react-bootstrap/Modal';
import { Button } from '../Button/Button';

export const Modal = ({ title, children, open, controls = [] }) => {
    return (
        <ModalBs show={open} onHide={() => { }}>
            <ModalBs.Header closeButton>
                <ModalBs.Title>{title}</ModalBs.Title>
            </ModalBs.Header>
            <ModalBs.Body>{children}</ModalBs.Body>
            <ModalBs.Footer>
                {controls.map((control, controlIndex) => (
                    <Button 
                    key={controlIndex} 
                    {...control}
                    />
            
                ))}

            </ModalBs.Footer>
        </ModalBs>
    );
}