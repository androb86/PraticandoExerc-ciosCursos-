import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal } from '../../components/Modal/Modal';

export const ModalCreateFolder = ({ open }) => {
    const [ folderName, setFolderName ] = useState('');

    const handleSubmit = (e) => {
        e.prenventDefault();
    };

    const handleChange = (e) => {
        setFolderName(e.target.value);
    }
    return (
        <Modal
            open={open}
            title="Criar pasta"
            controls={[
                {
                    label: 'Criar e Salvar',
                    loadingLabel: 'Criando',
                    variant: 'secondary',
                    loading: false,
                    type: 'submit',
                    form: 'form-criar-pasta',
                    onclick: () => { }
                }
            ]}

        >
            <Form onSubmit={handleSubmit} id="form-criar-pasta">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da Pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex. Matematica" value={folderName} onchange={handleChange} />
                </Form.Group>
            </Form>
        </Modal>
    )
}