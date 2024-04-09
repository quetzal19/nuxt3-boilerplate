/**
 * Функция для форматирования даты:
 * преобразует дату вида '01.01.1999' в '1 января 1999',
 * Дата приходит в формате 'dd.mm.YYYY'
 * Перевод месяцев находится в app/nuxt-config/i18n
 */
export function formatDateWithReplaceMonth(date: string) {
  const { t } = useNuxtApp().$i18n;
  const dateSplit = date.split('.');

  dateSplit.forEach((item, index) => {
    if (index === 0 && item.startsWith('0')) dateSplit[0] = dateSplit[0].replace('0', '');
    if (index === 1) dateSplit.splice(1, 1, t(`dateReplaceMonth.${[item]}`));
  });

  return dateSplit.join(' ');
}

