import HeaderNew from '@/components/Header'
import Hero from '@/components/Hero'
import Autores from '@/components/Criadores'

export default function Home() {
  return (
    <div className='flex flex-col gap-8 font-mono'>
      < HeaderNew/>
      < Hero/>
      < Autores/>
    </div>
  )
}
