export const getData = () => {
    const data = sessionStorage.getItem('data');
    return JSON.parse(data)
}

export const idGenerator= ()=> {
    const data = getData();
    return data?.length + 1 ;
}

