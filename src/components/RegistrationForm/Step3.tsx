import React from "react";
import {InputGroup} from "./InputGroup";
import './inputGroup.scss'


interface Props {
    onChange: (inputName: string, inputValue: any) => void
    inputValues: any
}

export const Step3: React.FC<Props> = ({
                                           onChange,
                                           inputValues,
                                       }) => {

    const handleChange = (id: number, name: any, value: any, inputName: string) => {
        const newValues = inputValues[inputName];
        (newValues.find((el: any) => el.id === id))[name] = value
        onChange(inputName, newValues)
    }

    const addItem = (e: any, name: string) => {
        e.preventDefault()
        const lastId = inputValues[name][inputValues[name].length - 1].id
        onChange(name, [...inputValues[name],
            {
                id: lastId + 1,
                title: "",
                name: "",
                startYear: "",
                startMonth: "",
                endYear: "",
                endMonth: "",
            }
        ])
    }

    const removeItem = (e: any, itemId: any, name: string) => {
        e.preventDefault()
        const newValues = inputValues[name].filter((item: any) => item.id !== itemId)
        onChange(name, newValues)
    }

    return (
        <div>
            <div className={"input-group__wrapper"}>
                <h5>Education</h5>
                {inputValues.userEducation.map((item: any) => {
                    return <InputGroup key={item.id}
                                       title={"Degree"}
                                       name={"Institution"}
                                       values={item}
                                       onChange={(name: any, value: any) => handleChange(item.id, name, value, "userEducation")}
                                       showTopButtons={inputValues.userEducation.length > 1}
                                       onRemove={(e) => removeItem(e, item.id, "userEducation")}
                    />
                })
                }
                <div className={"add-button"}>
                    <button onClick={(e) => addItem(e, "userEducation")}>
                        <i className={"fa fa-plus-circle"}/> Add
                    </button>
                </div>
            </div>

            <div className={"input-group__wrapper"}>
                <h5>Work Experience</h5>
                {inputValues.userJobs.map((item: any) => {
                    return <InputGroup key={item.id}
                                       title={"Job Title"}
                                       name={"Company"}
                                       values={item}
                                       onChange={(name: any, value: any) => handleChange(item.id, name, value, "userJobs")}
                                       showTopButtons={inputValues.userJobs.length > 1}
                                       onRemove={(e) => removeItem(e, item.id, "userJobs")}
                    />
                })
                }
                <div className={"add-button"}>
                    <button onClick={(e) => addItem(e, "userJobs")}>
                        <i className={"fa fa-plus-circle"}/> Add
                    </button>
                </div>
            </div>
        </div>
    );
};
