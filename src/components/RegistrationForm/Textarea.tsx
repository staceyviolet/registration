import React, {useState} from "react";
import './textInput.scss'

interface Props {
    name: string,
    label: string,
    placeholder: string,
    onChange: (inputName: string, inputValue: any) => void
    value: string
}

export const Textarea: React.FC<Props> = ({
                                                 name,
                                                 label,
                                                 placeholder,
                                                 onChange,
                                                 value
                                             }) => {

    const [rows, setRows] = useState(4);
    const [minRows] = useState(4);
    const [maxRows] = useState(9);

    const handleTextareaChange = (event: any) => {
        const textareaLineHeight = 17;

        const previousRows = event.target.rows;
        event.target.rows = minRows;

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight) - 4;

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        setRows(currentRows);
        onChange(event.target.name, event.target.value);
    };

    return (
        <div className={'text-input'}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name}
                      value={value}
                      placeholder={placeholder}
                      rows={rows}
                      onChange={handleTextareaChange}/>
        </div>
    );

};
