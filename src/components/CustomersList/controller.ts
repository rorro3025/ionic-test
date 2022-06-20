export const getAllCustomers = async () => {
    let response = await fetch("http://localhost:8080/api/customers");
    return await response.json();
}

export const deleteCustomer = async (id: number | undefined) => {
    await fetch(`http://localhost:8080/api/customers/${id}`, {
        method: "DELETE",
    })
}