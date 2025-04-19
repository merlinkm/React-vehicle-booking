import { Textarea } from "@/components/ui/textarea"

interface InputFieldProps {
    item: {
        fieldType: string;
        name: string;
        required?:boolean;
    };
    handleInputChange: (name: string, value: any) => void;
}

function TextareaField({item, handleInputChange}:InputFieldProps) {
  return (
    <div>
      <Textarea name={item?.name} onChange={(e) => handleInputChange(item.name, e.target.value)}/>
    </div>
  )
}

export default TextareaField
