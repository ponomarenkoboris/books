import { FC } from 'react'
import './Select.scss'
interface SelectProps {
    className: string;
    labelText?: string;
    options: Array<{ id: number, value: string }>;
    name: string;
}
export const Select: FC<SelectProps> = ({ options, labelText = '', className, name }) => {
    return (
        <label className={className}>
            {labelText}
            <select name={name} defaultValue={options[0].value}>
                {options.map(({ id, value }) => <option key={id}>{value}</option>)}
            </select>
        </label>
    )
}