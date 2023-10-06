import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {editing ? (
                <Form.Group controlId="formEdit">
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={updateUsername}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={updateStudent}
                    ></Form.Check>
                </Form.Group>
            ) : (
                <div>
                    {username} is {student ? "a" : "not a"} student
                </div>
            )}
            <Form.Check
                type="switch"
                id="editing-check"
                label="Edit Mode"
                checked={editing}
                onChange={updateEditMode}
            ></Form.Check>
        </div>
    );
}
