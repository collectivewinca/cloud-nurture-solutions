interface ContactSubmitButtonProps {
  isSubmitting: boolean;
}

const ContactSubmitButton = ({ isSubmitting }: ContactSubmitButtonProps) => {
  return (
    <div className="mt-6">
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </div>
  );
};

export default ContactSubmitButton;