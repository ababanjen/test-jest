import { Availability, Lesson } from "../scheduler";

export const toTimeStamp = (time: string) => {
  const [hrs, mins] = time.split(":").map(Number);
  return { hrs, mins };
};

export const calculateDuration = (startTime: string, endTime: string): number => {
  const start = new Date();
  const end = new Date();

  const { hrs: startHr, mins: startMin } = toTimeStamp(startTime);
  const { hrs: endHr, mins: endMin } = toTimeStamp(endTime);

  start.setHours(startHr, startMin, 0, 0);
  end.setHours(endHr, endMin, 0, 0);

  return Math.ceil((end.valueOf() - start.valueOf()) / (60 * 1000));
};

export const getLessonDurations = (lessons: Lesson[]): number[] =>
  lessons.map((lesson) => lesson.duration);

export const getAvailabilityDurations = (
  availabilities: Availability[]
): number[] =>
  availabilities.map((avail) =>
    calculateDuration(avail.startTime, avail.endTime)
  );
