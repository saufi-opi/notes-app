import { NavFooter } from '@/components/nav-footer'
import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { type NavItem } from '@/types'
import { Link } from '@inertiajs/react'
import { Notebook, Tag, Trash } from 'lucide-react'
import AppLogo from './app-logo'

const mainNavItems: NavItem[] = [
    {
        title: 'Notes',
        url: '/notes',
        icon: Notebook
    },
    {
        title: 'Tags',
        url: '/tags',
        icon: Tag
    }
]

const footerNavItems: NavItem[] = [
    {
        title: 'Trash',
        url: '/trash',
        icon: Trash
    }
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/notes" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    )
}
