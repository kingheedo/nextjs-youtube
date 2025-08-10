'use client';

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    title: 'History',
    url: '/playlists/history',
    icon: HistoryIcon,
    auth: true
  },
  {
    title: 'Liked videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true
  },
  {
    title: 'All playlists',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true
  },

]

const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        Personal Section
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={false}
                asChild
                onClick={() => { }}
              >
                <Link href={item.url} className='flex items-center gap-4'>
                  <item.icon />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default PersonalSection