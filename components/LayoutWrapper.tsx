import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`TODO`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
