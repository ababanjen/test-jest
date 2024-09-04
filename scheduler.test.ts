import Scheduler, { Availability, Schedule, Lesson, Day } from "./scheduler";

describe("Scheduler challenge tests", () => {
  // TODO Your test scripts goes here
  test("should return an empty schedule when no lessons are provided", () => {
    const availabilities: Availability[] = [
      {
        id: 1,
        day: 1,
        startTime: "09:00",
        endTime: "10:00",
      },
    ];

    const scheduler = new Scheduler();
    const schedules: Schedule[] = scheduler.schedule([], availabilities);
    expect(schedules).toEqual([]);
  });
  test("should schedule all lessons when total lesson duration is less than the total availability duration", () => {
    const lessons: Lesson[] = [
      { title: "Lesson 1", duration: 20 },
      { title: "Lesson 2", duration: 20 },
    ];

    const availabilities: Availability[] = [
      { id: 1, day: 1 as Day, startTime: "00:00", endTime: "13:00" },
      { id: 2, day: 2 as Day, startTime: "18:00", endTime: "19:00" },
      { id: 3, day: 2 as Day, startTime: "15:00", endTime: "16:00" },
    ];

    const result: Schedule[] = [
      {
        availabilityId: 1,
        lessons,
      },
    ];

    const scheduler = new Scheduler();
    const schedules = scheduler.schedule(lessons, availabilities);
    expect(schedules).toEqual(result);
  });
  test('should return an empty schedule when availabilities are empty', () => {
    const lessons: Lesson[] = [
      { title: 'Sample', duration: 30 },
    ];
    const scheduler = new Scheduler();
    const schedules: Schedule[] = scheduler.schedule(lessons, []);
    expect(schedules).toStrictEqual([]);
  });

  test('should correctly schedule lessons across multiple availabilities', () => {
    const lessons: Lesson[] = [
      { title: 'Lesson 1', duration: 15 },
      { title: 'Lesson 2', duration: 30 },
      { title: 'Lesson 3', duration: 20 },
    ];
  
    const availabilities = [
      { id: 1, day: 1 as Day, startTime: '09:00', endTime: '10:00' },
      { id: 2, day: 2 as Day, startTime: '09:00', endTime: '10:00' },
    ];
  
    const result: Schedule[] = [
      {
        availabilityId: 1,
        lessons: [
          { title: 'Lesson 1', duration: 15 },
          { title: 'Lesson 2', duration: 30 },
          { title: 'Lesson 3', duration: 15 }, // 20 - 15 = 5 minutes left
        ],
      },
      {
        availabilityId: 2,
        lessons: [
          { title: 'Lesson 3', duration: 5 }, // Remaining 5 minutes from Lesson 3
        ],
      },
    ];
  
    const scheduler = new Scheduler();
    const schedules = scheduler.schedule(lessons, availabilities);
    expect(schedules).toEqual(result);
  });
});
