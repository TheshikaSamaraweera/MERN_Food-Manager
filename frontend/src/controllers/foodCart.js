import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addAllCartItems = async (itemsArr, id, nic) => {
   
    var month = new Date().getUTCMonth() + 1; //months from 1-12
    
    var day = new Date().getUTCDate();
  
    var year = new Date().getUTCFullYear();
    let date = year + "-" + month + "-" + day;
    let time = new Date().toLocaleTimeString('en-US');
    let orderId = new Date().toISOString();

    for (let item of itemsArr) {
       
        let newItem = {
            reservationId: id, 
            date: date,
            time: time,
            itemId: item.item.id,
            itemName: item.item.name,
            price: item.price, 
            orderId: orderId,
            nic: nic
        }
     
        const { data } = await axios.post(baseURL + '/foodCart/add', newItem);
    }
    return orderId;
}

export const getOrdersForSelectedPeriod = async (startDate, endDate) => {
    const { data } = await axios.get(baseURL + '/foodCart/getOrdersForSelectedPeriod/' + startDate + '/' + endDate);
    return data;
}

export const getRecordsForAOrder = async (nic) => {
    const { data } = await axios.get(baseURL + '/foodCart/getRecordsForAOrder/' + nic);
    return data;
}

export const getRecordsForAOrderWithImage = async (nic) => {
    const { data } = await axios.get(baseURL + '/foodCart/getRecordsForAOrderWithImage/' + nic);
    return data;
}

export const getOrdersCountForAMonth = async (month) => {
    const { data } = await axios.get(baseURL + '/foodCart//getOrdersCountForAMonth/' + month);
    return data;
}

export const getRevenueForAMonth = async (month) => {
    const { data } = await axios.get(baseURL + '/foodCart/getRevenueForAMonth/' + month);
    return data;
}

export const getRevenueList = async () => {
    const { data } = await axios.get(baseURL + '/foodCart/getRevenueList');
    return data;
}

export const getFoodBill = async (details) => {
    const { data } = await axios.post(baseURL + '/foodCart/getFoodBill/', details);
    return data;
}