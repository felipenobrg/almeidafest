import LogoAlmeidaFest from '../../assets/LogoAlmeidaFest.png'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
        <img src={LogoAlmeidaFest} alt="" />
        </HeaderContainer>
    )
}