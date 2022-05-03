import React from "react";
import Select from "react-select";
import './multiselect.scss'

const options = [
    {value: 'html', label: 'HTML'},
    {value: 'css', label: 'CSS'},
    {value: 'javascript', label: 'JavaScript'}
]

interface Props {
    onChange: (inputName: string, inputValue: any) => void
    value: any
}

export const Multiselect: React.FC<Props> = ({
                                           onChange,
                                           value,
                                       }) => {


    return (
        <div className={'multiselect'}>
            <label htmlFor="skills">Professional Skills</label>
            <Select isMulti
                    options={options}
                    className={"multiselect__container"}
                    classNamePrefix={"multiselect"}
                    value={value}
                    onChange={(e) => onChange('skills', e)}/>

        </div>
    );
};
