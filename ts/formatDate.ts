import moment from "moment-timezone";

export function formatDate(dateString: string, clientTimeZone: string): string {
    console.log(dateString)
    console.log(clientTimeZone)
    if (dateString === 'нету') {
        return 'нету'
    } else {
        return moment(dateString)
            .tz(clientTimeZone)
            .calendar(null, {
                sameDay: '[Сегодня в]  HH:mm',
                nextDay: '[Завтра в] HH:mm',
                nextWeek: 'DD.MM.YYYY [в] HH:mm',
                sameElse: 'DD.MM.YYYY [в] HH:mm'
            });
    }
}
