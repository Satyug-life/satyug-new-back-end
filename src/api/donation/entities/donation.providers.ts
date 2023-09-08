import { Donation } from './donation.entity';

export const DonationProviders = [
  {
    provide: "DONATION",
    useValue: Donation,
  }
]