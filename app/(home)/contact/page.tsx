/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9VtQi8MwdJ9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ClassNameValue } from "tailwind-merge"

export default function ContactPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 md:px-6 py-32 md:py-32 bg-zinc-950 text-white">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Have a question or want to work together? Fill out the form below and we&apos;ll get back to you as soon as
            possible or email <a href="mailto:matan@skymarksystems.com" className="text-blue-400">matan@skymarksystems.com</a>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-gray-400" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="bg-zinc-900 text-white border-zinc-800 focus:border-primary focus:ring-primary"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-400" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="bg-zinc-900 text-white border-zinc-800 focus:border-primary focus:ring-primary"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="min-h-[120px] bg-zinc-900 text-white border-zinc-800 focus:border-primary focus:ring-primary"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-gray-400" htmlFor="file">
                  Attachment (optional)
                </Label>
                <Input
                  className="bg-zinc-900 text-white border-zinc-800 focus:border-primary focus:ring-primary"
                  id="file"
                  type="file"
                />
              </div>
                <Button className='flex w-full' >
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-400">San Luis Obispo, USA</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-400">+1 (650) 741-8444</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex items-center gap-4">
                <Link className="text-gray-400 hover:text-white" href="#">
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link className="text-gray-400 hover:text-white" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MapPinIcon(props: any ) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}