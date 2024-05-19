import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { routerPath } from 'router/constant';
import { BoxBlogContainer, LabelWrapper } from 'src/library/box-blog/styles';

interface Props {
    label: string;
}

export default function BoxBlog({ label }: Props): ReactElement {
    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(routerPath.blog);
    };

    return (
        <BoxBlogContainer onClick={handleClick}>
            <LabelWrapper>{label}</LabelWrapper>
        </BoxBlogContainer>
    );
}
