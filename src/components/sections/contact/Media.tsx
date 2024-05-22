import { ReactElement } from 'react';
import {
    DescriptionWrapper,
    ItemsContainer,
    ItemWrapper,
} from 'components/sections/contact/styles';
import IconSelector from 'src/library/icon-selector/IconSelector';
import { ContactViewModel } from 'types/ContactTypes';

interface Props {
    viewModel: ContactViewModel;
}

export default function Media({ viewModel }: Props): ReactElement {
    return (
        <div>
            <DescriptionWrapper>{viewModel?.title}</DescriptionWrapper>
            <ItemsContainer>
                {viewModel?.media.map((item) => {
                    return (
                        <ItemWrapper
                            key={item.icon}
                            href={item.link}
                            target="_blank"
                        >
                            <IconSelector iconName={item.icon} />

                            <div>{item.name}</div>
                        </ItemWrapper>
                    );
                })}
            </ItemsContainer>
        </div>
    );
}
