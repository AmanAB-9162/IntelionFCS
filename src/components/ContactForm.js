import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add API call to submit the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          {...register('name', { required: true })}
          placeholder="Your Name"
          className="w-full p-2 rounded"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>
      <div className="mb-4">
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Your Email"
          className="w-full p-2 rounded"
        />
        {errors.email && <span className="text-red-500">Valid email is required</span>}
      </div>
      <div className="mb-4">
        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
          className="w-full p-2 rounded"
        />
        {errors.message && <span className="text-red-500">Message is required</span>}
      </div>
      <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;