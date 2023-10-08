import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            <div>{t('Главная страница')}</div>
            <Counter />
        </Page>
    );
};

export default MainPage;
