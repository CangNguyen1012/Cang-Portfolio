"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 936 408 410",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bacangnguyen1012@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Quan 7, Ho Chi Minh City, Vietnam",
  },
];

import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle service selection change
  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await emailjs.send(
        "service_gjde6fg", // Replace with your EmailJS Service ID
        "template_gtfz13p", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "w7qlA9pt5IJwLZFSb" // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Contact me if you need my help!
              </h3>
              <p className="text-white/60">
                We can have a conversation and work together.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Phone number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Select Service */}
              <Select
                onValueChange={handleServiceChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="backend">Back-end Development</SelectItem>
                  <SelectItem value="frontend">
                    Front-end Development
                  </SelectItem>
                  <SelectItem value="fullstack">
                    Fullstack Development
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Message Input */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {/* Success/Error Messages */}
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md bg-[#27272c] text-accent flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
