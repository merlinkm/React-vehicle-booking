import { Textarea } from "@/components/ui/textarea"

interface InputFieldProps {
    item: {
        fieldType: string;
        name: string;
        required?:boolean;
    };
}

function TextareaField({item}:InputFieldProps) {
  return (
    <div>
      <Textarea name={item?.name} />
    </div>
  )
}

export default TextareaField
