export interface ModalProps {
    isOpen: boolean;
    handleModal: () => void;
    handleCurrentFilter: (filter: any) => void;
}