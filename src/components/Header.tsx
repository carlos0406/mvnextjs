import { Container } from '../styles/components/header'
import { VscAccount } from 'react-icons/vsc'
import ptBR from 'date-fns/locale/pt-BR'
import format from 'date-fns/format'
export function Header() {
  const currentDate = format(new Date(), 'EEE, d MMMM  Y', {
    locale: ptBR
  })
  return (
    <Container>
      <div className="header">
        <VscAccount size={40} />
        <h1>Projeto</h1>
        <div className="data">{currentDate}</div>
      </div>
    </Container>
  )
}
