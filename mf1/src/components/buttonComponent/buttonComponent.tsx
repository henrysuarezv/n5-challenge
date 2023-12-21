import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

export interface IButtonComponent {
    name: string,
    label: string,
    isActive: boolean,
    handleSelection: (name: string) => void
}

const ButtonComponent = ({ name, label, isActive, handleSelection }: IButtonComponent) => {
    const { t } = useTranslation();
    return (
        <Button variant={isActive ? "primary" : "outline-primary"} active={isActive} size="sm" onClick={() => handleSelection(name)}>
            {t("components.buttonComponent.label")} {label}
        </Button>
    )
};
export default ButtonComponent;