import HeaderNew from '@/components/Header'
import Hero from '@/components/Hero'
import CardSection from '@/components/CardSection'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 font-mono'>
      < HeaderNew/>
      < Hero/>
      < CardSection type='creator' title='Criadores' sub='Conheça criadores famosos que utilizam nosso serviço'/>
      < CardSection type='post' title='Postagens' sub='Explore as publicações mais recentes'/>
      <Cta />
      <Footer />
    </div>
  )
}
