import axiosClient from './axiosClient';

const END_POINT = {
    CALENDARS: "Calendars"
}

export const getCalendarAPI = () => {
    return axiosClient.get(`${END_POINT.CALENDARS}`);
}
