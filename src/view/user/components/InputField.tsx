import { Input } from "@/components/ui/input"

interface InputFieldProps {
    item: {
        fieldType: string;
        name: string;
        required?: boolean;
    };
    handleInputChange: (name: string, value: any) => void;
}

function InputField({ item, handleInputChange }: InputFieldProps) {
    return (
        <div>
            <Input type={item?.fieldType} name={item?.name} required={item?.required}
                onChange={(e) => handleInputChange(item.name, e.target.value)}
            />
        </div>
    )
}

export default InputField
