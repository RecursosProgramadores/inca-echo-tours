import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: language === 'es' ? '¡Suscrito!' : 'Subscribed!',
      description: language === 'es' 
        ? 'Recibirás nuestras ofertas especiales.'
        : 'You will receive our special offers.',
    });
    
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <section className="py-16 bg-vermilion">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-4">
            {t('newsletter.title', language)}
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-cream border-cream text-violet-black placeholder:text-muted-foreground h-12"
                placeholder={t('newsletter.placeholder', language)}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gold text-violet-deep hover:bg-gold-light font-semibold h-12 px-8"
            >
              {isSubmitting
                ? (language === 'es' ? 'Enviando...' : 'Sending...')
                : t('newsletter.button', language)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
