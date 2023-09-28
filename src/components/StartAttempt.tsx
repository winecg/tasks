import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttemps] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setInProgress(true);
                    setNumAttemps(numAttempts - 1);
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumAttemps(1 + numAttempts)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>{numAttempts}</div>
        </div>
    );
}
