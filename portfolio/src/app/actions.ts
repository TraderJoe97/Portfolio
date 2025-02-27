"use server"
import { useForm } from '@formspree/react';
export async function submitContactForm(formData: FormData) {
  const [state, handleSubmit] = useForm("xkgoldoo");


  handleSubmit(formData);

  if (state.succeeded) return {
    message: "Thanks for your message! I'll get back to you soon.",
  }
}

