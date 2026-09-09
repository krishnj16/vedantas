import { sanityClient } from './client';

export interface ScheduleItem {
  days?: string[];
  startTime?: string;
  endTime?: string;
  title?: string;
  time?: string;
  description?: string;
  accent?: 'blue' | 'orange';
}

export interface GalleryImage {
  label: string;
  alt?: string;
  imageUrl?: string;
  height?: string;
}

export interface HomePage {
  announcement?: string;
  weeklyThought?: string;
  contactEmail?: string;
  schedule?: ScheduleItem[];
  gallery?: GalleryImage[];
  quote?: { text?: string; attribution?: string };
}

export interface PastEvent {
  id: string;
  date: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  quote: string;
  description: string;
  color: string;
  textColor: string;
  imageAlt: string;
  imageUrl?: string;
}

export interface SiteSettings {
  phone?: string;
  email?: string;
}

export interface HistoryPage { intro?: string; milestones?: { date?: string; label?: string; title: string; description: string }[] }
export interface MembersPage { quote?: string; quoteAttribution?: string; membershipTitle?: string; membershipContent?: string[]; volunteerTitle?: string; volunteerContent?: string[]; contactEmail?: string }
export interface FAQ { id: string; question: string; answer: string }
export interface SpiritualProgram { id: string; title: string; category: string; description: string; startDateTime?: string; endDateTime?: string; recurrence?: string; imageUrl?: string; imageAlt?: string }
export interface Book { id: string; title: string; author?: string; category?: string; available?: boolean; coverUrl?: string; coverAlt?: string }
export interface ContactPage { address?: string; email?: string; phone?: string; overseasPhone?: string; directions?: string[]; mapEmbedUrl?: string; mapImageUrl?: string; mapImageAlt?: string }
export interface DonationPage { heroImages?: GalleryImage[] }

export async function getHomePage(): Promise<HomePage | null> {
  if (!sanityClient) return null;

  return sanityClient.fetch(`*[_type == "homePage"][0]{
    announcement,
    weeklyThought,
    contactEmail,
    schedule[]{days, startTime, endTime, title, description, accent},
    gallery[]{label, alt, "imageUrl": image.asset->url}
    , quote{ text, attribution }
  }`);
}

export async function getEvents(): Promise<PastEvent[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(`*[_type == "event"] | order(date desc){
    "id": _id,
    "date": date,
    description,
    "imageUrl": image.asset->url,
    imageAlt
  }`);
}

export async function getTeachers(): Promise<Teacher[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(`*[_type == "teacher"] | order(orderRank asc){
    "id": _id,
    name,
    title,
    quote,
    description,
    color,
    textColor,
    imageAlt,
    "imageUrl": image.asset->url
  }`);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!sanityClient) return null;

  return sanityClient.fetch(`*[_type == "siteSettings"][0]{phone, email}`);
}

export async function getHistoryPage(): Promise<HistoryPage | null> {
  return sanityClient ? sanityClient.fetch(`*[_type == "historyPage"][0]{intro, milestones[]{date, label, title, description}}`) : null;
}

export async function getMembersPage(): Promise<MembersPage | null> {
  return sanityClient ? sanityClient.fetch(`*[_type == "membersPage"][0]{quote, quoteAttribution, membershipTitle, membershipContent, volunteerTitle, volunteerContent, contactEmail}`) : null;
}

export async function getFAQs(): Promise<FAQ[]> {
  return sanityClient ? sanityClient.fetch(`*[_type == "faq"] | order(orderRank asc){"id": _id, question, answer}`) : [];
}

export async function getSpiritualPrograms(): Promise<SpiritualProgram[]> {
  return sanityClient ? sanityClient.fetch(`*[_type == "spiritualProgram"] | order(orderRank asc){"id": _id, title, category, description, startDateTime, endDateTime, recurrence, "imageUrl": image.asset->url, imageAlt}`) : [];
}

export async function getBooks(): Promise<Book[]> {
  return sanityClient ? sanityClient.fetch(`*[_type == "book"] | order(orderRank asc){"id": _id, title, author, category, available, "coverUrl": cover.asset->url, coverAlt}`) : [];
}

export async function getContactPage(): Promise<ContactPage | null> {
  return sanityClient ? sanityClient.fetch(`*[_type == "contactPage"][0]{address, email, phone, overseasPhone, directions, mapEmbedUrl, "mapImageUrl": mapImage.asset->url, mapImageAlt}`) : null;
}

export async function getDonationPage(): Promise<DonationPage | null> {
  return sanityClient ? sanityClient.fetch(`*[_type == "donationPage"][0]{heroImages[]{alt, "imageUrl": image.asset->url}}`) : null;
}
