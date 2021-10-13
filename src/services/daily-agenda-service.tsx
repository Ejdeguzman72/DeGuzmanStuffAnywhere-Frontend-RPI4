import Axios from  'axios';

const GetAllDailyAgendaItems = () => {
    return Axios.get('localhost:8080/app/fun-apps/to-do-list/all');
}

const GetAllDailyAgendaItemNames = () => {
    return Axios.get('localhost:8080/app/fun-apps/to-do-list/all-names');
}

const AddDailyAgendaItems = (data: any) => {
    return Axios.post(`localhost:8080/app/fun-apps/to-do-list/add-item`, data)
}

const CompleteDailyAgendaItems = (agendaId: any, data: any) => {
    return Axios.put(`localhost:8080/app/fun-apps/to-do-list/daily-agenda/complete-item/${agendaId}`, data);
}

export default {
    GetAllDailyAgendaItems,
    GetAllDailyAgendaItemNames,
    AddDailyAgendaItems,
    CompleteDailyAgendaItems
}