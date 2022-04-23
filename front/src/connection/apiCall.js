import axios from 'axios';

// export function fetchCount(amount = 1) {
//     return new Promise((resolve) =>
//         setTimeout(() => resolve({ data: amount }), 500)
//     );
// }
export const getProducts = () => {
    return dispatch => {
        axios.get('http://localhost:3000/').then((response) => {
            response.data;
        });
    };
};