/**
 * Estilo: Jardim de Celebrações — hospitalidade botânica contemporânea,
 * com conversão acolhedora, formas orgânicas e leitura clara para famílias.
 */
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  CirclePlay,
  Clock3,
  MapPin,
  MessageCircle,
  PartyPopper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
  UtensilsCrossed,
} from "lucide-react";

const whatsappNumber = "5522974052903";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de pedir um orçamento para uma festa infantil na Casa da Árvore.\n\nNome: \nIdade da criança: \nData desejada: \nNº aproximado de convidados: \nTema ou ideia da festa: ",
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const faqs = [
  {
    question: "Como faço para pedir um orçamento?",
    answer:
      "Clique em ‘Pedir orçamento no WhatsApp’ e envie a idade da criança, a data desejada e o número aproximado de convidados. O atendimento confirma a disponibilidade e apresenta as possibilidades para a festa.",
  },
  {
    question: "A Casa da Árvore realiza festas para diferentes idades?",
    answer:
      "Sim. O espaço divulga propostas para aniversários infantis e uma estrutura com área baby, espaço kids e atrações que podem ser alinhadas ao perfil da comemoração.",
  },
  {
    question: "Posso escolher o tema da decoração?",
    answer:
      "A Casa da Árvore informa trabalhar com mais de 150 temas de decoração. No atendimento, você pode contar o que a criança gosta para entender as opções disponíveis.",
  },
  {
    question: "É possível visitar o espaço antes de fechar?",
    answer:
      "Sim. A equipe convida as famílias a conhecerem as instalações. Use o WhatsApp para combinar o melhor horário para a visita.",
  },
];

function WhatsAppButton({
  children,
  className = "",
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`cta-button ${compact ? "cta-button--compact" : ""} ${className}`}
    >
      <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
      <span>{children}</span>
      {!compact && <ArrowRight aria-hidden="true" className="size-4 shrink-0" />}
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6ed] text-[#1f3926]">
      <header className="site-header">
        <a href="#inicio" className="brand-mark" aria-label="Casa da Árvore — início">
          <img
            src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2025/03/logoverde.png"
            alt="Casa da Árvore Festas"
            className="brand-mark__official-logo"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#estrutura">O espaço</a>
          <a className="nav-link" href="#como-funciona">Como funciona</a>
          <a className="nav-link" href="#visite">Localização</a>
        </nav>

        <WhatsAppButton compact className="hidden sm:inline-flex">
          Pedir orçamento
        </WhatsAppButton>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow eyebrow--leaf">
              <Sparkles className="size-4" aria-hidden="true" />
              Festas infantis em Cabo Frio
            </div>
            <h1>
              A festa que seu filho vai <em>lembrar.</em>
              <span>O cuidado que você vai sentir.</span>
            </h1>
            <p className="hero-copy__lead">
              Um espaço para brincar, celebrar e viver cada detalhe com leveza. Conte o sonho da festa — a equipe ajuda a transformar a ideia em um dia especial.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton>Pedir orçamento no WhatsApp</WhatsAppButton>
              <a className="text-link" href="#estrutura">
                Conheça o espaço <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="hero-trust" aria-label="Indicadores públicos da Casa da Árvore">
              <div className="hero-trust__rating">
                <span className="star-cluster" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3.5 fill-current" />)}
                </span>
                <strong>4,7 no Google</strong>
                <span>· 646 avaliações</span>
              </div>
              <span className="trust-divider" aria-hidden="true" />
              <div><strong>17 anos</strong> de celebrações</div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Cenário de festa infantil em jardim">
            <div className="hero-visual__leaf hero-visual__leaf--one" />
            <div className="hero-visual__leaf hero-visual__leaf--two" />
            <img
              src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2021/03/135852103_5579414748751139_3730229195559612929_o-1024x684.jpg"
              alt="Piscina e área externa da Casa da Árvore Festas em Cabo Frio"
              className="hero-visual__photo"
            />
            <div className="hero-visual__tag">
              <span className="tag-icon"><PartyPopper className="size-4" /></span>
              <span><strong>Mais de 150</strong><br />temas para sonhar</span>
            </div>
            <div className="hero-visual__location">
              <MapPin className="size-4" aria-hidden="true" />
              Palmeiras · Cabo Frio
            </div>
            <div className="hero-visual__dots" aria-hidden="true" />
          </div>
        </section>

        <section className="benefits-strip" aria-label="Diferenciais da Casa da Árvore">
          <div className="benefit-item"><TreePine className="size-5" /><span><strong>2.000 m²</strong> de espaço para celebrar</span></div>
          <div className="benefit-item"><UtensilsCrossed className="size-5" /><span><strong>Buffet completo</strong> para a festa</span></div>
          <div className="benefit-item"><ShieldCheck className="size-5" /><span><strong>Equipe e recreação</strong> para acompanhar</span></div>
          <div className="benefit-item"><Sparkles className="size-5" /><span><strong>Decoração temática</strong> do seu jeito</span></div>
        </section>

        <section className="feature-section feature-section--play" id="estrutura">
          <div className="section-kicker">Espaço para ser criança</div>
          <div className="feature-section__intro">
            <h2>Brincar é parte da <em>festa.</em></h2>
            <p>Uma comemoração com espaço para correr, descobrir e se divertir — para as crianças viverem o momento e a família aproveitar junto.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-photo feature-photo--play">
              <img src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2021/03/137553360_5579366368755977_5934482302631471968_o-1024x684.jpg" alt="Brinquedoteca da Casa da Árvore Festas com escorregador e atividades infantis" loading="lazy" />
              <span className="photo-label"><CirclePlay className="size-4" /> Espaço para explorar</span>
            </div>
            <div className="feature-list">
              <article className="feature-list__item">
                <span className="feature-list__index">01</span>
                <div><h3>Do baby ao kids</h3><p>Área baby para crianças de 0 a 5 anos e espaço pensado para diferentes fases da infância.</p></div>
              </article>
              <article className="feature-list__item">
                <span className="feature-list__index">02</span>
                <div><h3>Aventura no jardim</h3><p>Piscina, escalada, tirolesa e simulador de asa-delta fazem parte dos diferenciais divulgados pelo espaço.</p></div>
              </article>
              <article className="feature-list__item">
                <span className="feature-list__index">03</span>
                <div><h3>Festa com tranquilidade</h3><p>Monitores e recreadores ajudam a conduzir as brincadeiras, enquanto os adultos aproveitam a celebração.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="care-section">
          <div className="care-section__image">
            <img src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2021/03/136704600_5579422712083676_3702496940311501270_o-1024x684.jpg" alt="Jardim arborizado da Casa da Árvore Festas em Cabo Frio" loading="lazy" />
            <div className="care-section__image-note"><TreePine className="size-4" /> Jardim, espaço e cuidado</div>
          </div>
          <div className="care-section__content">
            <div className="section-kicker">Detalhes que acolhem</div>
            <h2>Você imagina. A gente ajuda a <em>montar.</em></h2>
            <p>Do tema ao cardápio, cada conversa começa pelo que faz sentido para a sua família. O atendimento organiza as possibilidades e apoia a construção de uma comemoração com a cara da criança.</p>
            <ul className="check-list">
              <li><Check className="size-4" /> Mais de 150 temas de decoração divulgados</li>
              <li><Check className="size-4" /> Cozinha profissional e buffet completo</li>
              <li><Check className="size-4" /> Salão coberto, jardim, piscina e espaço infantil</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-text-cta">
              Contar como você imagina essa festa <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        <section className="journey-section" id="como-funciona">
          <div className="journey-section__heading">
            <div className="section-kicker section-kicker--cream">Planejamento leve</div>
            <h2>Seu próximo passo é bem <em>simples.</em></h2>
            <p>Fale com a equipe e receba orientação para desenhar a comemoração.</p>
          </div>
          <div className="journey-steps">
            <article className="journey-card">
              <span className="journey-card__number">01</span>
              <CalendarDays className="size-7" aria-hidden="true" />
              <h3>Conte a data e a idade</h3>
              <p>Diga quando será a festa e um pouco sobre o aniversariante.</p>
            </article>
            <article className="journey-card">
              <span className="journey-card__number">02</span>
              <MessageCircle className="size-7" aria-hidden="true" />
              <h3>Converse com a equipe</h3>
              <p>Receba um atendimento para entender formatos e disponibilidade.</p>
            </article>
            <article className="journey-card">
              <span className="journey-card__number">03</span>
              <PartyPopper className="size-7" aria-hidden="true" />
              <h3>Personalize o momento</h3>
              <p>Escolha os detalhes e se prepare para aproveitar a celebração.</p>
            </article>
          </div>
          <div className="journey-line" aria-hidden="true" />
        </section>

        <section className="celebration-section">
          <div className="celebration-section__content">
            <div className="eyebrow eyebrow--leaf"><Sparkles className="size-4" /> Vamos planejar?</div>
            <h2>Uma festa gostosa de viver, antes mesmo de <em>começar.</em></h2>
            <p>Envie a data, a idade e uma ideia do que seu filho adora. A equipe responde com os próximos passos para organizar a comemoração.</p>
            <WhatsAppButton>Quero planejar essa festa</WhatsAppButton>
            <div className="celebration-section__helper"><Clock3 className="size-4" /> Atendimento sujeito à confirmação de disponibilidade.</div>
          </div>
          <div className="celebration-section__visual">
            <img src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2021/03/136659959_5579414408751173_8742951951585259668_o-1024x684.jpg" alt="Casa na árvore e estrutura infantil da Casa da Árvore Festas" loading="lazy" />
            <div className="celebration-section__stamp"><span>festa</span><strong>feliz</strong><span>começa aqui</span></div>
          </div>
        </section>

        <section className="visit-section" id="visite">
          <div className="visit-section__address">
            <div className="visit-icon"><MapPin className="size-6" /></div>
            <div>
              <div className="section-kicker">Venha conhecer</div>
              <h2>Rua Belo Horizonte, 690 <em>· Palmeiras</em></h2>
              <p>Cabo Frio — RJ. Agende uma visita para ver de perto as possibilidades para a festa.</p>
            </div>
          </div>
          <a className="route-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Belo+Horizonte%2C+690%2C+Palmeiras%2C+Cabo+Frio" target="_blank" rel="noreferrer">
            <MapPin className="size-4" /> Ver rota no mapa
          </a>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-section__heading">
            <div className="section-kicker">Para planejar com calma</div>
            <h2 id="faq-title">Perguntas de quem está começando a <em>sonhar.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}<ChevronDown className="size-5" aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img src="https://casadaarvorefestas.com.br/site/wp-content/uploads/2025/03/logoverde.png" alt="Casa da Árvore Festas" />
          <span>Festas infantis · Cabo Frio</span>
        </div>
        <div className="site-footer__source">Informações de estrutura e serviços conforme divulgação institucional.</div>
        <a className="site-footer__phone" href={whatsappUrl} target="_blank" rel="noreferrer"><Phone className="size-4" /> Falar no WhatsApp</a>
      </footer>

      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle className="size-5" /> Pedir orçamento
      </a>
    </div>
  );
}
