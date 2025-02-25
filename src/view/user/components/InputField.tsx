import { Input } from "@/components/ui/input"

interface InputFieldProps {
    item: {
        fieldType: string;
        name: string;
        required?:boolean;
    };
}

function InputField({ item }: InputFieldProps) {
    return (
        <div>
            <Input type={item?.fieldType} name={item?.name} required={item?.required} />
        </div>
    )
}

export default InputField
