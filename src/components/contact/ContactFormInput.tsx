import { Label } from "@/components/ui/label";

interface ContactFormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const ContactFormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}: ContactFormInputProps) => {
  return (
    <div>
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </Label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};

export default ContactFormInput;