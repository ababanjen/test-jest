import {
  getLessonDurations,
  getAvailabilityDurations,
} from "./stories/helpers";

export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {
  title: string;
  duration: number;
};

export type Availability = {
  id: number;
  day: Day;
  startTime: string;
  endTime: string;
};

export type Schedule = {
  availabilityId: number;
  lessons: Lesson[];
};

class Scheduler {
  constructor() {}

  schedule(lessons: Lesson[], availabilities: Availability[]): Schedule[] {
    // TODO implement algorithm for scheduling here
    const scheduleLessons = (
      lessons: Lesson[],
      availabilities: Availability[]
    ) => {
      let availabilityIdx = 0;
      let lessonIdx = 0;
      const lessonDurations = getLessonDurations(lessons);
      const availabilityDurations = getAvailabilityDurations(availabilities);
      const schedulesMap = new Map<number, Schedule>();

      while (
        availabilityIdx < availabilities.length &&
        lessonIdx < lessons.length
      ) {
        const availability = availabilities[availabilityIdx];
        const lesson = lessons[lessonIdx];
        const lessonDuration = lessonDurations[lessonIdx];
        const availabilityDuration = availabilityDurations[availabilityIdx];

        let schedule = schedulesMap.get(availability.id);

        if (!schedule) {
          schedule = { availabilityId: availability.id, lessons: [] };
          schedulesMap.set(availability.id, schedule);
        }

        const duration = Math.min(lessonDuration, availabilityDuration);

        schedule.lessons.push({
          title: lesson.title,
          duration,
        });

        if (duration === lessonDuration) {
          lessonDurations[lessonIdx] = 0;
          if (availabilityDuration > duration) {
            availabilityDurations[availabilityIdx] -= duration;
          } else {
            availabilityIdx++;
          }
          lessonIdx++;
        } else {
          lessonDurations[lessonIdx] -= duration;
          availabilityDurations[availabilityIdx] -= duration;
          if (availabilityDurations[availabilityIdx] === 0) {
            availabilityIdx++;
          }
        }
      }

      // Convert schedulesMap to an array
      return Array.from(schedulesMap.values());
    };

    const schedules = scheduleLessons(lessons, availabilities);
    return schedules;
  }
}

export default Scheduler;
