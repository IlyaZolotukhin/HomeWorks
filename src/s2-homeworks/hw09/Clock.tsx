import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [clockRunning, setClockRunning] = useState(false);

    const start = () => {
        setClockRunning(true)
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(+id)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setClockRunning(false)
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true);
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false);
    }

    const formatTime = (time: number) => {
        return time.toString().padStart(2, '0');
    };

    const stringTime =
        `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}`;

    const stringDate =
        `${formatTime(date.getDate())}.${formatTime(date.getMonth() + 1)}.${date.getFullYear()}`;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const stringDay = daysOfWeek[date.getDay()];
   /* const formatter =  new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }); это вставить в разметку {formatter.format(date)}*/


    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const stringMonth = months[date.getMonth()];

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={clockRunning} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!clockRunning} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
