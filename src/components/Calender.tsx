"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from '@schedule-x/event-modal';
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";

// Tentukan tipe data event dari API Anda
type ApiEvent = {
  id: string | number;
  title: string;
  start: string; // Asumsi API mengembalikan string tanggal YYYY-MM-DD
  end: string; // Asumsi API mengembalikan string tanggal YYYY-MM-DD
};

function CalendarApp() {
  // 1. Inisialisasi plugin
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = createEventModalPlugin();

  // 2. Gunakan useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Hapus opsi 'next', karena ini client component
        const res = await fetch(
          "https://api.smpn2katapang.sch.id/school-events"
        );

        if (!res.ok) {
          console.error("Gagal mengambil data event");
          return;
        }

        const result = await res.json();
        const apiEvents: ApiEvent[] = result.data || []; // Sesuaikan .data jika perlu

        // 3. Format data API agar sesuai dengan format Schedule-X
        const formattedEvents = apiEvents.map((event) => ({
          id: event.id,
          title: event.title,
          start: Temporal.PlainDate.from(event.start), // Konversi string ke Temporal
          end: Temporal.PlainDate.from(event.end), // Konversi string ke Temporal
        }));

        // 4. Masukkan data event ke kalender menggunakan plugin service
        eventsService.set(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [eventsService]); // Tambahkan dependency agar effect tahu tentang eventsService

  
  const calendar = useNextCalendarApp({
    views: [createViewMonthGrid()],
    // 5. Hapus data event statis dari sini
    // events: [ ... ],
    plugins: [eventsService, eventModal],
    callbacks: {},
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
