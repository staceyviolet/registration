import React, {ChangeEvent, useEffect, useState} from "react";
import {TextInput} from "./TextInput";
import {SingleSelect} from "./SingleSelect";
import './inputGroup.scss'

interface Month {
    key: string;
    value: string;
}

const months: Month[] = [
    {key: "01", value: "January"},
    {key: "02", value: "February"},
    {key: "03", value: "March"},
    {key: "04", value: "April"},
    {key: "05", value: "May"},
    {key: "06", value: "June"},
    {key: "07", value: "July"},
    {key: "08", value: "August"},
    {key: "09", value: "September"},
    {key: "10", value: "October"},
    {key: "11", value: "November"},
    {key: "12", value: "December"},
];

const year = new Date().getFullYear() - 40;

interface Props {
    itemName: string
    values: any
    onChange: (name: any, value: any) => void,
    showTopButtons: boolean
    onRemove: (e: any) => any
}

export const InputGroup: React.FC<Props> = ({
                                                itemName,
                                                values,
                                                onChange,
                                                showTopButtons,
                                                onRemove,
                                            }) => {
    return (
        <div className={"input-group"}>
            {showTopButtons &&
                <button onClick={onRemove}>
                    <i className={"fa fa-trash"}/>
                </button>
            }
            <div className={"input-group__row"}>
                <TextInput name={"title"}
                           label={itemName + " Title"}
                           placeholder={itemName + " Title"}
                           onChange={(name, value) => onChange(name, value)}
                           value={values.title}/>
                <TextInput name={"name"}
                           label={itemName + " Name"}
                           placeholder={itemName + " Name"}
                           onChange={(name, value) => onChange(name, value)}
                           value={values.name}/>
            </div>
            <div className={"input-group__row"}>
                <SingleSelect name={"startYear"}
                              label={"Year"}
                              placeholder={"Select year"}
                              onChange={(name, value) => onChange(name, value)}
                              value={values.startYear}
                              options={Array.from(new Array(40), (v, i) => {
                                  return {"key": year + i + 1, "value": year + i + 1}
                              })}/>
                <SingleSelect name={"startMonth"}
                              label={"Month"}
                              placeholder={"Select month"}
                              onChange={(name, value) => onChange(name, value)}
                              value={values.startMonth}
                              options={months}/>
            </div>
            <div className={"input-group__row"}>
                <SingleSelect name={"endYear"}
                              label={"Year"}
                              placeholder={"Select year"}
                              onChange={(name, value) => onChange(name, value)}
                              value={values.endYear}
                              options={Array.from(new Array(40), (v, i) => {
                                  return {"key": year + i + 1, "value": year + i + 1}
                              })}/>
                <SingleSelect name={"endMonth"}
                              label={"Month"}
                              placeholder={"Select month"}
                              onChange={(name, value) => onChange(name, value)}
                              value={values.endMonth}
                              options={months}/>
            </div>
        </div>
    );
};
