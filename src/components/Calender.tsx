'use client'
 
import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import 'temporal-polyfill/global'
import '@schedule-x/theme-default/dist/index.css'
import { useState } from "react";
 
function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useNextCalendarApp({
    views: [ createViewMonthGrid()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: Temporal.PlainDate.from('2023-12-16'),
        end: Temporal.PlainDate.from('2023-12-16'),
      },
      {
        id: '2',
        title: 'Event 2',
        start: Temporal.PlainDate.from('2025-12-10'),
        end: Temporal.PlainDate.from('2025-12-10'),
      },
      {
        id: '3',
        title: 'Event 3',
        start: Temporal.PlainDate.from('2025-10-10'),
        end: Temporal.PlainDate.from('2025-10-15'),
      },
    ],
    plugins: [eventsService],
    callbacks: {

    }
  })
 
  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp