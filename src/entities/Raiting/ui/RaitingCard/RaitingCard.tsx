import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRaiting } from '@/shared/ui/StarRaiting';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RaitingCardProps {
 className?: string;
 title?: string;
 feedbackTitle?: string;
 hasFeedback?: boolean;
 onCancel?: (starsCount: number) => void;
 onAccept?: (starsCount: number, feedback?: string) => void;
 rate?: number;
}

export const RaitingCard = (props: RaitingCardProps) => {
    const {
        className,
        onAccept,
        onCancel,
        title,
        feedbackTitle,
        hasFeedback,
        rate = 0,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card max className={className}>
            <VStack max align="center" gap="8">
                <Text
                    title={
                        starsCount
                            ? t('Спасибо за оценку!')
                            : title
                    }
                />
                <StarRaiting
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
                <BrowserView>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={cancelHandler}
                        lazy
                    >
                        <VStack max gap="32">
                            {modalContent}
                            <HStack max gap="16" justify="end">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={cancelHandler}
                                >
                                    {t('Закрыть')}
                                </Button>
                                <Button
                                    onClick={acceptHandler}
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer
                        isOpen={isModalOpen}
                        onClose={cancelHandler}
                        lazy
                    >
                        <VStack gap="32">
                            {modalContent}
                            <Button
                                onClick={acceptHandler}
                                size={ButtonSize.L}
                                fullWidth
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </Card>
    );
};
