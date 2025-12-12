import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за подтверждение!",
      description: "Мы получили вашу информацию и ждем вас на празднике.",
    });
    setFormData({ name: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(229,221,255,0.2),transparent_50%)]" />
        
        <div className="relative z-10 text-center space-y-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg tracking-widest uppercase">Приглашаем на свадьбу</p>
            <div className="flex items-center justify-center gap-8 my-8">
              <h1 className="text-6xl md:text-8xl font-light text-primary">Данил</h1>
              <Icon name="Heart" className="text-primary animate-pulse" size={48} />
              <h1 className="text-6xl md:text-8xl font-light text-primary">Алена</h1>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-4xl md:text-5xl font-serif text-foreground">05 сентября 2026</p>
            <p className="text-xl text-muted-foreground italic">Ждем Вас на свадьбе</p>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <Icon name="ChevronDown" className="text-primary" size={32} />
        </div>
      </section>

      <section className="py-20 px-4 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Мы приглашаем Вас разделить с нами радость самого незабываемого дня в нашей жизни.
            </p>
            
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Calendar" className="text-primary" size={24} />
                  <p className="text-2xl font-serif">05.09.2026 в 14:30</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <p className="text-xl">Место встречи: ЗАГС</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="py-12">
            <p className="text-2xl md:text-3xl font-serif italic text-primary/80">
              "Там, где посеяна любовь, растёт радость."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto space-y-16">
          <Card className="overflow-hidden shadow-xl">
            <div className="bg-primary/5 p-8 border-b border-primary/20">
              <h2 className="text-4xl font-serif text-center text-primary">Свадебное расписание</h2>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-24 text-right">
                  <p className="text-xl font-semibold text-primary">14:30</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg">Регистрация в ЗАГСе</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 text-right">
                  <p className="text-xl font-semibold text-primary">16:00</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg">Начало банкета</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-24 text-right">
                  <p className="text-xl font-semibold text-primary">18:00</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg">Развлекательная программа</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl">
            <div className="bg-primary/5 p-8 border-b border-primary/20">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Utensils" className="text-primary" size={32} />
                <h2 className="text-4xl font-serif text-primary">Меню</h2>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-center text-foreground/80 leading-relaxed">
                Меню разнообразно, поэтому сообщите нам заранее, если у вас есть какие-либо предпочтения или диетические ограничения. 
                После подтверждения вы сможете пройти опрос о своих вкусовых предпочтениях и напитках.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl">
            <div className="bg-primary/5 p-8 border-b border-primary/20">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Gift" className="text-primary" size={32} />
                <h2 className="text-4xl font-serif text-primary">Пожелания по подаркам</h2>
              </div>
            </div>
            <CardContent className="p-8 space-y-4">
              <p className="text-lg text-center font-semibold text-primary">
                Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!
              </p>
              <p className="text-base text-center text-foreground/80 leading-relaxed">
                Мы понимаем, что дарить цветы на свадьбу - это традиция, но мы не сможем насладиться их красотой в полной мере... 
                Будем рады любой другой альтернативе (вино или в денежном эквиваленте).
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl border-primary/30">
            <div className="bg-primary/5 p-8 border-b border-primary/20">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Info" className="text-primary" size={32} />
                <h2 className="text-4xl font-serif text-primary">Примечание</h2>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-base text-center text-foreground/80 leading-relaxed">
                Будем благодарны, если вы воздержитесь от криков "Горько" на празднике, ведь поцелуй — это знак выражения чувств, 
                он не может быть по заказу.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-2 border-primary/20">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-10 border-b border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Icon name="UserCheck" className="text-primary" size={36} />
                <h2 className="text-4xl md:text-5xl font-serif text-primary">Подтверждение</h2>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Пожалуйста, подтвердите свое присутствие до 01.05.2026
              </p>
            </div>
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-lg">Количество гостей *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">Пожелания или диетические ограничения</Label>
                  <Textarea
                    id="message"
                    placeholder="Ваши комментарии..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold">
                  Подтвердить присутствие
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="overflow-hidden shadow-xl">
            <div className="bg-primary/5 p-8 border-b border-primary/20">
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-primary" size={32} />
                <h2 className="text-4xl font-serif text-primary">Место проведения</h2>
              </div>
            </div>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted relative">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=37.5%2C55.7%2C37.7%2C55.8&layer=mapnik&marker=55.7558%2C37.6173"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Карта места проведения"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-8 bg-white">
                <p className="text-lg text-center">
                  <Icon name="Navigation" className="inline mr-2 text-primary" size={20} />
                  ЗАГС, Москва
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-primary/5 to-secondary/20">
            <CardContent className="p-10 text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Camera" className="text-primary" size={32} />
                <h2 className="text-4xl font-serif text-primary">Фото</h2>
              </div>
              <p className="text-lg text-foreground/80">
                Опубликуйте фото дня нашей свадьбы в соц.сетях с хештегом
              </p>
              <p className="text-3xl font-semibold text-primary">#ДанилАлена2026</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-3xl font-serif text-primary">Ждем Вас!</p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Heart" className="text-primary" size={20} />
            <p>Данил & Алена</p>
            <Icon name="Heart" className="text-primary" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
