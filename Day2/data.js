require('es6-promise').polyfill();
require('isomorphic-fetch');
var fs = require('fs')

const api = 'http://dummy.restapiexample.com/api/v1/employees';

module.exports = async function(){
    try {
        //lấy dữ liệu
        const response = await fetch(api);
        //chuyển thành json
        const json = await response.json();

        //chuyển thành chuỗi
        const data = JSON.stringify(json.data);
        fs.writeFileSync('./files/employees.json', data, 'utf-8');
        return data;
    } catch(err) {
        console.log(err);
        return null;
    }

}
