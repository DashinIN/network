import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';
import { StarRaiting } from '@/shared/ui/StarRaiting/StarRaiting';
import { RaitingCard } from '@/entities/Raiting';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            <div>{t('Главная страница')}</div>
            <Counter />
            <StarRaiting size={50} />
            <RaitingCard
                title={t('Оцените')}
                feedbackTitle={t('Отзовитесь')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
