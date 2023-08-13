import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

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
