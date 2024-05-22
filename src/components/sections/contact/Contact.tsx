import { ReactElement } from 'react';

import {
    ContactContainer,
    DescriptionWrapper,
    SocialMediaWrapper,
} from './styles';
import useContact from './useContact';
import Form from 'components/sections/contact/Form';
import Media from 'components/sections/contact/Media';
import { AnimationFadeIn } from 'style/animation';

export default function Contact(): ReactElement {
    const { viewModel } = useContact();

    return (
        <ContactContainer data-testid="contact">
            <AnimationFadeIn duration={1}>
                <SocialMediaWrapper>
                    <DescriptionWrapper>
                        {viewModel?.description}
                    </DescriptionWrapper>
                </SocialMediaWrapper>

                <Form viewModel={viewModel!} />
                <Media viewModel={viewModel!} />
            </AnimationFadeIn>
        </ContactContainer>
    );
}
