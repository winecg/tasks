import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setRequested(parseInt(event.target.value));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>You have {remaining} attempts left</p>
            <Form.Group controlId="formAttempts">
                <Form.Label>Requested:</Form.Label>
                <Form.Control
                    type="number"
                    onChange={updateAttempts}
                ></Form.Control>
                <Button
                    onClick={() => setRemaining(remaining - 1)}
                    disabled={remaining === 0}
                >
                    Use
                </Button>
                <Button onClick={() => setRemaining(remaining + requested)}>
                    Gain
                </Button>
            </Form.Group>
        </div>
    );
}
