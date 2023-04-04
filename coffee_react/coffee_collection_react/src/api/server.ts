const token = '4fa7402f03e443a8bc52dbdc651b1d6e204d02b586259b7e'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://certain-aeolian-yard.glitch.me/api/my_coffees`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://certain-aeolian-yard.glitch.me',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://certain-aeolian-yard.glitch.me/api/my_coffees`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://certain-aeolian-yard.glitch.me',
                },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://certain-aeolian-yard.glitch.me/api/my_coffees/${id}`,
        {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://certain-aeolian-yard.glitch.me/'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update data on server.`)
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://certain-aeolian-yard.glitch.me/api/my_coffees/${id}`,
        {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://certain-aeolian-yard.glitch.me/'
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}