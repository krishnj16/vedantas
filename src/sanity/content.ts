import { sanityClient } from './client';

export interface ScheduleItem {
  time: string;
  description: string;
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
}

export interface PastEvent {
  id: string;
  date: string;
  description: string;
  link: string;
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
}

export async function getHomePage(): Promise<HomePage | null> {
  if (!sanityClient) return null;

  return sanityClient.fetch(`*[_type == "homePage"][0]{
    announcement,
    weeklyThought,
    contactEmail,
    schedule[]{time, description, accent},
    gallery[]{label, alt, "imageUrl": image.asset->url}
  }`);
}

export async function getEvents(): Promise<PastEvent[]> {
  if (!sanityClient) return [];

  return sanityClient.fetch(`*[_type == "event"] | order(date desc){
    "id": _id,
    "date": date,
    description,
    "link": coalesce(link, "#")
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

  return sanityClient.fetch(`*[_type == "siteSettings"][0]{phone}`);
}
