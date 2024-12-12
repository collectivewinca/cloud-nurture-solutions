import { FormData } from "./ContactForm";
import ContactFormInput from "./ContactFormInput";
import ContactFormTextarea from "./ContactFormTextarea";

interface ContactFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactFormFields = ({ formData, onChange }: ContactFormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContactFormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={onChange}
        required
      />
      <ContactFormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        required
      />
      <ContactFormInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onChange}
        required
      />
      <ContactFormInput
        label="Business Name"
        name="business_name"
        value={formData.business_name}
        onChange={onChange}
        required
      />
      <ContactFormInput
        label="Best Time to Call"
        name="best_time_to_call"
        value={formData.best_time_to_call}
        onChange={onChange}
        placeholder="e.g., Weekdays 9AM-5PM"
        required
      />
      <div className="md:col-span-2">
        <ContactFormTextarea
          label="Your Requirements"
          name="message"
          value={formData.message}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ContactFormFields;