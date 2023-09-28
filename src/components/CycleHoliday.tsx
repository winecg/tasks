import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎄" | "🦃" | "🎂" | "🎃" | "🎊";

export function getHolidayByAlphabet(holiday: Holiday): Holiday {
    if (holiday === "🎂") {
        return "🎄";
    } else if (holiday === "🎄") {
        return "🎃";
    } else if (holiday === "🎃") {
        return "🎊";
    } else if (holiday === "🎊") {
        return "🦃";
    } else {
        return "🎂";
    }
}

export function getHolidayByYear(holiday: Holiday): Holiday {
    if (holiday === "🎂") {
        return "🎃";
    } else if (holiday === "🎃") {
        return "🦃";
    } else if (holiday === "🦃") {
        return "🎄";
    } else if (holiday === "🎄") {
        return "🎊";
    } else {
        return "🎂";
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    return (
        <div>
            <Button onClick={() => setHoliday(getHolidayByAlphabet(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(getHolidayByYear(holiday))}>
                Advance by Year
            </Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
