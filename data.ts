let professors: Professor[] = []

let classrooms: Classroom[] = []

let courses: Course[] = []

let schedule: Lesson[] = []

// Since TimeSlot has 7 possible time ranges one classroom can be occupied 7 times in one day
const maxDailyClassroomLessons: number = 7;
const maxWeeklyClassroomLessons: number = 35; // 7 possible lessons in one day * 5 days of the week