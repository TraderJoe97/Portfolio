"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
 const [state, handleSubmit] = useForm("xkgoldoo");

  return (
    <Card className="p-6">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
          
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
        <Button type="submit" className="w-full" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </Button>
        {state.succeeded && <p className="text-sm text-center mt-4 text-muted-foreground">Thanks for your message! I&apos;ll get back to you soon.</p>}
      </form>
    </Card>
  )
}

