import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'play'>('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b-4 border-black bg-primary p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="pixel-text text-xl sm:text-2xl text-primary-foreground">
            DELTARUNE PORTAL
          </h1>
          <div className="flex gap-2 sm:gap-4">
            <Button
              onClick={() => setActiveSection('home')}
              className={`game-button pixel-text text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 ${
                activeSection === 'home' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              HOME
            </Button>
            <Button
              onClick={() => setActiveSection('play')}
              className={`game-button pixel-text text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 ${
                activeSection === 'play' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              PLAY
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
      {activeSection === 'play' && <PlaySection />}
    </div>
  );
}

function HomeSection({ setActiveSection }: { setActiveSection: (section: 'home' | 'play') => void }) {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <h2 className="pixel-text text-3xl sm:text-5xl mb-6 text-primary">
            WELCOME TO THE DARK WORLD
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-8">
            Играй в DELTARUNE прямо в браузере без скачивания! Окунись в мир приключений Криса и его друзей в Темном мире.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => setActiveSection('play')}
              className="game-button bg-primary hover:bg-primary/90 text-primary-foreground pixel-text px-6 py-4 text-sm"
            >
              <Icon name="Gamepad2" className="mr-2" size={20} />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button className="game-button bg-secondary hover:bg-secondary/90 text-secondary-foreground pixel-text px-6 py-4 text-sm">
              <Icon name="Info" className="mr-2" size={20} />
              О ИГРЕ
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="border-4 border-black p-4 bg-card">
            <img
              src="/img/203634a1-fd36-49ed-a3e4-db6d61659f1d.jpg"
              alt="Deltarune Hero"
              className="w-full h-auto"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GameFeatureCard
          icon="Heart"
          title="SAVE POINTS"
          description="Система сохранений как в оригинале"
        />
        <GameFeatureCard
          icon="Star"
          title="NO DOWNLOAD"
          description="Играй прямо в браузере"
        />
        <GameFeatureCard
          icon="Swords"
          title="FULL GAME"
          description="Все главы доступны онлайн"
        />
        <GameFeatureCard
          icon="Users"
          title="PARTY SYSTEM"
          description="Собери команду героев"
        />
      </div>
    </div>
  );
}

function GameFeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="border-4 border-black p-6 bg-card hover:scale-105 transition-transform">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-primary rounded-none border-4 border-black">
          <Icon name={icon as any} size={32} className="text-primary-foreground" />
        </div>
        <h3 className="pixel-text text-xs text-card-foreground">{title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}

function PlaySection() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="pixel-text text-3xl sm:text-4xl mb-4 text-primary">
            PLAY DELTARUNE ONLINE
          </h2>
          <p className="text-sm sm:text-base">
            Используй стрелки ⬆️⬇️⬅️➡️ для движения, Z для подтверждения, X для отмены
          </p>
        </div>

        <div className="border-8 border-black bg-card p-4 sm:p-8">
          <div className="aspect-video bg-muted flex items-center justify-center border-4 border-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
            <div className="z-10 text-center px-4">
              <Icon name="Gamepad2" size={64} className="mx-auto mb-4 text-primary" />
              <p className="pixel-text text-xs sm:text-sm mb-6">GAME LOADING...</p>
              <div className="w-full max-w-md mx-auto bg-background border-4 border-black h-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse w-3/4"></div>
              </div>
              <p className="text-xs mt-6 text-muted-foreground">
                * Эмулятор игры будет загружен здесь
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="border-4 border-black p-4 bg-background">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Heart" size={24} className="text-accent" />
                <span className="pixel-text text-xs">HP: 20/20</span>
              </div>
              <div className="w-full bg-muted border-2 border-black h-4">
                <div className="h-full bg-accent" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="border-4 border-black p-4 bg-background">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Zap" size={24} className="text-secondary" />
                <span className="pixel-text text-xs">MP: 15/15</span>
              </div>
              <div className="w-full bg-muted border-2 border-black h-4">
                <div className="h-full bg-secondary" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="border-4 border-black p-4 bg-background flex items-center justify-center">
              <Icon name="Star" size={24} className="text-secondary mr-2" />
              <span className="pixel-text text-xs">LV 1</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button className="game-button bg-primary hover:bg-primary/90 pixel-text text-xs px-4 py-2">
              <Icon name="RotateCcw" size={16} className="mr-2" />
              RESTART
            </Button>
            <Button className="game-button bg-secondary hover:bg-secondary/90 text-secondary-foreground pixel-text text-xs px-4 py-2">
              <Icon name="Save" size={16} className="mr-2" />
              SAVE
            </Button>
            <Button className="game-button bg-muted hover:bg-muted/90 pixel-text text-xs px-4 py-2">
              <Icon name="Settings" size={16} className="mr-2" />
              OPTIONS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}