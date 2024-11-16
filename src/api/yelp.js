import axios from 'axios';
export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization : 'Bearer jPyhQ_JC8FZFNSZvY_t46imGSBNMMhz4n3_n8QxfUfUjZR_F6UCW561rsF0YvbTuntUYGf4ccdD1co7tVQBXZVlGSK1VHHrperqm27qb-LZbZpjE1RTlpC-wQwk2Z3Yx'
    }
})

