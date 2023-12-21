import { useTranslation } from 'react-i18next';
import ButtonComponent, { IButtonComponent } from '../buttonComponent/buttonComponent';
import { useState } from 'react';
import Stack from 'react-bootstrap/Stack';

interface IButtonData {
    name: string,
    label: string,
}
interface IButtonContainer {
    buttonList: IButtonData[],
}

const ButtonContainer = ({ buttonList }: IButtonContainer) => {
    const { t } = useTranslation();
    const [currentSelection, setCurrentSelection] = useState("");
    const handleSelection = (name: string) => {
        setCurrentSelection(name);
        document.dispatchEvent(new CustomEvent('renderSerie', { detail: { data: name } }));
    }    
    return ( <Stack direction="horizontal" gap={3}>
        {buttonList.map((button) => {
            return <ButtonComponent isActive={currentSelection === button.name} name={button.name} key={button.name} label={button.label} handleSelection={handleSelection}></ButtonComponent >
        })}
    </Stack>)
};
export default ButtonContainer;