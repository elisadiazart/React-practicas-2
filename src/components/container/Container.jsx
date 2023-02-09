import { StyledContainer } from "./styles"
import LeftCircle from "../leftCircle/LeftCircle"
import LeftSquare from "../leftSquare/LeftSquare"
import RightCircle from "../rightCircle/RightCircle"
import RightSquare from "../rightSquare/RightSquare"

const Container = () => {
    return (
    <>
    <StyledContainer>
        <LeftCircle/>
        <LeftSquare/>
        <RightCircle/>
        <RightSquare/>
    </StyledContainer>
    </>
    )
}

export default Container