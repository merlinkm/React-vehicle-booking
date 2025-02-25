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
}

function DropdownField({ item }: InputFieldProps) {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={item.label} />
                </SelectTrigger>
                <SelectContent>
                    {item?.options?.map((option, index) => (
                        <SelectItem value={option}>{option}</SelectItem>

                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

export default DropdownField
