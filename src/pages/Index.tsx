import { useState } from 'react';
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

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-display font-bold">WhiteNet</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#security" className="text-sm hover:text-primary transition-colors">Безопасность</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Подключиться</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in">Белый интернет без границ</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Свободный доступ к <span className="text-primary">TikTok</span>, <span className="text-secondary">YouTube</span> и <span className="text-primary">Discord</span>
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

      <section id="pricing" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Выберите свой план
            </h2>
            <p className="text-xl text-muted-foreground">
              7 дней бесплатно. Отмена в любой момент.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '299',
                period: 'месяц',
                features: ['1 устройство', '30 Мбит/с', 'Поддержка 24/7', 'Белый список'],
                popular: false
              },
              {
                name: 'Премиум',
                price: '599',
                period: 'месяц',
                features: ['5 устройств', '1 Гбит/с', 'Приоритетная поддержка', 'Все функции'],
                popular: true
              },
              {
                name: 'Семейный',
                price: '999',
                period: 'месяц',
                features: ['10 устройств', 'Безлимит', 'Персональный менеджер', 'Расширенная защита'],
                popular: false
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 scale-105' : ''} hover:border-primary transition-all`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> ₽/{plan.period}</span>
                </div>
                <Button 
                  className="w-full mb-6" 
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  Выбрать план
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">WhiteNet</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 WhiteNet. Безопасный интернет без границ.
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
