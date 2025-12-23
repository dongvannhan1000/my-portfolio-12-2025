import { Mail, Phone, MapPin } from "lucide-react"
import { client, contactInfoQuery, type ContactInfo } from "@/lib/sanity"
import { ContactForm } from "./contact-form"

// Default fallback data
const defaultContactInfo: ContactInfo = {
  email: "hello@example.com",
  phone: "+1 (234) 567-890",
  location: "San Francisco, CA",
  contactTitle: "Let's Work Together",
  contactDescription: "Have a project in mind or want to discuss opportunities? Feel free to reach out!",
}

async function getContactInfo(): Promise<ContactInfo> {
  try {
    const data = await client.fetch<ContactInfo>(contactInfoQuery)
    return data || defaultContactInfo
  } catch (error) {
    console.error("Error fetching contact info:", error)
    return defaultContactInfo
  }
}

export async function ContactSection() {
  const contactInfo = await getContactInfo()
  const { email, phone, location, contactTitle, contactDescription } = { ...defaultContactInfo, ...contactInfo }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="mt-3 text-text-balance">{contactTitle}</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {contactDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {/* Email */}
            <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
              <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href={`mailto:${email}`} className="text-foreground/70 hover:text-accent transition-colors">
                  {email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {phone && (
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
                <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-foreground/70 hover:text-accent transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
            )}

            {/* Location */}
            {location && (
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
                <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-foreground/70">{location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
