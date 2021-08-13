import { Button } from '../ButtonElements';
import {
    InfoContainer,
    BtnWrap,
    Colum1,
    Colum2,
    Heading,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine,
    Img,
    ImgWrap,
} from './InfoElements';

interface Props {
    id: string,
    topLine: string,
    headLine: string,
    description: string,
    buttonLabel: string,
    imgStart: boolean,
    img: any,
    alt: string,
    dark: boolean,
}

const InfoSection = ({
    id,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
}: Props) => {
    return (
        <InfoContainer id={id} dark={dark}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Colum1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading dark={dark}>{headLine}</Heading>
                            <Subtitle dark={dark}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    dark={dark}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Colum1>
                    <Colum2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Colum2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
