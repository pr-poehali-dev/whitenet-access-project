import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import EyeLogo from '@/components/EyeLogo';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <EyeLogo size={40} />
            <span className="text-2xl font-display font-bold">WhiteNet</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#security" className="text-sm hover:text-primary transition-colors">Безопасность</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={20} />
            </Button>
            <Button className="hidden md:inline-flex">Подключиться</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40 md:hidden animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#security" className="text-lg hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Безопасность</a>
            <a href="#features" className="text-lg hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Возможности</a>
            <a href="#faq" className="text-lg hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#contacts" className="text-lg hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
            <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Подключиться</Button>
          </div>
        </div>
      )}

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in">Белый интернет без границ</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Добро пожаловать на сайт <span className="text-primary">WhiteNet</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Безопасный VPN-сервис с умной фильтрацией контента. Доступ к заблокированным платформам без запрещённого контента.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Zap" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {[
              { icon: 'Shield', label: '100% Безопасно', value: 'Защита данных' },
              { icon: 'Zap', label: 'Быстро', value: 'До 1 Гбит/с' },
              { icon: 'Users', label: 'Пользователей', value: '50,000+' },
              { icon: 'Globe', label: 'Серверов', value: '30+ стран' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon as any} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Безопасность</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Умная защита от нежелательного контента
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Автоматическая блокировка запрещённых сайтов с сохранением доступа к популярным платформам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ShieldCheck',
                title: 'Белый список',
                description: 'Доступ только к проверенным и безопасным ресурсам'
              },
              {
                icon: 'Lock',
                title: 'Шифрование',
                description: 'Военное шифрование AES-256 для защиты ваших данных'
              },
              {
                icon: 'AlertCircle',
                title: 'Умная фильтрация',
                description: 'Автоматическая блокировка опасного и запрещённого контента'
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 hover:border-primary transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Всё что нужно для безопасной работы в сети
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: 'Youtube', title: 'Доступ к YouTube', description: 'Смотрите видео без ограничений' },
              { icon: 'MessageCircle', title: 'Discord и мессенджеры', description: 'Общайтесь с друзьями свободно' },
              { icon: 'Music', title: 'TikTok и соцсети', description: 'Листайте ленту без блокировок' },
              { icon: 'Laptop', title: 'Все устройства', description: 'Windows, Mac, iOS, Android' },
              { icon: 'Gauge', title: 'Высокая скорость', description: 'Без ограничений трафика' },
              { icon: 'Ban', title: 'Блокировка 18+', description: 'Защита от нежелательного контента' }
            ].map((feature, i) => (
              <Card key={i} className="p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon as any} size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="free-service" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Полностью бесплатно</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              WhiteNet — бесплатно навсегда
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Безопасный интернет должен быть доступен всем. Никаких тарифов, платежей или подписок.
            </p>
          </div>

          <Card className="p-12 text-center border-2 border-primary">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Heart" size={40} className="text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">100% Бесплатно</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Без ограничений, без скрытых платежей. Сервис полностью бесплатный для всех.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: 'Users', label: 'Безлимитные устройства' },
                { icon: 'Zap', label: 'Максимальная скорость' },
                { icon: 'Shield', label: 'Полная защита' }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted p-6 rounded-lg mb-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3 mb-3">
                <Icon name="Info" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Приложение в разработке</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Наша команда работает над созданием полностью анонимного приложения. Мы тщательно продумываем баланс между анонимностью и безопасностью пользователей, потому что ваша защита — наш приоритет. Полная анонимность может создать риски, и мы хотим убедиться, что каждый пользователь останется в безопасности.
                  </p>
                </div>
              </div>
            </div>
            <Button size="lg" className="text-lg px-12" disabled>
              <Icon name="Clock" size={24} className="mr-2" />
              Скоро будет доступно
            </Button>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Частые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как работает WhiteNet?',
                a: 'WhiteNet создаёт безопасное зашифрованное соединение между вашим устройством и нашими серверами, обеспечивая доступ к заблокированным ресурсам с автоматической фильтрацией нежелательного контента.'
              },
              {
                q: 'Какие сайты будут доступны?',
                a: 'Вы получите доступ к TikTok, YouTube, Discord и другим популярным платформам. При этом WhiteNet автоматически блокирует запрещённый контент, включая порнографию и сайты с опасным содержимым.'
              },
              {
                q: 'Это законно?',
                a: 'Да, использование VPN-сервисов законно. WhiteNet специально разработан для обеспечения безопасного доступа к легальному контенту с защитой от запрещённых ресурсов.'
              },
              {
                q: 'На каких устройствах работает?',
                a: 'WhiteNet поддерживает все популярные платформы: Windows, macOS, Linux, iOS, Android. Приложения доступны в соответствующих магазинах.'
              },
              {
                q: 'Можно ли протестировать бесплатно?',
                a: 'Да! Мы предоставляем 7 дней бесплатного доступа ко всем функциям. Кредитная карта не требуется.'
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-display font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответим на все вопросы в течение 24 часов
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Опишите ваш вопрос..." rows={5} />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">support@whitenet.ru</div>
              </div>
              <div>
                <Icon name="MessageCircle" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Telegram</div>
                <div className="font-medium">@whitenet_support</div>
              </div>
              <div>
                <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">Поддержка</div>
                <div className="font-medium">24/7</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <EyeLogo size={32} />
              <span className="text-xl font-display font-bold">WhiteNet</span>
            </div>
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2024 WhiteNet. Безопасный интернет без границ.
              </div>
              <div className="text-sm font-medium">
                Сделано при поддержке <span className="font-bold">Black Crosses</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;