import { User } from './user';

export type LessonLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface Lesson {

id?: number;
title: string;
description: string;
startTime: string;
endTime: string;
price: number;
maxStudents: number;
level: LessonLevel;
instructor?: User;
}
