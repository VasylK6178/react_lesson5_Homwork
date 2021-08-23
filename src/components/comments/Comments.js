const getComments = () => {

    return  fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())

}
export {getComments};