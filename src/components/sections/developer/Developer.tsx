import { useNavigate } from 'react-router';
import Button from '../../../library/button/Button';
import { routerPath } from '../../../router/constant';
import { color } from '../../../style/color';
import {
    AboutWrapper,
    ButtonsWrapper,
    ContentContainer,
    DescriptionContainer,
    DeveloperContainer,
    ImageContainer,
    NameWrapper,
    ProfileWrapper,
} from './styles';
import useDeveloper from './useDeveloper';

export default function Developer(): JSX.Element {
    const navigate = useNavigate();
    const { viewModel } = useDeveloper();

    const navigationHandler = (page: string): void => {
        navigate(page);
    };

    return (
        <DeveloperContainer data-testid="developer">
            <ContentContainer>
                <ImageContainer>
                    <ProfileWrapper src="profile.jpg" alt="image" />
                </ImageContainer>
                <DescriptionContainer>
                    {viewModel && <NameWrapper>{viewModel.name}</NameWrapper>}
                    {viewModel && (
                        <AboutWrapper>{viewModel.about}</AboutWrapper>
                    )}
                </DescriptionContainer>
                <ButtonsWrapper>
                    <Button
                        label="Techstack"
                        clickHandler={() =>
                            navigationHandler(routerPath.techstack)
                        }
                        color={color.green}
                        secondaryColor={color.greenDark}
                    />
                    <Button
                        label="Blog"
                        clickHandler={() => navigationHandler(routerPath.blog)}
                        color={color.blue}
                        secondaryColor={color.blueDark}
                    />
                    <Button
                        label="Contact"
                        clickHandler={() =>
                            navigationHandler(routerPath.contact)
                        }
                        color={color.yellow}
                        secondaryColor={color.yellowDark}
                    />
                </ButtonsWrapper>
            </ContentContainer>
        </DeveloperContainer>
    );
}
