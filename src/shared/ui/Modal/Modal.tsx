import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import s from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
 className?: string;
 children?: ReactNode;
 isOpen?: boolean;
 onClose?: () => void;
 lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [s.opened]: isOpen,
        [s.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(s.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
