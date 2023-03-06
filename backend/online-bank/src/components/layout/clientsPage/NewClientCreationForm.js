import React from "react";
import { Form, Button, Card } from 'react-bootstrap';

function NewClientCreationForm(props) {
    const nameRef = React.createRef();
    const lastnameRef = React.createRef();
    const passwordRef = React.createRef();

    return (
        <Card className="mb-4 mx-auto" style={{ width: '800px' }}>
            <Card.Body>
                <h3 className="text-center">������� ������ �������</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>���</Form.Label>
                        <Form.Control type="text"
                            placeholder="������� ��� �������"
                            defaultValue={props.newClient.name}
                            ref={nameRef}
                            onChange={() => {
                                props.setClient({
                                    name: nameRef.current.value,
                                    lastname: lastnameRef.current.value,
                                    password: passwordRef.current.value
                                })
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>�������</Form.Label>
                        <Form.Control type="text"
                            placeholder="������� ������� �������"
                            defaultValue={props.newClient.lastname}
                            ref={lastnameRef}
                            onChange={() => {
                                props.setClient({
                                    name: nameRef.current.value,
                                    lastname: lastnameRef.current.value,
                                    password: passwordRef.current.value
                                })
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>������</Form.Label>
                        <Form.Control type="password"
                            placeholder="������� ������"
                            defaultValue={props.newClient.password}
                            ref={passwordRef}
                            onChange={() => {
                                props.setClient({
                                    name: nameRef.current.value,
                                    lastname: lastnameRef.current.value,
                                    password: passwordRef.current.value
                                })
                            }} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e) => {
                        props.createClient(nameRef.current.value,
                            lastnameRef.current.value,
                            passwordRef.current.value)
                    }}>
                        �������
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default NewClientCreationForm;