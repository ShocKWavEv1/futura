export interface PillsActionProps {
  typeAction: string;
  isLoading: boolean;
  handleAction: () => void;
  handleError: (vale: boolean) => void;
}
