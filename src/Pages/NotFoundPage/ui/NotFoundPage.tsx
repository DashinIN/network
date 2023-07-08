
import { classNames } from 'shared/lib/classNames/classNames';
import s from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
 className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation()
  return (
    <div className={classNames(s.NotFoundPage, {}, [className])} >
        {t("Страница не найдена")}
    </div>
  )
}