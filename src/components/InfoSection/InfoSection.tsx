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
    id: string;
    lightBg: boolean;
    lightText: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonLabel: string;
    imgStart: boolean;
    img: any;
    alt: string;
    dark: boolean;
    primary: boolean;
}

const InfoSection = ({
    id,
    lightBg,
    lightText,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
}: Props) => {
    return (
        <InfoContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Colum1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightText={lightText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    // exact="true"
                                    offset={-80}
                                    primary={primary}
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
