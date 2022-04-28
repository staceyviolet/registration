import React from "react";
import Select from "react-select";
import './multiselect.scss'

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
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
            <label htmlFor="skills">Skills</label>
            <Select isMulti
                    options={options}
                    className={"multiselect__container"}
                    classNamePrefix={"multiselect"}
                    value={value}
                    onChange={(e) => onChange('skills', e)}/>

        </div>
    );
};
