"use client"

import * as React from "react"
import {
  AppWindow,
  Compass,
  FilePenLine,
  FileText,
  Globe,
  Image,
  Languages,
  LifeBuoy,
  MessageSquare,
  PhoneCall,
  Quote,
  Radar,
  Repeat2,
  ShieldCheck,
  Smile,
  Sparkles,
  SpellCheck,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar"

const navItems = [
  {
    title: "Paraphraser",
    url: "/",
    icon: Repeat2,
    iconBg: "#E0F2FE",
    iconColor: "#0369A1",
  },
  {
    title: "Grammar Checker",
    url: "#grammar-checker",
    icon: SpellCheck,
    iconBg: "#F3E8FF",
    iconColor: "#7C3AED",
  },
  {
    title: "AI Detector",
    url: "#ai-detector",
    icon: Radar,
    iconBg: "#FEF3C7",
    iconColor: "#B45309",
  },
  {
    title: "Plagiarism Checker",
    url: "#plagiarism-checker",
    icon: ShieldCheck,
    iconBg: "#CCFBF1",
    iconColor: "#0F766E",
  },
  {
    title: "AI Humanizer",
    url: "/ai-humanizer",
    icon: Smile,
    iconBg: "#FFE4E6",
    iconColor: "#BE123C",
  },
  {
    title: "AI Chat",
    url: "#ai-chat",
    icon: MessageSquare,
    iconBg: "#ECFDF5",
    iconColor: "#047857",
  },
  {
    title: "AI Image Generator",
    url: "#ai-image-generator",
    icon: Image,
    iconBg: "#FFF1F2",
    iconColor: "#DB2777",
  },
  {
    title: "Translate",
    url: "#translate",
    icon: Languages,
    iconBg: "#E0E7FF",
    iconColor: "#4338CA",
  },
  {
    title: "Summarizer",
    url: "#summarizer",
    icon: FileText,
    iconBg: "#E2E8F0",
    iconColor: "#1E293B",
  },
  {
    title: "Citation Generator",
    url: "#citation-generator",
    icon: Quote,
    iconBg: "#ECFCCB",
    iconColor: "#4D7C0F",
  },
  {
    title: "QuillBot Premium",
    url: "#quillbot-premium",
    icon: Sparkles,
    iconBg: "#CFFAFE",
    iconColor: "#0E7490",
  },
  {
    title: "QuillBot for Chrome",
    url: "#quillbot-chrome",
    icon: Globe,
    iconBg: "#FFEDD5",
    iconColor: "#C2410C",
  },
  {
    title: "QuillBot for Word",
    url: "#quillbot-word",
    icon: FilePenLine,
    iconBg: "#EDE9FE",
    iconColor: "#5B21B6",
  },
  {
    title: "QuillBot for Windows",
    url: "#quillbot-windows",
    icon: AppWindow,
    iconBg: "#FAE8FF",
    iconColor: "#A21CAF",
  },
  {
    title: "QuillBot for Safari",
    url: "#quillbot-safari",
    icon: Compass,
    iconBg: "#F4F4F5",
    iconColor: "#3F3F46",
  },
  {
    title: "Help Center",
    url: "#help-center",
    icon: LifeBuoy,
    iconBg: "#FEF9C3",
    iconColor: "#A16207",
  },
  {
    title: "Contact us",
    url: "#contact",
    icon: PhoneCall,
    iconBg: "#FDEAD7",
    iconColor: "#92400E",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
