import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string;
  downloadUrl: string;
}

// ИНСТРУКЦИЯ: Чтобы добавить свои песни:
// 1. Поместите MP3 файлы в папку public/audio/
// 2. Обновите этот массив с вашими данными
// 3. Укажите правильные пути к файлам в audioUrl и downloadUrl

const mockTracks: Track[] = [
  {
    id: 1,
    title: "Анархия в Москве",
    artist: "Чехлисты",
    album: "Первый Альбом",
    duration: "3:45",
    audioUrl: "/audio/anarchia-v-moskve.mp3", // Замените на путь к вашему файлу
    downloadUrl: "/audio/anarchia-v-moskve.mp3",
  },
  {
    id: 2,
    title: "Бунт на Улицах",
    artist: "Чехлисты",
    album: "Первый Альбом",
    duration: "4:12",
    audioUrl: "/audio/bunt-na-ulitsah.mp3", // Замените на путь к вашему файлу
    downloadUrl: "/audio/bunt-na-ulitsah.mp3",
  },
  {
    id: 3,
    title: "Свобода или Смерть",
    artist: "Чехлисты",
    album: "Первый Альбом",
    duration: "2:58",
    audioUrl: "/audio/svoboda-ili-smert.mp3", // Замените на путь к вашему файлу
    downloadUrl: "/audio/svoboda-ili-smert.mp3",
  },
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(mockTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(false);
  };

  const downloadTrack = (track: Track) => {
    if (track.downloadUrl) {
      // Создаем ссылку для скачивания
      const link = document.createElement("a");
      link.href = track.downloadUrl;
      link.download = `${track.artist} - ${track.title}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log(`Файл для скачивания не найден: ${track.title}`);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-punk text-primary mb-2">🎵 Музыка</h2>
        <p className="text-muted-foreground">Слушай и качай наши треки</p>
      </div>

      {/* Current Track Player */}
      {currentTrack && (
        <Card className="mb-6 punk-border punk-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-punk text-primary">
                  {currentTrack.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentTrack.artist} • {currentTrack.album}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                {formatTime(currentTime)} / {currentTrack.duration}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  /* Previous track */
                }}
                className="punk-border"
              >
                <Icon name="SkipBack" size={20} />
              </Button>

              <Button
                onClick={playPauseHandler}
                size="icon"
                className="w-12 h-12 bg-primary hover:bg-primary/90 punk-shadow"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  /* Next track */
                }}
                className="punk-border"
              >
                <Icon name="SkipForward" size={20} />
              </Button>

              <div className="flex items-center gap-2 ml-auto">
                <Icon name="Volume2" size={18} />
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                  className="w-20"
                />
              </div>
            </div>

            <Slider
              value={[currentTime]}
              onValueChange={(value) => setCurrentTime(value[0])}
              max={duration || 100}
              step={1}
              className="w-full"
            />
          </CardContent>
        </Card>
      )}

      {/* Track List */}
      <Card className="punk-border">
        <CardContent className="p-6">
          <h3 className="text-xl font-punk text-primary mb-4">Треки</h3>
          <div className="space-y-2">
            {mockTracks.map((track) => (
              <div
                key={track.id}
                className={`flex items-center justify-between p-3 rounded-lg border transition-all hover:bg-secondary/50 cursor-pointer ${
                  currentTrack?.id === track.id
                    ? "bg-secondary border-primary"
                    : "border-border"
                }`}
                onClick={() => selectTrack(track)}
              >
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectTrack(track);
                      playPauseHandler();
                    }}
                    className="w-8 h-8"
                  >
                    <Icon
                      name={
                        currentTrack?.id === track.id && isPlaying
                          ? "Pause"
                          : "Play"
                      }
                      size={16}
                    />
                  </Button>
                  <div>
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {track.duration}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadTrack(track);
                    }}
                    className="w-8 h-8"
                  >
                    <Icon name="Download" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicPlayer;
