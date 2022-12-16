import axios from "axios";

const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = personObject => {
    return axios.post(baseUrl, personObject)
}

const updateContact = (id, personObject) => {
    const req = axios.put(`${baseUrl}/${id}`, personObject)
    req.then(response => response.data)
}

const deleteContact = (id, personObject) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then(response => response.data)
}


export default {
    getAll: getAll,
    create: create,
    deleteContact: deleteContact,
    updateContact: updateContact
}