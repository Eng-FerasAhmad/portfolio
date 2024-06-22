import { PropsWithChildren, ReactElement } from 'react';
import { IconTemplateContainer } from 'src/library/icon-selector/style';
import { IconProps } from 'src/library/icon-selector/types';

export default function IconTemplate({
    width,
    height,
    viewBox,
    fill,
    children,
}: PropsWithChildren<IconProps>): ReactElement {
    return (
        <IconTemplateContainer
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
        >
            {children}
        </IconTemplateContainer>
    );
}
