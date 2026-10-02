// Calendar booking helpers — wired to the connected calendar integration.
// Used by the demo booking section to fetch real availability and submit bookings.

const BOOKING_API_URL = "https://backend.leadconnectorhq.com";
const VIBE_API_URL = "https://backend.leadconnectorhq.com/vibe-ai";

export const CALENDAR_ID = "tzcviDF0KQrvnNIcf7Bu";
export const LOCATION_ID = "XLxqA97WNOslkoYH2shj";

export type CustomFieldValue = { id: string; field_value: string };

export type BookingPayload = {
  locationId: string;
  calendarId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedSlot: string;
  selectedTimezone?: string;
  sessionId?: string;
  customFields?: CustomFieldValue[];
} & Partial<
  Record<
    | "notes"
    | "address1"
    | "city"
    | "state"
    | "postalCode"
    | "country"
    | "companyName"
    | "website"
    | "gender"
    | "dateOfBirth"
    | "timezone",
    string
  >
>;

export const getBrowserTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export const clampAvailabilityRange = (startMs: number, endMs: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = Math.max(startMs, today.getTime());
  const maxEndDate = startDate + 31 * 24 * 60 * 60 * 1000;
  const endDate = Math.min(Math.max(endMs, startDate), maxEndDate);

  return { startDate, endDate };
};

// Free-slots response: { "2026-03-02": { slots: ["2026-03-02T15:30:00-07:00"] } }
export type FreeSlotsResponse = Record<string, { slots: string[] }>;

export const fetchCalendarFreeSlots = async (
  calendarId: string,
  startMs: number,
  endMs: number,
): Promise<FreeSlotsResponse> => {
  const { startDate, endDate } = clampAvailabilityRange(startMs, endMs);
  const params = new URLSearchParams({
    startDate: String(startDate),
    endDate: String(endDate),
    timezone: getBrowserTimezone(),
  });

  const response = await fetch(`${BOOKING_API_URL}/calendars/${calendarId}/free-slots?${params}`);
  if (!response.ok) throw new Error("Failed to fetch calendar availability");
  return response.json();
};

export const submitCalendarBooking = async (payload: BookingPayload) => {
  const response = await fetch(`${VIBE_API_URL}/booking/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      selectedTimezone: payload.selectedTimezone ?? getBrowserTimezone(),
      sessionId: payload.sessionId ?? crypto.randomUUID(),
      customFields: payload.customFields ?? [],
    }),
  });

  if (!response.ok) throw new Error("Booking submission failed");
  return response.json();
};

// Format an ISO slot string into a readable HH:MM time (browser local tz).
export const formatSlotTime = (isoSlot: string): string => {
  try {
    const d = new Date(isoSlot);
    return d.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoSlot;
  }
};

// Format an ISO slot string into a readable date label e.g. "Mar., 13 Oct 2026".
export const formatSlotDate = (isoSlot: string): string => {
  try {
    const d = new Date(isoSlot);
    return d.toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

// Build a YYYY-MM-DD key (local) from a Date.
export const dateKey = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
