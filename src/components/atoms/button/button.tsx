import {Button as AriaButton, type ButtonProps} from 'react-aria-components';

interface Props extends ButtonProps {}

export function Button({children, ...props}: Props) {
    return <AriaButton {...props}>{children}</AriaButton>
}
