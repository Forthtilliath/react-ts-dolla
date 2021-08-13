import {
    Container,
    FormWrap,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    Icon,
    Text,
} from './SigninElements';

const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" id="email" required></FormInput>
                        <FormLabel htmlFor="password">Email</FormLabel>
                        <FormInput type="password" id="password" required></FormInput>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default Signin;
