import Axios from  'axios';

const GetAllDailyAgendaItems = () => {
    return Axios.get('http://localhost:8080/app/fun-apps/to-do-list/all');
}

const GetAllDailyAgendaItemNames = () => {
    return Axios.get('http://localhost:8080/app/fun-apps/to-do-list/all-names');
}

export default {
    GetAllDailyAgendaItems,
    GetAllDailyAgendaItemNames
}