const url = "http://localhost:8000/api";
let token = "Rkuik7Q8eykL47Y1HqBRd00dRMXfrfKtQV30RUZO"

export const link = axios.create({
    baseURL: url,
    headers: {
        'api_token': token
    }
});