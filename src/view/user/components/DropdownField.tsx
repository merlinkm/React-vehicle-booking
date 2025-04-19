import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface InputFieldProps {
    item: {
        fieldType: string;
        name: string;
        label: string;
        required?: boolean;
        options?: string[];
    };
    handleInputChange: (name: string, value: any) => void;
}

function DropdownField({ item,handleInputChange }: InputFieldProps) {
    return (
        <div>
            <Select onValueChange={(value) => handleInputChange(item.name, value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={item.label} />
                </SelectTrigger>
                <SelectContent>
                    {item?.options?.map((option, index) => (
                        <SelectItem key={index} value={option}>{option}</SelectItem>

                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default DropdownField
