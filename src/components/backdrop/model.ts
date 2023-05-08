export interface BackdropProps {
    isOpen: boolean,
    handleBackdrop: () => void,
    children: string | JSX.Element | JSX.Element[],
    type: string,
}