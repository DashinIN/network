import { DropdownDirection } from '../../../types/ui';
import s from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': s.optionsBottomLeft,
    'bottom right': s.optionsBottomRight,
    'top right': s.optionsTopRight,
    'top left': s.optionsTopLeft,
};
