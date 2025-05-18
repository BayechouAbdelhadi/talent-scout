"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  CalendarRange,
  Eye,
  FileVideo,
  MessageSquare,
  Star,
  UserCheck,
  Video,
  Medal,
  Upload
} from "lucide-react";

// Mock data
const stats = [
  { title: 'Profile Views', value: '2,845', icon: Eye, change: '+12.5%', changeType: 'positive' },
  { title: 'Video Views', value: '10,293', icon: Video, change: '+18.2%', changeType: 'positive' },
  { title: 'Endorsements', value: '48', icon: UserCheck, change: '+4.0%', changeType: 'positive' },
  { title: 'Scout Interest', value: '8', icon: Star, change: 'New', changeType: 'positive' },
];

const recentVideos = [
  {
    id: '1',
    title: 'Best Goals Compilation',
    views: 324,
    likes: 86,
    thumbnail: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    uploadedAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Passing Skills Showcase',
    views: 182,
    likes: 43,
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
    uploadedAt: '1 week ago',
  },
  {
    id: '3',
    title: 'Dribbling Masterclass',
    views: 241,
    likes: 58,
    thumbnail: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg',
    uploadedAt: '2 weeks ago',
  },
];

const messages = [
  {
    id: '1',
    sender: 'Alex Thompson',
    role: 'Scout at Manchester City',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    message: 'Impressed with your dribbling skills! Would love to discuss opportunities.',
    time: '3 hours ago',
    unread: true,
  },
  {
    id: '2',
    sender: 'Sarah Williams',
    role: 'Scout at Arsenal FC',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    message: 'Thanks for your response. Looking forward to seeing more of your gameplay videos.',
    time: '1 day ago',
    unread: false,
  },
  {
    id: '3',
    sender: 'James Wilson',
    role: 'Coach at Liverpool Academy',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    message: 'Your technical abilities are impressive. Would you be available for a trial next month?',
    time: '3 days ago',
    unread: false,
  },
];

const upcomingEvents = [
  {
    id: '1',
    title: 'Online Skill Challenge: Free Kicks',
    date: 'Jun 15, 2025',
    type: 'competition',
    description: 'Show off your free kick abilities and get rated by professional coaches.',
  },
  {
    id: '2',
    title: 'Trial with Manchester United',
    date: 'Jun 22, 2025',
    type: 'trial',
    description: 'You\'ve been invited for a trial session at Manchester United\'s academy.',
  },
  {
    id: '3',
    title: 'Webinar: How to Impress Scouts',
    date: 'Jun 30, 2025',
    type: 'webinar',
    description: 'Learn from professional scouts what they look for in young talent.',
  },
];

export default function Dashboard() {
  const { data: session } = useSession();
  const [userRole] = useState<'player' | 'scout'>('player');
  const t = useTranslations('dashboard');

  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
          <p className="text-muted-foreground">
            {session?.user?.name ? t('welcome', { name: session.user.name }) : t('welcomeNoName')} {t('profileStatus')}
          </p>
        </div>
        {userRole === 'player' && (
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <Button className="flex items-center gap-2">
              <Upload className="h-4 w-4" /> {t('uploadVideo')}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" /> {t('requestEndorsement')}
            </Button>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium">{t(`stats.${stat.title.toLowerCase().replace(' ', '')}`)}</p>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline space-x-3">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className={`text-xs ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="videos" className="mt-6">
        <TabsList>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <FileVideo className="h-4 w-4" /> {t('tabs.videos')}
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> {t('tabs.messages')}
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4" /> {t('tabs.upcoming')}
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" /> {t('tabs.stats')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{t('sections.yourVideos')}</h2>
            <Link href="/videos">
              <Button variant="ghost">{t('sections.viewAll')}</Button>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Video className="h-4 w-4" /> Play
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate">{video.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" /> {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {video.likes}
                    </span>
                    <span>{video.uploadedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{t('sections.recentMessages')}</h2>
            <Link href="/messages">
              <Button variant="ghost">{t('sections.viewAll')}</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className={message.unread ? "border-primary/50" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-10 w-10 flex-shrink-0">
                      <Image
                        src={message.avatar}
                        alt={message.sender}
                        fill
                        className="rounded-full object-cover"
                      />
                      {message.unread && (
                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{message.sender}</h3>
                          <p className="text-xs text-muted-foreground">{message.role}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm line-clamp-2">{message.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{t('sections.upcomingEvents')}</h2>
            <Link href="/events">
              <Button variant="ghost">{t('sections.viewAll')}</Button>
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-muted flex items-center justify-center">
                      {event.type === 'competition' && <Medal className="h-5 w-5 text-orange-500" />}
                      {event.type === 'trial' && <Star className="h-5 w-5 text-primary" />}
                      {event.type === 'webinar' && <Video className="h-5 w-5 text-blue-500" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{event.title}</h3>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">{event.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>{t('sections.analytics.title')}</CardTitle>
              <CardDescription>
                {t('sections.analytics.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center space-y-2">
                  <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                  <h3 className="font-medium">{t('sections.analytics.title')}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {t('sections.analytics.details')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}