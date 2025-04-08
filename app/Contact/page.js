// components/Form.js
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="space-y-4">
      <Input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg shadow-md" />
      <Input type="email" placeholder="Your Email" className="w-full p-4 border rounded-lg shadow-md" />
      <Textarea placeholder="Your Message" className="w-full p-4 border rounded-lg shadow-md h-40" />
      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-lg shadow-lg">Send Message</Button>
    </div>
  );
}

// components/ContactInfo.js
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="mt-8 text-center text-white">
      <div className="flex flex-wrap items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <Mail className="w-6 h-6 text-white" />
          <span>contact@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-6 h-6 text-white" />
          <span>+1 234 567 890</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-white" />
          <span>123 Street, City, Country</span>
        </div>
      </div>
    </div>
  );
}

// components/LocationMap.js
export function LocationMap() {
  return (
    <div className="mt-12 bg-white p-6 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Our Location</h3>
      <iframe
        className="w-full h-64 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094745!2d144.95592831531688!3d-37.81720917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4cba5cfc1c4b49a!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1638217580714!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

// pages/ContactPage.js
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/Form";
import { ContactInfo } from "@/components/ContactInfo";
import { LocationMap } from "@/components/LocationMap";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <Card className="shadow-2xl rounded-3xl bg-white p-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-6">
            We'd love to hear from you! Fill out the form below or reach out through our contact details.
          </p>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        <ContactInfo />
        <LocationMap />
      </motion.div>
    </div>
  );
}
