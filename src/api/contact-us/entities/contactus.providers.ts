import { ContactUs } from './contact-us.entity';

export const ContactUsProviders = [
  {
    provide: "CONTACT_US",
    useValue: ContactUs,
  }
]