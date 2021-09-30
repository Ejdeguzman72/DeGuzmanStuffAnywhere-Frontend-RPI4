import Axios from  'axios';

const GetAllDailyAgendaItems = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/fun-apps/to-do-list/all');
}

const GetAllDailyAgendaItemNames = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/fun-apps/to-do-list/all-names');
}

const AddDailyAgendaItems = (data: any) => {
    return Axios.post(`http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/fun-apps/to-do-list/add-item`, data)
}

const CompleteDailyAgendaItems = (agendaId: any, data: any) => {
    return Axios.put(`http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/fun-apps/to-do-list/daily-agenda/complete-item/${agendaId}`, data);
}

export default {
    GetAllDailyAgendaItems,
    GetAllDailyAgendaItemNames,
    AddDailyAgendaItems,
    CompleteDailyAgendaItems
}