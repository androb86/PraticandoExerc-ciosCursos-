import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Card } from '../../components/Card/Card';

export const HomePage = () => {
    return (
        <div>
            <Modal 
            open={true} 
            title="Salvar Pin"
            controls={[
                {
                    label: 'Criar Pasta',
                    variant: 'primary',
                    onClick: () => {
                        console.log('clicou');
                    }
                },
                {
                    label: 'Fechar',
                    variant: 'secondary',
                    onClick: () => {
                        console.log('clicou');
                    }
                }
            ]}
            >
                <p>Olá a Todos</p>
            </Modal>
            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><Card title="Matemática" image="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><Card title="Trigonometria" image="https://picsum.photos/200/300?54" total={1} /></Col>
                </Row>
            </Container>
        </div>
    )
}