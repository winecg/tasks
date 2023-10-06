import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple",
        "pink"
    ];

    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="changeColors">
                {colors.map((currentColor) => (
                    <Form.Check
                        inline
                        key={currentColor}
                        type="radio"
                        name={currentColor}
                        label={currentColor}
                        value={currentColor}
                        onChange={updateColor}
                        checked={color === currentColor}
                        style={{ backgroundColor: currentColor }}
                    ></Form.Check>
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                </div>
            </Form.Group>
        </div>
    );
}
