import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import ContactFormFields from "./ContactFormFields";
import ContactSubmitButton from "./ContactSubmitButton";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  best_time_to_call: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    best_time_to_call: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started", formData);
    setIsSubmitting(true);

    try {
      // Insert into contact_requests table
      const { error: dbError } = await supabase
        .from("contact_requests")
        .insert([formData]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      console.log("Database insert successful");

      // Send thank you email
      const { error: emailError } = await supabase.functions.invoke('send-thank-you-email', {
        body: {
          type: 'contact',
          name: formData.name,
          email: formData.email,
          business_name: formData.business_name
        }
      });

      if (emailError) {
        console.error("Email sending error:", emailError);
        throw emailError;
      }

      console.log("Email sent successfully");

      toast({
        title: "Success!",
        description: "Your message has been sent. Check your email for confirmation.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        best_time_to_call: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl animate-fade-in-up">
      <ContactFormFields formData={formData} onChange={handleChange} />
      <ContactSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;