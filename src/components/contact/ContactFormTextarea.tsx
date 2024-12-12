import { Label } from "@/components/ui/label";

interface ContactFormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const ContactFormTextarea = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: ContactFormTextareaProps) => {
  return (
    <div>
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </Label>
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
};

export default ContactFormTextarea;