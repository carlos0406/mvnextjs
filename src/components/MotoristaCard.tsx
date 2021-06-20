import { Background, CardContainer, Profile } from '../styles/components/card'
type Cardprops = {
  profileURL: string
  backGroundURL: string
  name: string
}
export function Card(props: Cardprops) {
  return (
    <CardContainer>
      <Background src={props.backGroundURL} alt="" />
      <Profile src={props.profileURL} alt="Num sei" />
      {props.name}
    </CardContainer>
  )
}
