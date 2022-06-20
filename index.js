// Add your code here
const body = document.getElementsByTagName("body")[0]

function submitData(firstName, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    }
    return fetch ("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(body => addNewContact(body.id))

    .catch(response => alert('Unauthorized Access'))
}

function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID
    document.body.append(message)
}
submitData("Name", "name@name.com")