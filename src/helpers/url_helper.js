//Post
export const API_LIST_TOPIC = "topics?populate=image";
export const API_LIST_COURSE_BY_TOPIC = "courses?populate=thumb&filters[topic]=";
export const API_LIST_LESSON_BY_COURSE = "lessons?populate=*&filters[course]=";

export const API_SOCIAL_LOGIN = "auth/google/callback";