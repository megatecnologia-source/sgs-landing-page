import React, { useState } from 'react';
import { useTracker } from './useTracker';
import {
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  ShieldCheck,
  Smartphone,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Send,
  Activity,
  ShieldAlert,
  Ticket,
  Settings,
  Monitor,
  Megaphone,
  ClipboardList,
  ChevronDown,
  Headset,
  RefreshCw,
  Wrench,
  UserCheck,
  DollarSign,
  Calendar,
  FileText,
  MapPin,
  Mail,
  Phone,
  Star,
  Quote,
  Zap,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const { addEvent, sendProposal } = useTracker();

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    addEvent('cta_whatsapp_click');
  };

  const desafios = [
    { title: "Filas desorganizadas", desc: "Falta de controle e organização na formação de filas, gerando confusão e insatisfação.", icon: <Users className="w-8 h-8" /> },
    { title: "Longos tempos de espera", desc: "Cidadãos aguardam por períodos excessivos sem previsão de atendimento.", icon: <Clock className="w-8 h-8" /> },
    { title: "Dificuldade de controle do fluxo", desc: "Impossibilidade de monitorar e gerenciar o volume de atendimentos em tempo real.", icon: <Activity className="w-8 h-8" /> },
    { title: "Falta de priorização automática", desc: "Atendimento preferencial depende de identificação manual, sem automação.", icon: <ShieldAlert className="w-8 h-8" /> }
  ];

  const etapas = [
    { step: "01", title: "Emissão de Senha", desc: "Cidadão emite a senha pelo terminal", icon: <Ticket className="w-6 h-6" /> },
    { step: "02", title: "Organização Automática", desc: "Sistema organiza automaticamente a fila", icon: <Settings className="w-6 h-6" /> },
    { step: "03", title: "Exibição no Painel", desc: "Senha exibida no painel eletrônico", icon: <Monitor className="w-6 h-6" /> },
    { step: "04", title: "Chamada para Atendimento", desc: "Cidadão é chamado para atendimento", icon: <Megaphone className="w-6 h-6" /> },
    { step: "05", title: "Registro e Controle", desc: "Registro e controle do atendimento", icon: <ClipboardList className="w-6 h-6" /> }
  ];

  const escopo = [
    "Levantamento técnico e planejamento",
    "Projeto de implantação",
    "Instalação de equipamentos",
    "Configuração do sistema",
    "Parametrização do atendimento",
    "Testes operacionais",
    "Treinamento da equipe",
    "Implantação assistida"
  ];

  const equipamentos = [
    { item: "Computador Completo para Atendimento", desc: "Computador destinado aos guichês de atendimento para operação do sistema.", qtd: "03 unidades" },
    { item: "Servidor de computador", desc: "Equipamento responsável pelo gerenciamento central do sistema.", qtd: "01 unidade" },
    { item: "Impressora Térmica", desc: "Utilizada para emissão das senhas de atendimento.", qtd: "01 unidade" },
    { item: "Mini computador", desc: "Equipamento responsável pelo controle do painel de chamadas.", qtd: "01 unidade" },
    { item: "Smart TV", desc: "Tela utilizada para exibição das senhas de chamadas.", qtd: "01 unidade" },
    { item: "No-Break", desc: "Equipamento de proteção elétrica que garante o funcionamento em caso de queda de energia.", qtd: "01 unidade" }
  ];

  const suporte = [
    { title: "Monitoramento do sistema", icon: <Monitor className="w-6 h-6" /> },
    { title: "Suporte técnico remoto", icon: <Headset className="w-6 h-6" /> },
    { title: "Atualizações do sistema", icon: <RefreshCw className="w-6 h-6" /> },
    { title: "Manutenção preventiva", icon: <Wrench className="w-6 h-6" /> },
    { title: "Suporte operacional aos usuários", icon: <UserCheck className="w-6 h-6" /> }
  ];

  const beneficios = [
    { title: "Redução de filas", icon: <Users className="w-8 h-8 text-brand-light" /> },
    { title: "Atendimento mais rápido", icon: <Clock className="w-8 h-8 text-brand-light" /> },
    { title: "Cumprimento da legislação de prioridade", icon: <ShieldCheck className="w-8 h-8 text-brand-light" /> },
    { title: "Organização do atendimento", icon: <BarChart3 className="w-8 h-8 text-brand-light" /> },
    { title: "Melhor experiência para o cidadão", icon: <Smartphone className="w-8 h-8 text-brand-light" /> },
    { title: "Maior eficiência administrativa", icon: <Activity className="w-8 h-8 text-brand-light" /> }
  ];

  const depoimentos = [
    {
      nome: "Dr. Ricardo Oliveira",
      cargo: "Diretor Clínico - Hospital São Lucas",
      texto: "A implementação do SGS transformou nossa recepção. O caos das filas desapareceu e nossos pacientes agora aguardam com muito mais conforto e dignidade.",
      estrelas: 5
    },
    {
      nome: "Mariana Costa",
      cargo: "Sec. de Administração - Prefeitura Municipal",
      texto: "O controle que temos hoje sobre o tempo médio de espera e produtividade dos atendentes é incrível. Uma ferramenta indispensável para a gestão pública moderna.",
      estrelas: 5
    },
    {
      nome: "Marcos Vinícius",
      cargo: "Gestor de Operações - Centro Médico Integrado",
      texto: "Sistema robusto, suporte impecável e interface intuitiva. Reduzimos o estresse da nossa equipe de recepção em quase 90% logo no primeiro mês.",
      estrelas: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-primary/20 selection:text-brand-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 lg:h-32">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1772912453/1_oefzgj.png"
                  alt="Logo SGS"
                  className="h-16 lg:h-20 w-auto object-contain drop-shadow-sm transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
              <div className="hidden sm:block">
                <span className="block text-xl font-black text-brand-dark tracking-tighter leading-none">SGS</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none">Management</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-10">
              <a href="#solucao" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">Solução</a>
              <a href="#beneficios" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">Benefícios</a>
              <a href="#orcamento" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors">Orçamento</a>
              <a
                href="https://wa.me/5598983444737"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-brand-dark text-white text-xs font-extra-bold uppercase tracking-widest rounded-full hover:bg-brand-primary hover:shadow-2xl hover:shadow-brand-primary/20 transition-all active:scale-95"
              >
                Agendar Demonstração
              </a>
            </nav>

            <button className="md:hidden p-2 text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-4">
                <a href="#solucao" className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Solução</a>
                <a href="#beneficios" className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
                <a href="#orcamento" className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Orçamento</a>
                <a
                  href="https://wa.me/5598983444737"
                  className="block w-full py-4 bg-brand-primary text-center text-white font-bold rounded-xl"
                  onClick={() => { setIsMenuOpen(false); handleWhatsAppClick(); }}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24 lg:pt-32">
        {/* HERO SECTION */}
        <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                    Gestão de Atendimento Premium
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-black text-brand-dark leading-[1.1] mb-8 tracking-tighter">
                    Devolva a <span className="text-brand-primary">Dignidade</span> ao seu Público e o <span className="text-brand-primary">Controle</span> à sua Gestão.
                  </h1>
                  <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    O <strong>SGS (Sistema de Gerenciamento de Senhas)</strong> é a solução definitiva para eliminar o caos das filas em Órgãos Públicos, Clínicas e Hospitais. Transforme esperas frustrantes em experiências de alto nível.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <a
                      href="#aceite"
                      className="w-full sm:w-auto px-10 py-5 bg-brand-dark text-white font-bold rounded-2xl hover:bg-brand-primary transition-all shadow-2xl shadow-brand-dark/20 hover:shadow-brand-primary/30 active:scale-95 flex items-center justify-center gap-3"
                    >
                      Solicitar Proposta
                      <ChevronRight className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/5598983444737"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="w-full sm:w-auto px-10 py-5 bg-white text-brand-dark font-bold rounded-2xl border-2 border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                      <Phone className="w-5 h-5 text-brand-primary" />
                      Falar com Especialista
                    </a>
                  </div>

                  <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Alta Confiabilidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-brand-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Prioridade Legal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-brand-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Apoio à Gestão</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-15px_rgba(0,46,122,0.3)] border-8 border-white">
                  <img
                    src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773162594/unnamed_1_xj2ka9.jpg"
                    alt="SGS System Performance"
                    className="w-full h-auto object-cover aspect-[4/5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-sm font-medium leading-relaxed italic">
                      "A tecnologia deve servir à humanidade, organizando o que o caos desestrutura."
                    </p>
                  </div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden xl:block animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-2xl font-black text-brand-dark">-45%</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Tempo de Espera</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROPOSTA DE VALOR */}
        <section id="solucao" className="py-24 lg:py-32 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 tracking-tight">O Fim das Filas Começa com uma Decisão Estratégica</h2>
              <p className="text-slate-500 leading-relaxed">Não se trata apenas de dar um número ao cidadão. Trata-se de humanizar o atendimento, automatizar processos e gerar dados para decisões de gestão inteligentes.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {desafios.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[4rem] transition-all group-hover:scale-110"></div>
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-8">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA - ETAPAS */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-24 tracking-tight">A Fluidez do SGS na Prática</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent -z-10"></div>

              {etapas.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white border-4 border-slate-50 text-brand-primary rounded-[1.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-slate-200 transition-all group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary/20">
                    {item.icon}
                  </div>
                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                      Passo {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-[180px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS SECTION */}
        <section id="beneficios" className="py-24 lg:py-32 bg-brand-dark text-white relative overflow-hidden">
          {/* Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
             <img src="https://res.cloudinary.com/dplhygs4v/image/upload/v1772912453/5_x3ylrc.png" alt="" className="h-full w-auto object-contain" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-white/10 text-brand-light text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                  Vantagens Competitivas
                </span>
                <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter">O SGS entrega mais que organização: entrega <span className="text-brand-light">resultado real</span>.</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {beneficios.map((item, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="w-12 h-12 bg-white/10 text-brand-light rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-light group-hover:text-brand-dark transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                        <div className="h-0.5 w-8 bg-brand-light/30 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 p-4 relative">
                   <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-brand-primary/20 to-transparent flex items-center justify-center p-8 overflow-hidden relative group">
                      <Monitor className="w-48 h-48 text-white/10 absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform" />
                      <div className="text-center relative z-10">
                         <h3 className="text-2xl font-black mb-4">Painel de Gestão Completo</h3>
                         <p className="text-white/60 mb-8 max-w-sm">Monitore em tempo real a produtividade de cada guichê e o tempo de espera dos cidadãos de onde estiver.</p>
                         <div className="space-y-4">
                            {[
                              "Acesso via Web (Browser)",
                              "Relatórios Exportáveis",
                              "Dashboards de Alto Nível",
                              "Gestão Multi-unidade"
                            ].map((p, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                                <CheckCircle2 className="w-4 h-4 text-brand-light" />
                                {p}
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL / DEPOIMENTOS */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark tracking-tight">Quem já Modernizou com SGS</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((dep, idx) => (
                <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] relative group border border-slate-100">
                  <Quote className="absolute top-8 right-10 w-12 h-12 text-slate-200 group-hover:text-brand-primary/10" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(dep.estrelas)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed italic italic">"{dep.texto}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-black">
                      {dep.nome.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-sm">{dep.nome}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">{dep.cargo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORÇAMENTO PERSONALIZADO SECTION */}
        <section id="orcamento" className="py-24 lg:py-32 bg-slate-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark skew-x-[-12deg] translate-x-1/4 hidden lg:block"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                  Soluções Sob Medida
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-brand-dark mb-8 tracking-tighter lead-tight">
                  Cada Instituição é <span className="text-brand-primary">Única</span>. Seu Plano também deve ser.
                </h2>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  Para clínicas locais ou redes hospitalares complexas, o SGS escala conforme sua necessidade. Não cobramos por funcionalidades que você não usa.
                </p>
                
                <div className="space-y-6 mb-10">
                   {[
                     { title: "Escalabilidade Ilimitada", desc: "De 1 guichê a centenas de unidades integradas.", icon: <Zap className="w-5 h-5" /> },
                     { title: "Segurança de Dados Corporativa", desc: "Conformidade total com LGPD e normas de saúde.", icon: <Shield className="w-5 h-5" /> },
                     { title: "Suporte e Consultoria", desc: "Acompanhamos sua equipe do setup ao dia a dia.", icon: <UserCheck className="w-5 h-5" /> }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-white shadow-md rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="font-bold text-brand-dark text-sm capitalize">{item.title}</h4>
                           <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <a
                  href="https://wa.me/5598983444737"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 active:scale-95 group"
                >
                  Solicitar Orçamento Personalizado
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 lg:p-12 rounded-[3rem] border border-white/20 shadow-2xl lg:text-white">
                <h3 className="text-2xl font-black mb-6 tracking-tight">O que está incluso?</h3>
                <ul className="space-y-4 mb-10">
                   {escopo.map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm opacity-80 group">
                        <CheckCircle2 className="w-5 h-5 text-brand-light shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
                <div className="p-6 bg-brand-primary/20 rounded-2xl border border-brand-light/20">
                   <p className="text-xs font-bold uppercase tracking-widest mb-2 text-brand-light">Diferencial SGS</p>
                   <p className="text-sm leading-relaxed opacity-90">
                     Desenvolvemos módulos customizados para fluxos específicos de triagem ou integração com sistemas legados da sua instituição.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRAZO E GARANTIA SECTION (INTEGRADA) */}
        <section className="py-24 bg-white border-b border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
                 <div className="flex items-center gap-6">
                    <Calendar className="w-12 h-12 text-brand-primary opacity-20" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tempo de Setup</p>
                       <p className="text-xl font-black text-brand-dark leading-tight">Implantação em 20 dias</p>
                    </div>
                 </div>
                 <div className="w-px h-12 bg-slate-100 hidden lg:block"></div>
                 <div className="flex items-center gap-6">
                    <ShieldCheck className="w-12 h-12 text-brand-primary opacity-20" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Compromisso</p>
                       <p className="text-xl font-black text-brand-dark leading-tight">Garantia Vitalícia Técnica</p>
                    </div>
                 </div>
                 <div className="w-px h-12 bg-slate-100 hidden lg:block"></div>
                 <div className="flex items-center gap-6">
                    <RefreshCw className="w-12 h-12 text-brand-primary opacity-20" />
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Atendimento</p>
                       <p className="text-xl font-black text-brand-dark leading-tight">Suporte 24h Prioritário</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ACEITE DA PROPOSTA - FORM */}
        <section id="aceite" className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                Próximo Passo
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-4 tracking-tight">Solicitar Formalização</h2>
              <p className="text-slate-500">Inicie o processo de modernização preenchendo os dados da sua instituição abaixo.</p>
            </div>

            <form
              className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-[0_50px_100px_-15px_rgba(0,0,0,0.08)] border border-slate-100 space-y-8"
              onSubmit={async (e) => {
                addEvent('cta_form_submit');
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const btn = form.querySelector('button');
                if (btn) btn.disabled = true;

                try {
                  // 1. Notificar via Telegram Imediatamente
                  await sendProposal(data);

                  // 2. Enviar E-mail via FormSubmit.co (Gratuito)
                  await fetch("https://formsubmit.co/ajax/gomesdocarmo@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      _subject: `🚀 SOLICITAÇÃO ORÇAMENTO SGS - ${data.empresa}`,
                      ...data
                    }),
                  });

                  alert('Sua solicitação foi enviada com sucesso! Nossa equipe entrará em contato em breve para os próximos passos.');
                  form.reset();
                } catch (error) {
                  console.error(error);
                  alert('Ops! Ocorreu um erro ao enviar. Por favor, tente novamente ou fale conosco agora via WhatsApp.');
                } finally {
                  if (btn) btn.disabled = false;
                }
              }}
            >
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Instituição / Empresa</label>
                  <input name="empresa" type="text" required placeholder="Nome do local" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:bg-white focus:border-brand-primary transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Responsável</label>
                  <input name="responsavel" type="text" required placeholder="Seu nome completo" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:bg-white focus:border-brand-primary transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp de Contato</label>
                  <input name="telefone" type="tel" required placeholder="(00) 00000-0000" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:bg-white focus:border-brand-primary transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                  <input name="email" type="email" required placeholder="seu@email.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:bg-white focus:border-brand-primary transition-all" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Observações (Opcional)</label>
                <textarea name="observacao" rows={4} placeholder="Conte-nos um pouco sobre sua demanda..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:bg-white focus:border-brand-primary transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-brand-dark text-white font-black rounded-2xl hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/20 hover:shadow-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs">
                Enviar Solicitação de Orçamento
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-20 border-b border-white/5 pb-20">
            <div className="lg:col-span-2 space-y-8">
              <img
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1772912787/Logo_branco_axcmhw.png"
                alt="Logo Mega Tecnologia"
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Líderes em soluções tecnológicas para gestão de fluxo de pessoas. Inovação constante para Órgãos Públicos e o Setor de Saúde em todo o território nacional.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light mb-8">Navegação</h4>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#solucao" className="hover:text-white transition-colors">A Solução</a></li>
                <li><a href="#orcamento" className="hover:text-white transition-colors">Orçamento</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light mb-8">Contato</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm font-bold">
                   <Phone className="w-5 h-5 text-brand-light" />
                   (98) 9 8344-4737
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                   <Mail className="w-5 h-5 text-brand-light" />
                   comercial@megatecnologia.com
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
            <p>© 2026 Mega Tecnologia. Todos os direitos reservados.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-white transition-colors">Privacidade</a>
               <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp UI */}
      <a
        href="https://wa.me/5598983444737"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed bottom-10 right-10 z-50 group flex items-center"
      >
        <div className="bg-white px-6 py-3 rounded-2xl shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-all translate-x-10 group-hover:translate-x-0 hidden md:block">
           <span className="text-sm font-bold text-brand-dark">Falar com Consultor</span>
        </div>
        <div className="w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] flex items-center justify-center shadow-[0_20px_40px_-5px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 duration-300">
           <MessageCircle className="w-8 h-8 fill-current" />
        </div>
      </a>
    </div>
  );
};

export default App;
