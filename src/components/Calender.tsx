"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewMonthGrid, CalendarEvent } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "temporal-polyfill/global";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";

// Tipe data event dari API Anda
type ApiEvent = {
  id: string | number;
  title: string;
  start: string;
  end: string;
  description?: string; // Properti description opsional (bisa undefined)
};

function CalendarApp() {
  // 1. Inisialisasi plugin
  const eventsService = useState(() => createEventsServicePlugin())[0];
  const eventModal = createEventModalPlugin();

  // Gunakan tipe 'CalendarEvent' resmi dari Schedule-X
  // Gunakan tipe 'CalendarEvent' resmi dari Schedule-X
  const customComponents = {
    eventModal: ({ calendarEvent }: { calendarEvent: CalendarEvent }) => {
      return (
        // Wrapper Utama: Latar belakang putih, bayangan, dan sudut membulat
        <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-xl">
          
          {/* 1. Bar Aksen Warna (Hijau) */}
          {/* Menggunakan sintaks "arbitrary value" Tailwind: bg-[#5E8964] */}
          <div className="h-2 w-full bg-[#5E8964]"></div>

          {/* Konten dengan padding */}
          <div className="p-6">
            
            {/* 2. Judul (Oranye) */}
            {/* Menggunakan sintaks "arbitrary value" Tailwind: text-[#FA6602] */}
            <h3 className="mt-0 mb-4 text-2xl font-bold text-[#FA6602]">
              {calendarEvent.title}
            </h3>

            {/* 3. Deskripsi (hanya jika ada) */}
            {calendarEvent.description && (
              <p className="m-0 whitespace-pre-wrap text-base font-normal text-gray-700">
                {calendarEvent.description}
              </p>
            )}
          </div>
        </div>
      );
    },
  };

// 2. Gunakan useEffect untuk mengambil data saat komponen dimuat
  // 2. Gunakan useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://api.smpn2katapang.sch.id/school-events"
        );

        if (!res.ok) {
          console.error("Gagal mengambil data event");
          return;
        }

        const result = await res.json();
        const apiEvents: ApiEvent[] = result.data || [];

        // 3. Format data API
        const formattedEvents = apiEvents.map((event) => ({
          id: event.id,
          title: event.title,
          description: event.description ?? "", // <-- Tetap seperti ini (sudah benar)
          
          // PERBAIKAN: Kembalikan ke Temporal.PlainDate
          start: Temporal.PlainDate.from(event.start),
          end: Temporal.PlainDate.from(event.end),
        }));

        // 4. Masukkan data event ke kalender
        eventsService.set(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [eventsService]); // Dependensi sudah benar

  const calendar = useNextCalendarApp({
    views: [createViewMonthGrid()],
    plugins: [eventsService, eventModal],
    callbacks: {},
  });

  return (
    <div>
      <ScheduleXCalendar
        customComponents={customComponents}
        calendarApp={calendar}
      />
    </div>
  );
}

export default CalendarApp;