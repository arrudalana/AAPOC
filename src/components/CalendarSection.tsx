import React from "react";

const months = [
  { 
    month: "Janeiro", 
    campaigns: [
      { color: "bg-green-600", text: "text-green-600", cancer: "Colo do Útero", ribbon: "Verde" }
    ] 
  },
  { 
    month: "Fevereiro", 
    campaigns: [
      { color: "bg-green-600", text: "text-green-600", cancer: "Vesícula Biliar", ribbon: "Verde" },
      { color: "bg-orange-500", text: "text-orange-500", cancer: "Leucemia", ribbon: "Laranja" }
    ] 
  },
  { 
    month: "Março", 
    campaigns: [
      { color: "bg-purple-500", text: "text-purple-500", cancer: "Colo do Útero", ribbon: "Lilás" },
      { color: "bg-blue-900", text: "text-blue-900", cancer: "Colorretal", ribbon: "Azul Marinho" }
    ] 
  },
  { 
    month: "Abril", 
    campaigns: [
      { color: "bg-purple-500", text: "text-purple-500", cancer: "Testículo", ribbon: "Lilás" },
      { color: "bg-sky-400", text: "text-sky-400", cancer: "Esôfago", ribbon: "Azul Claro" }
    ] 
  },
  { 
    month: "Maio", 
    campaigns: [
      { color: "bg-red-600", text: "text-red-600", cancer: "Boca (Oral)", ribbon: "Vermelho" },
      { color: "bg-gray-500", text: "text-gray-500", cancer: "Cérebro", ribbon: "Cinza" }
    ] 
  },
  { 
    month: "Junho", 
    campaigns: [
      { color: "bg-green-600", text: "text-green-600", cancer: "Rim", ribbon: "Verde" },
      { color: "bg-black", text: "text-black", cancer: "Melanoma", ribbon: "Preto" }
    ] 
  },
  { 
    month: "Julho", 
    campaigns: [
      { color: "bg-green-600", text: "text-green-600", cancer: "Cabeça e Pescoço", ribbon: "Verde" },
      { color: "bg-pink-300", text: "text-pink-300", cancer: "Bexiga", ribbon: "Rosa Claro" },
      { color: "bg-yellow-400", text: "text-yellow-400", cancer: "Ósseo", ribbon: "Amarelo" }
    ] 
  },
  { 
    month: "Agosto", 
    campaigns: [
      { color: "bg-slate-100 border border-border", text: "text-slate-600", cancer: "Pulmão", ribbon: "Branco" }
    ] 
  },
  { 
    month: "Setembro", 
    campaigns: [
      { color: "bg-green-600", text: "text-green-600", cancer: "Intestino", ribbon: "Verde" },
      { color: "bg-yellow-600", text: "text-yellow-600", cancer: "Infantojuvenil", ribbon: "Dourado" },
      { color: "bg-gradient-to-r from-blue-400 to-pink-400", text: "text-blue-500", cancer: "Tireoide", ribbon: "Azul e Rosa" }
    ] 
  },
  { 
    month: "Outubro", 
    campaigns: [
      { color: "bg-pink-500", text: "text-pink-500", cancer: "Mama", ribbon: "Rosa" },
      { color: "bg-green-900", text: "text-green-900", cancer: "Fígado", ribbon: "Verde Escuro" }
    ] 
  },
  { 
    month: "Novembro", 
    campaigns: [
      { color: "bg-blue-600", text: "text-blue-600", cancer: "Próstata", ribbon: "Azul" },
      { color: "bg-purple-800", text: "text-purple-800", cancer: "Pâncreas", ribbon: "Roxo" }
    ] 
  },
  { 
    month: "Dezembro", 
    campaigns: [
      { color: "bg-orange-600", text: "text-orange-600", cancer: "Pele (Não Melanoma)", ribbon: "Laranja" }
    ] 
  },
];

const CalendarSection = () => {
  const currentMonth = new Date().getMonth();

  return (
    <section id="calendario" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">
            Conscientização
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mt-2">
            Cores do Ano
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Cada mês do ano é representado por uma cor que simboliza a luta contra tipos específicos de câncer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {months.map((m, i) => (
            <div
              key={m.month}
              className={`relative bg-card rounded-xl p-5 shadow-sm border transition-all hover:shadow-lg hover:-translate-y-1 ${
                i === currentMonth ? "ring-2 ring-primary ring-offset-2" : "border-border"
              }`}
            >
              {i === currentMonth && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full z-10">
                  Mês Atual
                </span>
              )}
              
              <h3 className="font-black text-lg text-foreground text-center mb-4 border-b pb-2">
                {m.month}
              </h3>

              <div className="space-y-4">
                {m.campaigns.map((camp, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className={`w-8 h-8 ${camp.color} rounded-full mb-2 shadow-sm`} />
                    <p className={`text-[10px] uppercase font-bold text-center ${camp.text}`}>
                      {camp.ribbon}
                    </p>
                    <p className="text-xs text-muted-foreground text-center font-medium leading-tight">
                      {camp.cancer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;