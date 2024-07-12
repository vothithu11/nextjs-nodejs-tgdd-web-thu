// src/api/productAPI.js
import axiosClient from './axiosClient';

const productAPI = {
    // getAll(params) {
    //     const url = '/posts';
    //     return axiosClient.get(url, { params: { brand: 'iPhone' } });
    // },
    getAll(params) {
        const url = '/posts';
        return axiosClient.get(url, { params: params });
    },

    // get(id) {
    //     const url = `/posts/${id}`;
    //     return axiosClient.get(url);
    // },

    // add(data) {
    //     const url = '/posts';
    //     return axiosClient.post(url, data);
    // },

    // update(id, data) {
    //     const url = `/posts/${id}`;
    //     return axiosClient.put(url, data);
    // },

    // delete(id) {
    //     const url = `/posts/${id}`;
    //     return axiosClient.delete(url);
    // },
};

export default productAPI;
