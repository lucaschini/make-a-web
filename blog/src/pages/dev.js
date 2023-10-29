import Header from "@/components/Header";

import Footer from "@/components/Footer";

export default function Dev() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <Header />
      <div className="flex justify-center items-center text-center flex-col gap-5">
        <div className="w-[1000px] gap-6 flex flex-col">
          <h2>Programador:</h2>
          <p>
            Programador Júnior: Geralmente, programadores juniores têm menos
            experiência e podem ganhar salários iniciais. A média pode variar
            amplamente com base na localização, mas nos Estados Unidos, por
            exemplo, um programador júnior pode ganhar em média entre $50.000 a
            $80.000 por ano. Programador Pleno: Programadores plenos têm mais
            experiência e habilidades. Suas médias salariais podem variar
            significativamente, mas nos EUA, eles geralmente ganham entre $80.000
            e $120.000 por ano. Programador Sênior: Programadores sênior têm um
            alto nível de experiência e responsabilidade. Eles geralmente ganham
            mais do que juniores e plenos. Nos EUA, os salários médios podem
            variar de $120.000 a $200.000 ou mais por ano.
          </p>
          <h2>Designer:</h2>
          <p>
            A média salarial de um designer varia amplamente com base no tipo de
            design (gráfico, de interiores, de moda, etc.) e na localização. Nos
            EUA, um designer gráfico, por exemplo, pode ganhar entre $40.000 a
            $70.000 por ano, dependendo da experiência e localização.
          </p>
          <h2>Engenheiro de Cloud:</h2>
          <p>
            Os engenheiros de cloud são especialistas em infraestrutura e serviços
            de nuvem. Suas médias salariais também variam amplamente. Nos EUA, um
            engenheiro de cloud pode ganhar em média entre $100.000 a $160.000 ou
            mais por ano, dependendo da experiência e das habilidades específicas.
          </p>
          <p>
            Lembre-se de que esses valores são apenas estimativas gerais e podem
            variar significativamente com base na localização, na empresa, na
            experiência do profissional e em outros fatores. Recomenda-se
            verificar fontes atualizadas e específicas para obter informações
            precisas sobre salários em uma determinada região ou setor.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
