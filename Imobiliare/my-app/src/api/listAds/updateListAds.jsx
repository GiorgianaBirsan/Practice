export default function updateListAds(props){
  
     fetch('https://jsonblob.com/api/jsonBlob/1070013909616050176', {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'https:://jsonblob.com',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Request-Method': 'PUT',
        'X-jsonblob': '1068519628736839680',
         Origin: 'https:://jsonblob.com',
        'Accept-Post': '*',
      },
      body: JSON.stringify(props),
    }).then(result => {
      if (result.ok) {
        result.json();
      }
    });
}