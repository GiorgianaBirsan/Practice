export default  function  getListAds (){
    return  fetch('https://jsonblob.com/api/jsonBlob/1070013909616050176', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'https:://jsonblob.com',
      },
    })
      .then(result => {
        if (result.ok) {
          return result.json();
        }
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.error('err', error);
      });
}