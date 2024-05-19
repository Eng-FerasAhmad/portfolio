import { ReactElement } from 'react';
import IconSelector from '../../library/icon-selector/IconSelector';
import { ItemsContainer, ItemWrapper } from '../sections/contact/styles';
import useContact from '../sections/contact/useContact';
import { FooterWrapper } from './styles';

export default function Footer(): ReactElement {
    const { viewModel } = useContact();
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            &copy; {currentYear} Feras Ahmad
            <ItemsContainer>
                {viewModel?.media.map((item) => {
                    return (
                        <ItemWrapper
                            key={item.icon}
                            href={item.link}
                            target="_blank"
                        >
                            <div>
                                <IconSelector iconName={item.icon} />
                            </div>
                            <div>{item.name}</div>
                        </ItemWrapper>
                    );
                })}
            </ItemsContainer>
        </FooterWrapper>
    );
}
