import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ContentSections = () => {
  const videos = [
    {
      id: 1,
      title: "Анархия в Москве - Клип",
      thumbnail: "/placeholder.svg",
      duration: "3:45",
      views: "12K",
    },
    {
      id: 2,
      title: "Концерт в Клубе",
      thumbnail: "/placeholder.svg",
      duration: "45:12",
      views: "8.5K",
    },
    {
      id: 3,
      title: "За Кулисами",
      thumbnail: "/placeholder.svg",
      duration: "12:30",
      views: "5.2K",
    },
  ];

  const photos = [
    { id: 1, src: "/placeholder.svg", alt: "Концерт 1" },
    { id: 2, src: "/placeholder.svg", alt: "Концерт 2" },
    { id: 3, src: "/placeholder.svg", alt: "Студия" },
    { id: 4, src: "/placeholder.svg", alt: "Группа" },
    { id: 5, src: "/placeholder.svg", alt: "Фестиваль" },
    { id: 6, src: "/placeholder.svg", alt: "Backstage" },
  ];

  const news = [
    {
      id: 1,
      title: 'Новый альбом "Революция" выйдет в марте!',
      date: "15 февраля 2024",
      excerpt:
        "Готовим для вас 12 взрывных треков, которые перевернут ваше представление о панк-роке...",
    },
    {
      id: 2,
      title: "Тур по России - даты и города",
      date: "8 февраля 2024",
      excerpt:
        "Объявляем большой тур по городам России! Билеты уже в продаже...",
    },
    {
      id: 3,
      title: "Интервью с группой в Rock FM",
      date: "1 февраля 2024",
      excerpt:
        "Послушайте наше интервью на Rock FM, где мы рассказываем о новых песнях...",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      {/* Video Section */}
      <section id="videos">
        <div className="mb-8">
          <h2 className="text-3xl font-punk text-primary mb-2">🎬 Видео</h2>
          <p className="text-muted-foreground">Клипы, концерты и закулисье</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="punk-border hover:punk-shadow transition-all cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                    <Icon name="Play" size={40} className="text-white" />
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <h3 className="font-punk text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {video.views} просмотров
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos">
        <div className="mb-8">
          <h2 className="text-3xl font-punk text-primary mb-2">📸 Фото</h2>
          <p className="text-muted-foreground">
            Моменты с концертов и студийных сессий
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group cursor-pointer">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover rounded-lg punk-border transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <Icon name="Expand" size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section id="news">
        <div className="mb-8">
          <h2 className="text-3xl font-punk text-primary mb-2">📰 Новости</h2>
          <p className="text-muted-foreground">Последние новости группы</p>
        </div>

        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="punk-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-punk text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{item.excerpt}</p>
                    <p className="text-sm text-accent">{item.date}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-4">
                    <Icon name="ExternalLink" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="mb-8">
          <h2 className="text-3xl font-punk text-primary mb-2">📞 Связь</h2>
          <p className="text-muted-foreground">
            Свяжитесь с нами для сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="punk-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-punk text-primary mb-4">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Send" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">Telegram</p>
                    <p className="text-sm text-muted-foreground">
                      @chehlisty_band
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@chehlisty.ru
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium">Менеджер</p>
                    <p className="text-sm text-muted-foreground">
                      +7 (999) 123-45-67
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="punk-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-punk text-primary mb-4">
                Социальные сети
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="punk-border h-12">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" className="punk-border h-12">
                  <Icon name="Youtube" size={20} className="mr-2" />
                  YouTube
                </Button>
                <Button variant="outline" className="punk-border h-12">
                  <Icon name="Music" size={20} className="mr-2" />
                  Spotify
                </Button>
                <Button variant="outline" className="punk-border h-12">
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
